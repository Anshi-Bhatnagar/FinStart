import CourseCard from "./CourseCard";

function CourseGrid() {

  const courses = [

    {
      title: "Stock Market Basics",
      description:
        "Understand stocks, exchanges and investing fundamentals.",
      lessons: "12 Lessons",
      duration: "2 hrs",
      progress: 70,
      level: "Beginner",
      color: "bg-gradient-to-r from-purple-600 to-indigo-600",
    },

    {
      title: "Mutual Funds",
      description:
        "Learn SIPs, NAV, diversification and long-term investing.",
      lessons: "10 Lessons",
      duration: "1.5 hrs",
      progress: 40,
      level: "Beginner",
      color: "bg-gradient-to-r from-pink-500 to-orange-500",
    },

    {
      title: "Personal Finance",
      description:
        "Budgeting, saving, emergency fund and financial planning.",
      lessons: "14 Lessons",
      duration: "3 hrs",
      progress: 90,
      level: "Intermediate",
      color: "bg-gradient-to-r from-cyan-500 to-blue-600",
    },

    {
      title: "Trading Essentials",
      description:
        "Candlesticks, support & resistance, technical analysis.",
      lessons: "15 Lessons",
      duration: "4 hrs",
      progress: 20,
      level: "Advanced",
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
    },

  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {courses.map((course) => (

        <CourseCard
          key={course.title}
          {...course}
        />

      ))}

    </div>

  );

}

export default CourseGrid;