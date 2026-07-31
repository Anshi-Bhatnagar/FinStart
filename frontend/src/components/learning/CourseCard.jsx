import {
  FaBookOpen,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

function CourseCard({
  title,
  description,
  lessons,
  duration,
  progress,
  level,
  color,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">

      {/* Thumbnail */}
      <div
        className={`h-44 ${color} flex items-center justify-center`}
      >
        <FaBookOpen className="text-6xl text-white opacity-90" />
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex justify-between items-center">

          <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold">
            {level}
          </span>

          <span className="text-yellow-400 text-sm">
            ⭐ 4.8
          </span>

        </div>

        <h2 className="text-white text-xl font-bold mt-5">
          {title}
        </h2>

        <p className="text-slate-400 mt-3 leading-7">
          {description}
        </p>

        <div className="flex gap-6 mt-6 text-slate-400 text-sm">

          <div className="flex items-center gap-2">
            <FaBookOpen />
            {lessons}
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            {duration}
          </div>

        </div>

        {/* Progress */}

        <div className="mt-7">

          <div className="flex justify-between mb-2 text-sm">

            <span className="text-slate-300">
              Progress
            </span>

            <span className="text-purple-400">
              {progress}%
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-700 overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

        <button className="mt-8 w-full bg-purple-600 hover:bg-purple-500 transition rounded-xl py-3 flex justify-center items-center gap-2 text-white font-semibold">

          Continue

          <FaArrowRight />

        </button>

      </div>

    </div>
  );
}

export default CourseCard;