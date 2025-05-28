import { Trophy, Award, Medal } from "lucide-react"

const achievements = [
    {
        position: "1st Place",
        hackathon: "FIT INDIA - 6th Edition-2024 IDEA GENERATION CONTEST",
        rank: 1,
    },
    {
        position: "2nd Place",
        hackathon: "Enduraverse'25",
        rank: 2,
    },
    {
        position: "3rd Place",
        hackathon: "WebCraft Hackathon",
        rank: 3,
    },
    {
        position: "Top 6",
        hackathon: "VoiceAI Hackathon",
        rank: 1,
    }
]

const getTrophyIcon = (rank: number) => {
    switch (rank) {
        case 1:
            return <Trophy className="w-full h-full text-yellow-500" />
        case 2:
            return <Award className="w-full h-full text-gray-400" />
        case 3:
            return <Medal className="w-full h-full text-amber-600" />
        default:
            return <Trophy className="w-full h-full text-yellow-500" />
    }
}

const getTrophyBg = (rank: number) => {
    switch (rank) {
        case 1:
            return "bg-yellow-500/10 border-yellow-500/20"
        case 2:
            return "bg-gray-400/10 border-gray-400/20"
        case 3:
            return "bg-amber-600/10 border-amber-600/20"
        default:
            return "bg-yellow-500/10 border-yellow-500/20"
    }
}

export default function Achievements() {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="w-full p-4 sm:p-6 lg:p-8 rounded-xl bg-[#101010] border-2 border-[#141414]">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-white">Achievements</h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {achievements.map((achievement, index) => (
                        <div
                            key={`${achievement.hackathon}-${index}`}
                            className="block p-3 sm:p-4 lg:p-5 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 group cursor-pointer"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                                <div className="flex items-start md:flex-row flex-col sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
                                    <div
                                        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-full flex items-center justify-center border ${getTrophyBg(achievement.rank)}`}
                                    >
                                        {achievement.position.includes("Top") ? (
                                            <div className="w-full h-full flex items-center justify-center text-yellow-500">
                                                {achievement.position.replace("Top ", "")}
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6">
                                                {getTrophyIcon(achievement.rank)}
                                            </div>
                                        )}
                                    </div>


                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-1">
                                            <h3 className="text-base sm:text-lg lg:text-xl font-medium text-white group-hover:text-zinc-100 transition-colors">
                                                {achievement.position}
                                            </h3>
                                        </div>
                                        <p className="text-sm sm:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                                            {achievement.hackathon}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}