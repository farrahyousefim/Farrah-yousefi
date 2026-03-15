/**
 * Blog posts data.
 *
 * To add a new post, add an object to this array.
 * Each post has:
 *   - slug: URL-friendly ID (e.g. "my-first-post")
 *   - title: The main title
 *   - subtitle: (optional) italic subtitle under the title
 *   - excerpt: Short description shown on the listing page
 *   - date: Display date string
 *   - coverImage: (optional) import an image and use it here
 *   - content: Array of content blocks:
 *       { type: 'text', value: 'paragraph text' }
 *       { type: 'heading', value: 'section heading' }
 *       { type: 'image', src: importedImage, caption: 'optional caption' }
 *       { type: 'quote', value: 'quote text' }
 */

export type ContentBlock =
  | { type: 'text'; value: string }
  | { type: 'heading'; value: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'quote'; value: string };

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  // Example post — replace or remove this with your own!
  {
    slug: 'designing-with-incomplete-information',
    title: 'Designing with Incomplete Information',
    subtitle: 'How I learned to move forward when the answers aren\'t clear yet.',
    excerpt: 'In complex projects, waiting for perfect information means never starting. Here\'s how I approach design when the picture is still forming.',
    date: 'March 2026',
    content: [
      {
        type: 'text',
        value: 'One of the biggest lessons I\'ve learned as a product designer is that you rarely have all the information you need at the start of a project. Especially in enterprise environments, where systems are tangled, teams have different mental models, and requirements shift as you dig deeper.',
      },
      {
        type: 'quote',
        value: 'The best designs don\'t come from perfect briefs — they come from asking the right questions early enough.',
      },
      {
        type: 'heading',
        value: 'Start with what you know',
      },
      {
        type: 'text',
        value: 'Instead of waiting for clarity, I start mapping what I do know. Even rough sketches and flow diagrams help surface the gaps. When you put something tangible in front of stakeholders, they can react to it — and that reaction is often more valuable than any brief.',
      },
      {
        type: 'heading',
        value: 'Design for flexibility',
      },
      {
        type: 'text',
        value: 'When technical details are still emerging, I design systems that can absorb change. Simple flows, safe defaults, clear guardrails, and modular UI that won\'t need a full redesign when new requirements appear.',
      },
      {
        type: 'text',
        value: 'This approach has saved me countless hours of rework and helped build trust with engineering teams who appreciate designs that respect their constraints.',
      },
    ],
  },
];
