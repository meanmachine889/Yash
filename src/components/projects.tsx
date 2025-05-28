"use client"

import { GithubIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

const projects = [
  {
    name: "Memora",
    description: "Web3 NFT membership platform for owning, trading, and transferring subscriptions",
    image: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1748156963/Screenshot_2025-05-25_123808_ytuiok.png",
    url: "#",
    github: "#",
  },
  {
    name: "Manipal Hackathon 2024",
    description: "Official website for Manipal Hackathon'24 with 2200+ users and 400+ teams from 100 colleges all over India",
    image: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1748171732/Screenshot_2024-10-03_021536_sijlq0.png",
    url: "#",
    github: "#",
  },
  {
    name: "Clarity",
    description: "AI-powered platform for PDF interaction with document insights and chat functionality",
    image: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1748171528/Screenshot_2025-05-25_164147_pgb2cs.png",
    url: "#",
    github: "#",
  },
  {
    name: "Campaign Funding DAPP",
    description: "Decentralized platform for campaign funding with secure and transparent fund management",
    image: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1748172909/Screenshot_2025-05-25_170440_dy8ec7.png",
    url: "#",
    github: "#",
  },
  {
    name: "LeetCoach",
    description: "AI-powered coding platform like LeetCode",
    image: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1748172630/cas_pbanvx.png",
    url: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <div className="w-full md:p-8 p-4 rounded-xl bg-[#101010] border-2 border-[#141414]">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-white">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 md:gap-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-zinc-900 border rounded-lg hover:bg-zinc-800 transition p-4 px-2"
          >
            <div className="flex items-center gap-4 mb-3 px-2">
              <div className="flex-1">
                <h3 className="md:text-xl mb-3">{project.name}</h3>
                <p className="md:text-md text-sm text-zinc-400 mb-3">{project.description}</p>
                <div className="flex md:gap-2 gap-1">
                  <Button className="bg-[#101010] border-2 text-gray-300 font-light text-sm border-[#202020]"><GithubIcon /></Button>
                  <Button className="bg-[#101010] border-2 text-gray-300 font-light text-sm border-[#202020]">Visit</Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={620}
                height={400}
                className="w-full md:h-64 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}