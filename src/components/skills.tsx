"use client"
import Image from "next/image"

const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Solidity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  },
  {
    name: "Rust",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  }, {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
  }
]


export default function Skills() {
  return (
    <div className="w-full md:p-8 p-4 rounded-xl bg-[#101010] border-2 border-[#141414]">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-2xl font-normal text-white">Skills</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="p-2 md:p-3 flex gap-2 md:gap-3 items-center bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 relative bg-zinc-500/20 rounded-lg p-1 md:p-2 flex items-center justify-center border border-zinc-300 dark:border-zinc-700">
              <div className="relative w-4 h-4 md:w-6 md:h-6">
                <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
              </div>
            </div>
            <div>
              <div className="text-gray-300 text-xs md:text-base">{tech.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
