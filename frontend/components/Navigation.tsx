import { Link, useLocation } from 'react-router-dom';
import { Home, Activity, Compass, Eye, GitBranch, TreePine } from 'lucide-react';

const tabs = [
  { path: '/origin', label: 'Origin', icon: Home },
  { path: '/pulse', label: 'Pulse', icon: Activity },
  { path: '/compass', label: 'Compass', icon: Compass },
  { path: '/lens', label: 'Lens', icon: Eye },
  { path: '/flow', label: 'Flow', icon: GitBranch },
  { path: '/roots', label: 'Roots', icon: TreePine },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-200 px-2 py-1">
      <div className="flex justify-around">
        {tabs.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center py-2 px-1 transition-all"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-1 transition-all ${
                isActive ? 'bg-slate-100' : ''
              }`}>
                {path === '/roots' ? (
                  <img src="/roots.png" alt="Roots" className="w-5 h-5" />
                ) : path === '/lens' ? (
                  <img src="/lens.png" alt="Lens" className="w-5 h-5" />
                ) : (
                  <Icon className="w-5 h-5 text-[#F27046]" />
                )}
              </div>
              <span className="text-xs font-medium text-[#212221]">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
