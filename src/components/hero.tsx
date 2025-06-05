import { FileText, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="w-full mx-auto">
            <div className="w-full p-4 sm:p-6 lg:p-8 rounded-xl bg-[#101010] border-2 border-[#141414]">
                <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
                    <div className="flex-1 space-y-4 sm:space-y-6">
                        {/* <div className="items-center md:flex hidden justify-between lg:justify-start">
                            <PositionPill />
                        </div> */}
                        <div className="space-y-2 sm:space-y-3">
                            <h1 className="text-2xl xl:text-4xl font-normal text-white leading-tight">
                                I&apos;m Yash Bharadwaj
                            </h1>
                            <p className="text-zinc-400 text-base sm:text-lg lg:text-xl leading-relaxed">
                                Fullstack Blockchain Developer.
                                <br />
                                Currently interning at{" "}
                                <Link
                                    className="text-orange-500 hover:text-orange-400 transition-colors"
                                    href="https://integral.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Integral
                                </Link>
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <Link href="https://github.com/meanmachine889" target="_blank" aria-label="GitHub" className="hover:opacity-80 transition-opacity p-1">
                                    <Image
                                        src="https://res.cloudinary.com/dnfv0h10u/image/upload/v1747992108/github_io63nb.svg"
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                    />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/yash-bharadwaj-47871b251/"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                    className="hover:opacity-80 transition-opacity p-1"
                                >
                                    <Image
                                        src="https://res.cloudinary.com/dnfv0h10u/image/upload/v1747992108/linkedin_o364yk.svg"
                                        alt="LinkedIn"
                                        width={24}
                                        height={24}
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                    />
                                </Link>
                                <Link
                                    href="https://x.com/YashBha95474776"
                                    aria-label="Twitter"
                                    target="_blank"
                                    className="hover:opacity-80 transition-opacity p-1"
                                >
                                    <Image
                                        src="https://res.cloudinary.com/dnfv0h10u/image/upload/v1747992125/logo-white_vd4hij.png"
                                        alt="Twitter"
                                        width={24}
                                        height={24}
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                    />
                                </Link>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Link
                                    href="https://drive.google.com/file/d/1eFy1bQYkb5XCBrm_J_QoHmwNYsOcf01u/view?usp=drivesdk"
                                    aria-label="Resume"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800 rounded-md text-gray-300 hover:bg-zinc-700 transition-colors text-sm sm:text-base font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FileText className="w-4 h-4" />
                                    <span>Resume</span>
                                </Link>
                                <Link href="mailto:bharadwajj131@gmail.com" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800 rounded-md text-gray-300 hover:bg-zinc-700 transition-colors text-sm sm:text-base font-medium">
                                    <Mail className="w-4 h-4" />
                                    <span>Email Me</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end space-y-4 lg:flex-shrink-0">
                        <div className="hidden lg:block">
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400 whitespace-nowrap">
                                AVAILABLE FOR WORK
                            </span>
                        </div>
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full border-4 border-zinc-700 overflow-hidden bg-zinc-800 flex-shrink-0">
                            <Image
                                src="https://res.cloudinary.com/dnfv0h10u/image/upload/v1747990271/ChatGPT_Image_Apr_29_2025_06_22_05_PM_zxijg9.png"
                                alt="Profile avatar"
                                width={144}
                                height={144}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
