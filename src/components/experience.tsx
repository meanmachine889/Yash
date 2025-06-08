import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    name: "Integral Development Corp.",
    description: "Fullstack Blockchain developer",
    icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1748154335/integral_a0tnk8.jpg",
    url: "https://integral.com",
    duration: "May 2025 – Present",
  },
  {
    name: "Eventory",
    description: "Fullstack Web developer",
    icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1747994130/eventory_zqbrwo.png",
    url: "https://eventory.in",
    duration: "May 2024 – May 2025",
  },
  {
    name: "Horse's Mouth",
    description: "Fullstack Web developer",
    icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1747994130/horse_s-3_z70365.png",
    url: "https://horsesmouth.in",
    duration: "May 2024 – Aug 2024",
  },
]

export default function Experience() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="w-full p-4 sm:p-6 lg:p-8 rounded-xl bg-[#101010] border-2 border-[#141414]">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-2xl font-normal text-white">Experience</h2>
        </div>

        <div className="space-y-2 sm:space-y-2">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.name}
              className="block p-4 py-5 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                {/* Main content */}
                <div className="flex items-start md:flex-row flex-col sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-full flex items-center justify-center ${
                      index === 0 ? "bg-white" : index === 2 ? "bg-indigo-900" : "bg-white"
                    }`}
                  >
                    <Image
                      src={project.icon || "/placeholder.svg"}
                      alt={`${project.name} logo`}
                      width={index === 1 ? 20 : 28}
                      height={index === 1 ? 20 : 28}
                      className={`${
                        index === 1 ? "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" : "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                      } object-contain`}
                    />
                  </div>

                  {/* Text content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg lg:text-lg text-white mb-1 group-hover:text-zinc-100 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                      {project.description}
                    </p>

                    {/* Duration on mobile - shown below description */}
                    <div className="sm:hidden mt-2">
                      <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded-md">{project.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Duration on desktop - shown on the right */}
                <div className="hidden sm:flex items-center flex-shrink-0">
                  <span className="text-sm lg:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors whitespace-nowrap">
                    {project.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
