import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import IcSVG from "@/assets/rulesic.svg";

export default function Rules() {
    return (
        <main className="flex flex-col items-center justify-between w-full min-h-screen">
            <Head>
                <title>APMC - Rules</title>
            </Head>
            <section className="h-[400px] w-full lg:mb-14 group">
                <div className="h-[400px] bg-gradient-to-r from-red-600 to-fuchsia-500 w-full absolute blur-xl transform-gpu group-hover:blur-3xl duration-1000 ease-in-out"></div>
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full bg-black opacity-90">
                    <div className="flex flex-row flex-wrap content-center justify-center">
                        <Image
                            src={IcSVG}
                            height={75}
                            width={75}
                            alt="Logo"
                            className="sm:mt-5 sm:mr-5 lg:mr-5 lg:mt-5 stroke-black"
                        />
                        <div className="bg-gradient-to-r from-red-600 to-fuchsia-500 bg-clip-text">
                            <h1 className="pt-6 my-auto text-6xl font-bold text-center text-transparent lg:text-7xl">
                                APMC Rules
                            </h1>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-red-600 to-fuchsia-500 bg-clip-text">
                        <h3 className="text-xl text-center text-transparent lg:text-2xl">
                            Official Rules for the APMC
                        </h3>
                    </div>
                    <div className="flex gap-10">
                        <a
                            href="https://forms.gle/ZbmUv6H9VpPaJU2E6"
                            target="_blank"
                        >
                            <button className="px-8 py-2 mt-8 text-2xl transition duration-500 ease-in-out border-2 border-green-400 lg:text-4xl rounded-xl hover:scale-125 hover:text-green-400">
                                Register
                            </button>
                        </a>
                        <Link href="/">
                            <button className="px-8 py-2 mt-8 text-2xl transition duration-500 ease-in-out border-2 border-fuchsia-400 lg:text-4xl rounded-xl hover:scale-125 hover:text-fuchsia-400">
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="h-[18 00px] w-[320px] lg:h-[1400px] lg:w-[900px] m-10 group transition duration-1000 ease-in-out hover:scale-105 mt-20">
                <div className="absolute h-[1800px] w-[320px] lg:h-[1400px] lg:w-[900px] bg-gradient-to-r from-cyan-400 to-purple-700 blur-xl transform-gpu group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                <div className="relative z-20 w-full h-full p-12 bg-black">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-700 bg-clip-text">
                        <h2 className="p-1 mb-6 text-4xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                            Competition Rules
                        </h2>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-700 bg-clip-text">
                        <span className="p-1 mb-6 text-xl font-bold text-center text-transparent lg:text-4xl group-drop-shadow-lg">
                            1.{" "}
                        </span>
                        <span className="text-xl lg:text-4xl">
                            Do not plagiarize or copy anyone else&apos;s work,
                            you are still free to use code snippets, public
                            libraries, and other resources, but please use
                            common sense.
                        </span>
                    </div>
                    <br />
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-700 bg-clip-text">
                        <span className="p-1 mb-6 text-xl font-bold text-center text-transparent lg:text-4xl group-drop-shadow-lg">
                            2.{" "}
                        </span>
                        <span className="text-xl lg:text-4xl">
                            Your project must be submitted by 6:00 PM EST on
                            December 4th, 2023. Submissions will be done through
                            a Google Form posted on the website, please record a
                            short (1-5 minute) video of your project!
                        </span>
                    </div>
                    <br />
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-700 bg-clip-text">
                        <span className="p-1 mb-6 text-xl font-bold text-center text-transparent lg:text-4xl group-drop-shadow-lg">
                            3.{" "}
                        </span>
                        <span className="text-xl lg:text-4xl">
                            Your project must contain a computer engineering
                            related component, whether that be a digital logic
                            circuit, a regular electrical circuit, or a
                            microcontroller circuit. Singular C programs do not
                            count.
                        </span>
                    </div>
                    <br />
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-700 bg-clip-text">
                        <span className="p-1 mb-6 text-xl font-bold text-center text-transparent lg:text-4xl group-drop-shadow-lg">
                            4.{" "}
                        </span>
                        <span className="text-xl lg:text-4xl">
                            Teams may be formed with 1-4 people, working solo is
                            fine, however all team members must be attending
                            Abbey Park High School for the 2023/2024 school
                            year.
                        </span>
                    </div>
                    <br />
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-700 bg-clip-text">
                        <span className="p-1 mb-6 text-xl font-bold text-center text-transparent lg:text-4xl group-drop-shadow-lg">
                            5.{" "}
                        </span>
                        <span className="text-xl lg:text-4xl">
                            You can use anything at your disposal to create your
                            project, we will have components and basic
                            electircal tools available for use at our club.
                            Items will be given out on a first come first serve
                            basis.
                        </span>
                    </div>
                    <br />
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-700 bg-clip-text">
                        <span className="p-1 mb-6 text-xl font-bold text-center text-transparent lg:text-4xl group-drop-shadow-lg">
                            6.{" "}
                        </span>
                        <span className="text-xl lg:text-4xl">
                            Judges will be the current executive team of the
                            Abbey Park Computer Engineering Club, we will have
                            the final say in all decisions. Judging criteria
                            will be posted soon.
                        </span>
                    </div>
                </div>
            </section>
            <section className="h-[300px] lg:h-[200px] w-full mt-24 mb-0 group">
                <div className="h-[300px] lg:h-[200px] bg-gradient-to-r from-cyan-500 to-emerald-600 w-full absolute blur-xl transform-gpu group-hover:blur-3xl duration-1000 ease-in-out"></div>
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full bg-black lg:flex-row opacity-90">
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text">
                        <h3 className="text-xl text-center text-transparent lg:text-2xl">
                            Hosted by the Abbey Park Computer Engineering Club -{" "}
                            <a
                                className="font-bold"
                                href="https://github.com/Leg3ndary/APMC"
                                target="_blank"
                            >
                                Github
                            </a>{" "}
                            - Copyright © APMC 2023
                        </h3>
                    </div>
                </div>
            </section>
        </main>
    );
}
