import React from 'react';
import { NavItem } from '@/components/ui/NavItem';
import { ThemeButton } from '@/components/ui/ThemeButton';
import { Search, Menu } from 'lucide-react';

export function Header() {
  // const wrapperBgColor = 'bg-gray-100 dark:bg-gray-950';

  return (
    <div className="fixed top-0 w-full md:static bg-[#282c34] px-4 py-4 sm:px-6 lg:px-8">
      <header className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 md:p-6 transition-colors">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
            <div className="flex-1 max-w-md">
              <div className="relative">
                <a href="/" className="text-xl font-bold text-black dark:text-white">
                  ARIVE.
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex ml-auto items-center space-x-2">
              <NavItem icon={Search} onClick={() => { }} />
              <ThemeButton />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}