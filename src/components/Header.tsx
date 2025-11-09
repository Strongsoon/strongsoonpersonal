import { Menu } from "lucide-react";
import { useState } from "react";

type Page = "home" | "projects" | "contact";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { page: Page; label: string }[] = [
    { page: "home", label: "Home" },
    { page: "projects", label: "Projects" },
    { page: "contact", label: "Contact Information" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors"
          >
            VB
          </button>

          <div className="hidden md:flex gap-6">
            {navItems.map(({ page, label }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === page
                    ? "bg-slate-800 text-white"
                    : "text-slate-600 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 hover:bg-slate-200 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 animate-fadeIn">
            {navItems.map(({ page, label }) => (
              <button
                key={page}
                onClick={() => {
                  onNavigate(page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                  currentPage === page
                    ? "bg-slate-800 text-white"
                    : "text-slate-600 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
