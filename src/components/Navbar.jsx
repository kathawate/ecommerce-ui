import { useState } from "react";
import { ChevronDown, Menu, X, Search, ShoppingCart, User, Heart } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const [cartCount] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menu = [
    { 
      name: "Kurtis", 
      sub: [
        { label: "Anarkali", icon: "✨" },
        { label: "Straight", icon: "👗" },
        { label: "Printed", icon: "🎨" }
      ], 
      href: "/kurtis" 
    },
    { 
      name: "Punjabi", 
      sub: [
        { label: "Patiala", icon: "✨" },
        { label: "Phulkari", icon: "🌸" },
        { label: "Wedding", icon: "💍" }
      ], 
      href: "/punjabi" 
    },
    { 
      name: "New In", 
      sub: [
        { label: "Latest", icon: "⭐" },
        { label: "Trending", icon: "🔥" }
      ], 
      href: "/new" 
    },
    { name: "Sale", href: "/sale" },
    { name: "About", href: "/about" },
  ];

  const handleMenuClick = (href) => {
    console.log("Navigating to:", href);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50 border-b border-white/20">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleMenuClick("/")}
          className="relative group"
        >
          {/* Subtle elegant glow on hover */}
          <div className="absolute -inset-3 bg-gradient-to-r from-[#ffd700]/15 to-[#ffd700]/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Logo text */}
          <h1 className="relative text-2xl md:text-3xl font-serif tracking-[0.5em] text-gray-900 font-bold group-hover:text-gray-800 transition-colors duration-300">
            ADIPTA
          </h1>
          
        </button>

        {/* Desktop menu - Premium & Bright */}
        <ul className="hidden lg:flex gap-12 text-xs tracking-widest font-semibold">
          {menu.map((item) => (
            <li 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                onClick={() => handleMenuClick(item.href)}
                className="flex items-center gap-2 py-2 text-gray-800 hover:text-[#ff6b6b] transition-colors duration-300 relative group"
              >
                <span>{item.name}</span>
                {item.sub && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${hoveredMenu === item.name ? 'rotate-180' : ''}`}
                  />
                )}
                <span className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#ff6b6b] to-[#ff8c42] group-hover:w-full transition-all duration-300 rounded-full shadow-md shadow-red-200/50"></span>
              </button>

              {/* Premium Transparent Dropdown */}
              {item.sub && (
                <div className={`absolute top-12 left-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2 ${
                  hoveredMenu === item.name ? 'translate-y-0' : 'translate-y-2'
                }`}>
                  <div className="p-3">
                    {item.sub.map((sub, idx) => (
                      <button
                        key={sub.label}
                        onClick={() => handleMenuClick(item.href)}
                        className={`w-full text-left px-4 py-3.5 rounded-xl text-sm text-gray-800 font-medium hover:bg-gradient-to-r hover:from-pink-100/60 hover:to-orange-100/60 hover:text-[#ff6b6b] transition-all duration-300 flex items-center gap-3 group/item backdrop-blur-sm ${
                          idx !== item.sub.length - 1 ? 'border-b border-gray-100/50' : ''
                        }`}
                      >
                        <span className="text-lg">{sub.icon}</span>
                        <span className="font-semibold">{sub.label}</span>
                        <span className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <ChevronDown size={12} className="rotate-[-90deg]" />
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
                  <div className="px-4 py-3 text-xs text-gray-700 hover:text-[#ff6b6b] transition-colors cursor-pointer font-medium">
                    View All {item.name} →
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right icons - Premium & Luxurious */}
        <div className="hidden md:flex gap-3 items-center">
          <button
            onClick={() => handleMenuClick("/search")}
            className="p-2.5 hover:bg-gradient-to-r from-yellow-100/60 to-orange-100/60 rounded-full backdrop-blur-sm transition-all duration-300 text-gray-700 hover:text-[#ff6b6b] relative group border border-white/40"
            aria-label="Search"
            title="Search"
          >
            <Search size={20} />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-gray-700/30">
              Search
            </span>
          </button>

          <button
            onClick={() => handleMenuClick("/wishlist")}
            className="p-2.5 hover:bg-gradient-to-r from-pink-100/60 to-red-100/60 rounded-full backdrop-blur-sm transition-all duration-300 text-gray-700 hover:text-[#ff6b6b] relative group border border-white/40"
            aria-label="Wishlist"
            title="My Wishlist"
          >
            <Heart size={20} />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-gray-700/30">
              Wishlist
            </span>
          </button>

          <button
            onClick={() => handleMenuClick("/account")}
            className="p-2.5 hover:bg-gradient-to-r from-blue-100/60 to-cyan-100/60 rounded-full backdrop-blur-sm transition-all duration-300 text-gray-700 hover:text-[#00a8e8] relative group border border-white/40"
            aria-label="Account"
            title="My Account"
          >
            <User size={20} />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-gray-700/30">
              Account
            </span>
          </button>

          <button
            onClick={() => handleMenuClick("/cart")}
            className="p-2.5 hover:bg-gradient-to-r from-green-100/60 to-emerald-100/60 rounded-full backdrop-blur-sm transition-all duration-300 text-gray-700 hover:text-[#00c853] relative group border border-white/40"
            aria-label="Shopping Cart"
            title="Shopping Cart"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-br from-[#ff6b6b] to-[#ff8c42] text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce shadow-lg shadow-red-300/50">
                {cartCount}
              </span>
            )}
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-gray-700/30">
              Cart
            </span>
          </button>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden text-gray-700 hover:text-[#ff6b6b] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/40 max-h-[calc(100vh-70px)] overflow-y-auto">
          {/* Mobile search */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100/50 bg-gradient-to-r from-yellow-50/60 to-orange-50/60 backdrop-blur-sm">
            <Search size={18} className="text-gray-600" />
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400"
            />
          </div>

          {/* Mobile menu items */}
          <div className="px-4 py-2">
            {menu.map((item) => (
              <div key={item.name} className="border-b border-gray-100/50 last:border-b-0">
                <button
                  className="w-full flex justify-between items-center py-3 text-sm tracking-widest hover:text-[#ff6b6b] transition font-semibold text-gray-800"
                  onClick={() => {
                    if (item.sub) {
                      setOpenItem(openItem === item.name ? null : item.name);
                    } else {
                      handleMenuClick(item.href);
                    }
                  }}
                >
                  {item.name}
                  {item.sub && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.sub && openItem === item.name && (
                  <div className="pl-4 pb-3 flex flex-col gap-1">
                    {item.sub.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleMenuClick(item.href)}
                        className="text-left text-sm text-gray-600 py-2 hover:text-[#ff6b6b] transition"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile bottom actions */}
          <div className="border-t border-gray-100/50 px-4 py-4 flex gap-3">
            <button
              onClick={() => handleMenuClick("/account")}
              className="flex-1 py-2 border-2 border-gray-200 rounded-xl hover:bg-blue-50/60 transition flex items-center justify-center gap-2 text-gray-700 font-semibold backdrop-blur-sm"
            >
              <User size={18} /> Account
            </button>
            <button
              onClick={() => handleMenuClick("/cart")}
              className="flex-1 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff8c42] text-white rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2 font-semibold shadow-md shadow-red-200/50"
            >
              <ShoppingCart size={18} /> Cart
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}