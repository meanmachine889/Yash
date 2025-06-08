"use client"
import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"

const techStack = [
    {
        name: "GitHub",
        icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1747992108/github_io63nb.svg",
        url: "https://github.com/meanmachine889"
    },
    {
        name: "LinkedIn",
        icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1747992108/linkedin_o364yk.svg",
        url: "https://www.linkedin.com/in/yash-bharadwaj-47871b251/",
    },
    {
        name: "Twitter",
        icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1747992125/logo-white_vd4hij.png",
        url: "https://x.com/YashBha95474776",
    },
]


export default function Touch() {
    return (
        <div className="w-full md:p-8 p-4 rounded-xl bg-[#101010] border-2 border-[#141414]">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-2xl font-normal text-white">Let&apos;s get in touch</h2>
            </div>
            <div className="md:flex-row flex-col flex items-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
                    {techStack.map((tech) => (
                        <Link
                            href={tech.url}
                            target="_blank"
                            key={tech.name}
                            className="p-2 md:p-3 flex gap-2 md:gap-5 items-center bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 group"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 relative bg-zinc-900 rounded-lg p-1 md:p-2 flex items-center justify-center border border-zinc-300 dark:border-zinc-700">
                                <div className="relative w-4 h-4 md:w-6 md:h-6">
                                    <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                                </div>
                            </div>
                            <p className="text-gray-300 group-hover:text-white">{tech.name}</p>
                        </Link>
                    ))}
                    <Link href="mailto:bharadwajj131@gmail.com" className="p-2 md:p-3 flex gap-2 md:gap-5 items-center bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 group">
                        <div className="w-8 h-8 md:w-10 md:h-10 relative bg-zinc-900 rounded-lg p-1 md:p-2 flex items-center justify-center border border-zinc-300 dark:border-zinc-700">
                            <div className="relative w-4 h-4 md:w-6 md:h-6">
                                <Mail className="w-4 h-4 md:w-6 md:h-6 text-gray-300 group-hover:text-white" />
                            </div>
                        </div>
                        <span className="text-sm md:text-base text-gray-300 group-hover:text-white">Email</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
