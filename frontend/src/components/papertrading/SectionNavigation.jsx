function SectionNavigation() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navItems = [
    { id: "overview", label: "Overview", icon: "🏠" },
    { id: "holdings", label: "Holdings", icon: "💼" },
    { id: "history", label: "History", icon: "📜" },
    { id: "analytics", label: "Analytics", icon: "📊" },
    { id: "market", label: "Market", icon: "📈" },
  ];

  return (
    <div className="sticky top-0 z-40 bg-[#0B1120]/95 backdrop-blur-md py-4 mb-10 border-b border-gray-800">

      <div className="flex flex-wrap gap-4 justify-center">

        {navItems.map((item) => (

          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="px-5 py-2 rounded-full bg-[#1B2335] hover:bg-violet-600 transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">
              {item.icon}
            </span>

            {item.label}

          </button>

        ))}

      </div>

    </div>
  );
}

export default SectionNavigation;