import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  const menu = [
    { name: "Kurtis", sub: ["Anarkali", "Straight", "Printed"] },
    { name: "Punjabi", sub: ["Patiala", "Phulkari", "Wedding"] },
    { name: "New In", sub: ["Latest", "Trending"] },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl shadow-sm z-50">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-serif tracking-[0.4em]">ADIPTA</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 text-sm tracking-widest">
          {menu.map((item) => (
            <li key={item.name} className="group relative">
              <div className="flex items-center gap-1 cursor-pointer">
                {item.name}
                <ChevronDown size={14} />
              </div>
              <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition p-4 min-w-[140px]">
                {item.sub.map((sub) => (
                  <p key={sub} className="py-1 hover:text-[#c9a46a] cursor-pointer">
                    {sub}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-6">
          {menu.map((item) => (
            <div key={item.name} className="border-b last:border-b-0">
              <button
                className="w-full flex justify-between items-center py-3 text-sm tracking-widest"
                onClick={() => setOpenItem(openItem === item.name ? null : item.name)}
              >
                {item.name}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${openItem === item.name ? "rotate-180" : ""}`}
                />
              </button>
              {openItem === item.name && (
                <div className="pl-4 pb-3 flex flex-col gap-2 text-sm text-gray-600">
                  {item.sub.map((sub) => (
                    <p key={sub} className="hover:text-[#c9a46a] cursor-pointer">
                      {sub}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}