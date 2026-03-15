import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { HeroMinimal } from '@/app/components/HeroMinimal';
import { ProjectsMinimal, ProjectsGrid } from '@/app/components/ProjectsMinimal';
import { Footer } from '@/app/components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-[#fffcfb]">
      <NavigationMinimal />
      <HeroMinimal />
      <ProjectsMinimal />
      <div className="h-[30px] md:h-[60px] bg-[#fffcfb]" />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
