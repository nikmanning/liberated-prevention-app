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
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-all ${
                isActive
                  ? 'text-[#212221] bg-[#F27046]/10'
                  : 'text-slate-500 hover:text-[#212221]'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
