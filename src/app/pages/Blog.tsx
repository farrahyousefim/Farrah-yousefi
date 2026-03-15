import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Footer } from '@/app/components/Footer';
import { Link } from 'react-router';
import { blogPosts } from '@/app/data/blogPosts';

export function Blog() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-20">
          {blogPosts.map((post) => (
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

        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-['Lustria',serif] text-[17px] text-black/30">
              Coming soon.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
