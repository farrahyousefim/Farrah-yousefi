import { useState } from 'react';
import { NavigationMinimal } from '@/app/components/NavigationMinimal';

interface PasswordGateProps {
  password: string;
  projectName: string;
  children: React.ReactNode;
}

export function PasswordGate({ password, projectName, children }: PasswordGateProps) {
  const storageKey = `unlocked-${projectName}`;
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(storageKey) === 'true');
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === password) {
      sessionStorage.setItem(storageKey, 'true');
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#fffcfb]">
      <NavigationMinimal />
      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        <h2 className="font-['Lustria',serif] text-[13px] tracking-[0.15em] uppercase text-black/40 mb-4">
          Protected Project
        </h2>
        <h1 className="font-['Lustria',serif] text-[32px] text-black mb-3 text-center">
          {projectName}
        </h1>
        <p className="font-['Lustria',serif] text-[15px] text-black/50 mb-10 text-center max-w-[400px]">
          This case study is password protected. Please enter the password to view.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-[320px]">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter password"
            className="w-full font-['Lustria',serif] text-[15px] text-black bg-transparent border-b border-black/20 focus:border-black outline-none py-3 text-center transition-colors"
          />
          {error && (
            <p className="font-['Lustria',serif] text-[13px] text-red-500">
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="font-['Lustria',serif] text-[13px] tracking-[0.12em] uppercase text-black/60 hover:text-black border border-black/20 hover:border-black rounded-full px-8 py-3 transition-colors"
          >
            View Project
          </button>
        </form>
      </div>
    </div>
  );
}
