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

export const blogPosts: BlogPost[] = [];
