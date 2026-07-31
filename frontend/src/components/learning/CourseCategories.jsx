import {
  FaChartLine,
  FaPiggyBank,
  FaCoins,
  FaUniversity,
  FaArrowRight,
} from "react-icons/fa";

function CourseCategories() {

  const categories = [

    {
      icon: <FaChartLine />,
      title: "Stock Market",
      lessons: "12 Lessons",
      color: "text-green-400",
    },

    {
      icon: <FaPiggyBank />,
      title: "Personal Finance",
      lessons: "10 Lessons",
      color: "text-pink-400",
    },

    {
      icon: <FaCoins />,
      title: "Mutual Funds",
      lessons: "8 Lessons",
      color: "text-yellow-400",
    },

    {
      icon: <FaUniversity />,
      title: "Banking",
      lessons: "6 Lessons",
      color: "text-cyan-400",
    },

  ];

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">

        Course Categories

      </h2>

      <div className="space-y-4">

        {categories.map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between bg-slate-800 hover:bg-slate-700 transition rounded-2xl p-5 cursor-pointer"
          >

            <div className="flex items-center gap-4">

              <div className={`text-3xl ${item.color}`}>
                {item.icon}
              </div>

              <div>

                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {item.lessons}
                </p>

              </div>

            </div>

            <FaArrowRight className="text-slate-400" />

          </div>

        ))}

      </div>

    </div>

  );

}

export default CourseCategories;