import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Footer } from '@/app/components/Footer';
import { Link, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '@/lib/sanity';
import { blogPosts as localPosts } from '@/app/data/blogPosts';

interface SanityPost {
  title: string;
  subtitle?: string;
  date: string;
  coverImage?: any;
  content?: any[];
}

function renderInlineChildren(children: any[], markDefs: any[] = []) {
  return children?.map((child: any, i: number) => {
    const marks = child.marks || [];
    const text = child.text;

    const linkKey = marks.find((m: string) => markDefs.some((d: any) => d._key === m && d._type === 'link'));
    if (linkKey) {
      const def = markDefs.find((d: any) => d._key === linkKey);
      return <a key={i} href={def?.href} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">{text}</a>;
    }
    if (marks.includes('code')) return <code key={i} className="bg-black/5 px-1.5 py-0.5 rounded font-mono text-[13px]">{text}</code>;
    if (marks.includes('strong') && marks.includes('em')) return <strong key={i}><em>{text}</em></strong>;
    if (marks.includes('strong')) return <strong key={i} className="font-bold">{text}</strong>;
    if (marks.includes('em')) return <em key={i}>{text}</em>;
    if (marks.includes('underline')) return <u key={i}>{text}</u>;
    return <span key={i}>{text}</span>;
  });
}

function SanityContent({ blocks }: { blocks: any[] }) {
  // Group consecutive list items together
  const groups: { type: string; items: any[] }[] = [];
  blocks.forEach((block) => {
    if (block._type === 'block' && block.listItem) {
      const last = groups[groups.length - 1];
      if (last && last.type === `list-${block.listItem}`) {
        last.items.push(block);
      } else {
        groups.push({ type: `list-${block.listItem}`, items: [block] });
      }
    } else {
      groups.push({ type: block._type === 'image' ? 'image' : 'block', items: [block] });
    }
  });

  return (
    <>
      {groups.map((group, gi) => {
        if (group.type === 'list-bullet') {
          return (
            <ul key={gi} className="list-disc pl-6 mb-6 md:mb-8 space-y-2">
              {group.items.map((item, ii) => (
                <li key={ii} className="font-['Lustria',serif] text-[15px] md:text-[17px] text-black/80 leading-[1.9]">
                  {renderInlineChildren(item.children, item.markDefs)}
                </li>
              ))}
            </ul>
          );
        }
        if (group.type === 'list-number') {
          return (
            <ol key={gi} className="list-decimal pl-6 mb-6 md:mb-8 space-y-2">
              {group.items.map((item, ii) => (
                <li key={ii} className="font-['Lustria',serif] text-[15px] md:text-[17px] text-black/80 leading-[1.9]">
                  {renderInlineChildren(item.children, item.markDefs)}
                </li>
              ))}
            </ol>
          );
        }

        const block = group.items[0];

        if (block._type === 'image') {
          return (
            <figure key={gi} className="my-8 md:my-12">
              <img src={urlFor(block).width(1200).url()} alt={block.caption || ''} className="w-full h-auto" />
              {block.caption && (
                <figcaption className="font-['Lustria',serif] text-[13px] text-black/40 mt-3 text-center">{block.caption}</figcaption>
              )}
            </figure>
          );
        }

        if (block._type === 'block') {
          if (block.style === 'h2') return (
            <h2 key={gi} className="font-['Lustria',serif] text-[20px] md:text-[24px] text-black leading-[1.3] mt-8 md:mt-12 mb-4 md:mb-6">
              {renderInlineChildren(block.children, block.markDefs)}
            </h2>
          );
          if (block.style === 'h3') return (
            <h3 key={gi} className="font-['Lustria',serif] text-[18px] md:text-[20px] text-black leading-[1.3] mt-6 md:mt-10 mb-3 md:mb-4">
              {renderInlineChildren(block.children, block.markDefs)}
            </h3>
          );
          if (block.style === 'blockquote') return (
            <blockquote key={gi} className="border-l-2 border-black/15 pl-6 md:pl-8 my-8 md:my-10">
              <p className="font-['Lustria',serif] text-[17px] md:text-[20px] text-black/60 italic leading-[1.6]">
                {renderInlineChildren(block.children, block.markDefs)}
              </p>
            </blockquote>
          );
          return (
            <p key={gi} className="font-['Lustria',serif] text-[15px] md:text-[17px] text-black/80 leading-[1.9] mb-6 md:mb-8">
              {renderInlineChildren(block.children, block.markDefs)}
            </p>
          );
        }

        return null;
      })}
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const [sanityPost, setSanityPost] = useState<SanityPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Check local posts first
  const localPost = localPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (localPost) {
      setLoading(false);
      return;
    }

    sanityClient
      .fetch(
        `*[_type == "blogPost" && slug.current == $slug][0] { title, subtitle, date, coverImage, content }`,
        { slug }
      )
      .then((post) => {
        if (post) {
          setSanityPost(post);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug, localPost]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fffcfb] flex items-center justify-center">
        <p className="font-['Lustria',serif] text-[17px] text-black/30">Loading...</p>
      </div>
    );
  }

  // Render local post
  if (localPost) {
    return (
      <div className="min-h-screen bg-[#fffcfb]">
        <NavigationMinimal />

        {localPost.coverImage && (
          <div className="w-full pt-[72px]">
            <img src={localPost.coverImage} alt={localPost.title} className="w-full h-[40vh] md:h-[60vh] object-cover" />
          </div>
        )}

        <div className="mx-auto max-w-[700px] px-6 md:px-8 pt-10 md:pt-16 pb-6 md:pb-8 text-center">
          <p className="font-['Lustria',serif] text-[12px] text-black/40 tracking-[0.15em] uppercase mb-4 md:mb-6">{localPost.date}</p>
          <h1 className="font-['Lustria',serif] text-[28px] md:text-[38px] text-black leading-[1.2] mb-3 md:mb-4">{localPost.title}</h1>
          {localPost.subtitle && (
            <p className="font-['Lustria',serif] text-[18px] md:text-[22px] text-black/60 italic leading-[1.4]">{localPost.subtitle}</p>
          )}
        </div>

        <div className="mx-auto max-w-[600px] px-6 md:px-8">
          <div className="h-[0.5px] bg-black/15 mb-8 md:mb-12" />
        </div>

        <div className="mx-auto max-w-[600px] px-6 md:px-8 pb-16 md:pb-20">
          {localPost.content.map((block, index) => {
            if (block.type === 'text') return <p key={index} className="font-['Lustria',serif] text-[15px] md:text-[17px] text-black/80 leading-[1.9] mb-6 md:mb-8">{block.value}</p>;
            if (block.type === 'heading') return <h2 key={index} className="font-['Lustria',serif] text-[20px] md:text-[24px] text-black leading-[1.3] mt-8 md:mt-12 mb-4 md:mb-6">{block.value}</h2>;
            if (block.type === 'image') return (
              <figure key={index} className="my-8 md:my-12">
                <img src={block.src} alt={block.caption || ''} className="w-full h-auto" />
                {block.caption && <figcaption className="font-['Lustria',serif] text-[13px] text-black/40 mt-3 text-center">{block.caption}</figcaption>}
              </figure>
            );
            if (block.type === 'quote') return (
              <blockquote key={index} className="border-l-2 border-black/15 pl-6 md:pl-8 my-8 md:my-10">
                <p className="font-['Lustria',serif] text-[17px] md:text-[20px] text-black/60 italic leading-[1.6]">{block.value}</p>
              </blockquote>
            );
            return null;
          })}
        </div>

        <div className="mx-auto max-w-[600px] px-6 md:px-8 pb-16 md:pb-20 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-['Lustria',serif] text-[13px] tracking-[0.1em] uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  // Render Sanity post
  if (notFound || !sanityPost) {
    return (
      <div className="min-h-screen bg-[#fffcfb] flex items-center justify-center">
        <p className="font-['Lustria',serif] text-[17px] text-black/50">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffcfb]">
      <NavigationMinimal />

      {sanityPost.coverImage && (
        <div className="w-full pt-[72px]">
          <img src={urlFor(sanityPost.coverImage).width(1600).url()} alt={sanityPost.title} className="w-full h-[40vh] md:h-[60vh] object-cover" />
        </div>
      )}

      <div className="mx-auto max-w-[700px] px-6 md:px-8 pt-10 md:pt-16 pb-6 md:pb-8 text-center">
        <p className="font-['Lustria',serif] text-[12px] text-black/40 tracking-[0.15em] uppercase mb-4 md:mb-6">{sanityPost.date}</p>
        <h1 className="font-['Lustria',serif] text-[28px] md:text-[38px] text-black leading-[1.2] mb-3 md:mb-4">{sanityPost.title}</h1>
        {sanityPost.subtitle && (
          <p className="font-['Lustria',serif] text-[18px] md:text-[22px] text-black/60 italic leading-[1.4]">{sanityPost.subtitle}</p>
        )}
      </div>

      <div className="mx-auto max-w-[600px] px-6 md:px-8">
        <div className="h-[0.5px] bg-black/15 mb-8 md:mb-12" />
      </div>

      <div className="mx-auto max-w-[600px] px-6 md:px-8 pb-16 md:pb-20">
        {sanityPost.content && <SanityContent blocks={sanityPost.content} />}
      </div>

      <div className="mx-auto max-w-[600px] px-6 md:px-8 pb-16 md:pb-20 text-center">
        <Link to="/blog" className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-['Lustria',serif] text-[13px] tracking-[0.1em] uppercase">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>

      <Footer />
    </div>
  );
}
