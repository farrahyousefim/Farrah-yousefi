import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Footer } from '@/app/components/Footer';
import { Link, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/app/data/blogPosts';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#fffcfb] flex items-center justify-center">
        <p className="font-['Lustria',serif] text-[17px] text-black/50">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffcfb]">
      <NavigationMinimal />

      {/* Cover image — full width */}
      {post.coverImage && (
        <div className="w-full pt-[72px]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[40vh] md:h-[60vh] object-cover"
          />
        </div>
      )}

      {/* Title + date */}
      <div className="mx-auto max-w-[700px] px-6 md:px-8 pt-10 md:pt-16 pb-6 md:pb-8 text-center">
        <p className="font-['Lustria',serif] text-[12px] text-black/40 tracking-[0.15em] uppercase mb-4 md:mb-6">
          {post.date}
        </p>
        <h1 className="font-['Lustria',serif] text-[28px] md:text-[38px] text-black leading-[1.2] mb-3 md:mb-4">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="font-['Lustria',serif] text-[18px] md:text-[22px] text-black/60 italic leading-[1.4]">
            {post.subtitle}
          </p>
        )}
      </div>

      <div className="mx-auto max-w-[600px] px-6 md:px-8">
        <div className="h-[0.5px] bg-black/15 mb-8 md:mb-12" />
      </div>

      {/* Content blocks */}
      <div className="mx-auto max-w-[600px] px-6 md:px-8 pb-16 md:pb-20">
        {post.content.map((block, index) => {
          if (block.type === 'text') {
            return (
              <p
                key={index}
                className="font-['Lustria',serif] text-[15px] md:text-[17px] text-black/80 leading-[1.9] mb-6 md:mb-8"
              >
                {block.value}
              </p>
            );
          }
          if (block.type === 'heading') {
            return (
              <h2
                key={index}
                className="font-['Lustria',serif] text-[20px] md:text-[24px] text-black leading-[1.3] mt-8 md:mt-12 mb-4 md:mb-6"
              >
                {block.value}
              </h2>
            );
          }
          if (block.type === 'image') {
            return (
              <figure key={index} className="my-8 md:my-12">
                <img
                  src={block.src}
                  alt={block.caption || ''}
                  className="w-full h-auto"
                />
                {block.caption && (
                  <figcaption className="font-['Lustria',serif] text-[13px] text-black/40 mt-3 text-center">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          if (block.type === 'quote') {
            return (
              <blockquote
                key={index}
                className="border-l-2 border-black/15 pl-6 md:pl-8 my-8 md:my-10"
              >
                <p className="font-['Lustria',serif] text-[17px] md:text-[20px] text-black/60 italic leading-[1.6]">
                  {block.value}
                </p>
              </blockquote>
            );
          }
          return null;
        })}
      </div>

      {/* Back to blog */}
      <div className="mx-auto max-w-[600px] px-6 md:px-8 pb-16 md:pb-20 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-['Lustria',serif] text-[13px] tracking-[0.1em] uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      <Footer />
    </div>
  );
}
