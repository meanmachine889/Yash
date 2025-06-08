import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const extras = [
    {
        name: "MTTN",
        achievement: "Head of Web & App Development",
        description:
            "Led the web and app development for Manipal's largest student media body. Mentored the development crew, built the official MTTN website from the ground up, and oversaw major updates to the Android app. Also led high-impact collaborations, including a campaign with Starbucks, where I designed the website and guided the team through execution.",
        icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1748154335/integral_a0tnk8.jpg",
    },
    {
        name: "Techtatva '24",
        achievement: "Core Committee Development Member",
        description:
            "Part of the core dev team behind Techtatva '24, Manipal’s national-level tech fest. Built and managed the official website used by 2200+ students and 400+ teams across India. Handled registration flows, team management, and ensured a seamless event experience alongside an amazing tech crew.",
    },
    {
        name: "Enduraverse'25 Hackathon",
        achievement: "Achieved 2nd place among nationwide teams",
        description:
            "Secured 2nd place at Enduraverse'25, a national 72-hour hackathon by Endurance Technologies. Built a cross-platform fitness tracker using Flutter and ESP32 + MPU6050, featuring real-time data sync, offline mode with flash storage, and a user dashboard. Delivered a live pitch to industry judges in the final round.",
        icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1748154335/integral_a0tnk8.jpg",
    },
    {
        name: "WebCraft Hackathon 2024",
        achievement: "3rd Place among 350 participants",
        description:
            "Won 3rd place in WebCraft Hackathon hosted by Project DronAid at MIT Manipal. Advanced to the final 32 from 350 participants after a 24-hour web page cloning challenge. Built a full-featured event management platform allowing users to buy and host city events with tracked histories for both organizers and attendees.",
    },
    {
        name: "VoiceAI Hackathon",
        achievement: "Top 6 out of 345 teams worldwide",
        description:
            "Built YatriGPT, a smart travel voice assistant during a national hackathon by DaaS. Led frontend development and contributed to the backend with Flask and MongoDB. Selected among the top 6 teams after rounds of ideation, development, and pitching to DaaS CEO Quinton Newman.",
    },
]

export default function Achievements() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-10">
            <div className="w-full p-4 sm:p-6 lg:p-8 rounded-xl bg-[#101010] border-2 border-[#141414]">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-2xl font-normal text-white">Extras</h2>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-0" // Open first accordion by default
                    className="w-full space-y-2"
                >
                    {extras.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
                        >
                            <AccordionTrigger className="hover:no-underline py-3 text-left">
                                <div className="flex flex-col gap-1 text-left">
                                    <p className="text-base sm:text-lg lg:text-lg font-normal text-white">{item.achievement}</p>
                                    <p className="text-sm sm:text-base text-zinc-400 font-normal">{item.name}</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 pt-2">
                                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{item.description}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
