import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { HeroMinimal } from '@/app/components/HeroMinimal';
import { ProjectsMinimal } from '@/app/components/ProjectsMinimal';
import { AboutMinimal } from '@/app/components/AboutMinimal';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationMinimal />
      <HeroMinimal />
      <ProjectsMinimal />
      <AboutMinimal />
    </div>
  );
}
