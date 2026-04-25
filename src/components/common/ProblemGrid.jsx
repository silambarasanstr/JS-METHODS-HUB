// 🔹 Reusable Card Component
const ProblemGrid = ({ data, color }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((section, index) => (
        <div
          key={index}
          className="p-5 transition-all duration-300 border border-gray-200 shadow-sm bg-white/80 backdrop-blur rounded-2xl hover:shadow-xl hover:-translate-y-1"
        >
          <h2 className={`mb-3 text-lg font-semibold ${color}`}>
            {section.title}
          </h2>

          <ul className="space-y-2 text-sm text-gray-700">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 px-2 py-1 transition-all duration-200 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black"
              >
                <span className="text-blue-500">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


export default ProblemGrid;