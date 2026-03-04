import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';

const TOPICS = [
  'How AI is transforming construction material takeoffs and what GCs need to know',
  'The hidden cost of manual estimation: time, errors, and missed bids',
  'CSI specification parsing: why construction documents are harder than they look',
  'Vendor management in preconstruction: streamlining the pricing workflow',
  'Multi-option bidding strategies: standard vs premium vs budget material selections',
  'How general contractors can bid on more projects without hiring more estimators',
  'Construction plan reading with AI: from architectural drawings to quantity takeoffs',
  'The future of preconstruction: trends shaping the industry in 2025 and beyond',
  'Change order detection: catching scope changes before they become cost overruns',
  'Why construction estimating software needs to read both specs and plans',
  'Building a competitive bid: how technology gives GCs an edge',
  'From PDF to Excel: automating the construction takeoff pipeline',
  'The ROI of AI in preconstruction: real numbers from real contractors',
  'Door hardware takeoffs: why they are the hardest category to automate',
  'How small and mid-size GCs can compete with enterprise estimating teams',
  'Preconstruction workflow optimization: eliminating bottlenecks in bid preparation',
  'Understanding CSI MasterFormat: a practical guide for construction technology',
  'The bid-no-bid decision: how faster estimation changes the equation',
  'Construction technology adoption: overcoming resistance to change',
  'Collaborative bidding: how teams can work together on complex estimates',
  'Flooring takeoffs: challenges in measuring and specifying floor coverings',
  'The evolution of construction estimating: from paper to AI',
  'Why accuracy matters more than speed in construction takeoffs',
  'Integrating AI takeoffs with existing construction workflows',
];

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY environment variable is required');
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });

  const blogPostsPath = path.join(__dirname, '..', 'src', 'lib', 'blog-posts.ts');
  const existingContent = fs.readFileSync(blogPostsPath, 'utf-8');

  // Extract existing titles to avoid duplicates
  const existingTitles = [...existingContent.matchAll(/title:\s*[`"']([^`"']+)[`"']/g)].map(
    (m) => m[1].toLowerCase()
  );

  // Pick a topic not yet covered
  const availableTopics = TOPICS.filter(
    (topic) => !existingTitles.some((t) => t.includes(topic.slice(0, 30).toLowerCase()))
  );

  if (availableTopics.length === 0) {
    console.log('All topics have been covered. Add more topics to the list.');
    process.exit(0);
  }

  const topic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
  console.log(`Generating article on: ${topic}`);

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4000,
    messages: [
      {
        role: 'user',
        content: `Write a blog article for Precaliq, an AI-powered preconstruction platform for general contractors. The article should be about: "${topic}"

Requirements:
- Write 800-1200 words
- Use a professional but approachable tone
- Target audience: construction estimators, project managers, and GC owners
- Include practical insights, not just theory
- Use ## for section headers (2-4 sections)
- Use **bold** for emphasis sparingly
- Do NOT include a title — I will set that separately
- Do NOT include any frontmatter or metadata
- End with a brief, natural conclusion (not a hard sell)
- Separate paragraphs with double newlines
- Do not use bullet points with dashes; write in prose paragraphs

Return ONLY the article body text, nothing else.`,
      },
    ],
  });

  const articleContent = (response.content[0] as { type: string; text: string }).text.trim();

  // Generate title
  const titleResponse = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 100,
    messages: [
      {
        role: 'user',
        content: `Given this blog article topic for a construction technology company: "${topic}"

Write a compelling, SEO-friendly blog title. Requirements:
- 8-14 words
- Include a relevant keyword naturally
- Make it specific and actionable
- No clickbait

Return ONLY the title, nothing else.`,
      },
    ],
  });

  const title = (titleResponse.content[0] as { type: string; text: string }).text.trim().replace(/^["']|["']$/g, '');

  // Generate slug
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/-$/, '');

  // Generate excerpt
  const excerptResponse = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 200,
    messages: [
      {
        role: 'user',
        content: `Write a 1-2 sentence excerpt/meta description for this blog article titled "${title}". Keep it under 160 characters. Return ONLY the excerpt.`,
      },
    ],
  });

  const excerpt = (excerptResponse.content[0] as { type: string; text: string }).text.trim().replace(/^["']|["']$/g, '');

  // Format date
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Build the new post entry
  const escapedContent = articleContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  const escapedTitle = title.replace(/'/g, "\\'");
  const escapedExcerpt = excerpt.replace(/'/g, "\\'");

  const newPost = `  {
    slug: '${slug}',
    title: '${escapedTitle}',
    date: '${dateStr}',
    excerpt: '${escapedExcerpt}',
    content: \`${escapedContent}\`,
  },`;

  // Insert new post at the beginning of the array
  const updatedContent = existingContent.replace(
    'export const blogPosts: BlogPost[] = [',
    `export const blogPosts: BlogPost[] = [\n${newPost}`
  );

  fs.writeFileSync(blogPostsPath, updatedContent, 'utf-8');
  console.log(`Blog post generated: "${title}"`);
  console.log(`Slug: ${slug}`);
  console.log(`Date: ${dateStr}`);
}

main().catch((err) => {
  console.error('Failed to generate blog post:', err);
  process.exit(1);
});
