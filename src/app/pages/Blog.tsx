import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Footer } from '@/app/components/Footer';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '@/lib/sanity';
import { blogPosts as localPosts } from '@/app/data/blogPosts';

interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  date: string;
  coverImage?: any;
}

export function Blog() {
  const [sanityPosts, setSanityPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "blogPost"] | order(date desc) { _id, title, slug, excerpt, date, coverImage }`)
      .then((posts) => {
        setSanityPosts(posts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const allPosts = [
    ...sanityPosts.map((p) => ({
      slug: p.slug.current,
      title: p.title,
      excerpt: p.excerpt || '',
      date: p.date,
      coverImage: p.coverImage ? urlFor(p.coverImage).width(800).url() : undefined,
      source: 'sanity' as const,
    })),
    ...localPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      coverImage: p.coverImage,
      source: 'local' as const,
    })),
  ];

  return (
    <div className="min-h-screen bg-[#fffcfb]">
      <NavigationMinimal />

      {/* Header */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 pt-[100px] md:pt-[120px] pb-8 md:pb-12">
        <h1 className="font-['Lustria',serif] text-[30px] md:text-[42px] text-black tracking-[0.06em] uppercase text-center mb-3 md:mb-4">
          Blog
        </h1>
        <p className="font-['Lustria',serif] text-[14px] md:text-[16px] text-black/40 text-center">
          Thoughts on design, process, and everything in between.
        </p>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="h-[0.5px] bg-black/15 mb-10 md:mb-16" />
      </div>

      {/* Posts grid */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 pb-16 md:pb-24">
        {loading ? (
          <div className="text-center py-20">
            <p className="font-['Lustria',serif] text-[17px] text-black/30">Loading...</p>
          </div>
        ) : allPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-['Lustria',serif] text-[17px] text-black/30">Coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-20">
            {allPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
                {post.coverImage && (
                  <div className="relative overflow-hidden mb-5 md:mb-6" style={{ aspectRatio: '16/10' }}>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <p className="font-['Lustria',serif] text-[12px] text-black/40 tracking-[0.1em] uppercase mb-2">
                  {post.date}
                </p>
                <h2 className="font-['Lustria',serif] text-[20px] md:text-[24px] text-black leading-[1.3] mb-2 group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h2>
                <p className="font-['Lustria',serif] text-[14px] md:text-[15px] text-black/50 leading-[1.6]">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
