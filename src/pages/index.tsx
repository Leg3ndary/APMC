import Head from "next/head";
import Image from "next/image";
import IcSVG from "@/assets/ic.svg";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between w-full min-h-screen">
            <Head>
                <title>APMC</title>
            </Head>
            <section className="h-[400px] w-full lg:mb-14 group">
                <div className="h-[400px] bg-gradient-to-r from-cyan-400 to-purple-500 w-full absolute blur-xl group-hover:blur-3xl duration-1000 ease-in-out"></div>
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full bg-black opacity-90">
                    <div className="flex flex-row flex-wrap content-center justify-center">
                        <Image
                            src={IcSVG}
                            height={75}
                            width={75}
                            alt="Logo"
                            className="sm:mt-5 sm:mr-5 lg:mr-5 lg:mt-5"
                        />

                        <div className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
                            <h1 className="pt-6 my-auto text-4xl font-bold text-center text-transparent lg:text-7xl">
                                APHS Makers Competition
                            </h1>
                        </div>
                    </div>
                    <h3 className="text-xl text-center text-white lg:text-2xl">
                        November 13th - December 4th
                    </h3>
                    <a href="https://google.com" target="_blank">
                        <button className="px-8 py-2 mt-8 text-2xl transition duration-1000 ease-in-out border-2 border-green-400 lg:text-4xl rounded-xl delay-50 hover:scale-125 hover:text-green-400">
                            Register
                        </button>
                    </a>
                </div>
            </section>
            <section className="h-[360px] w-[350px] lg:h-[300px] lg:w-[900px] m-20 group hover:-translate-y-2 transition duration-1000 ease-in-out hover:scale-110">
                <div className="absolute h-[360px] w-[350px] lg:h-[300px] lg:w-[900px] bg-gradient-to-r from-red-600 to-purple-500 blur-xl group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                <div className="relative z-20 w-full h-full p-12 bg-black">
                    <div className="bg-gradient-to-r from-red-600 to-purple-500 bg-clip-text">
                        <h2 className="p-1 mb-6 text-2xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                            Bring your ideas to life!
                        </h2>
                    </div>
                    <p className="text-xl lg:text-3xl">
                        Compete in Abbey Parks first ever Computer Engineering
                        Competition, submit a creation using an Arduino or
                        something to win.
                    </p>
                </div>
            </section>
            {/* <section className="h-[300px] lg:h-[200px] w-full mt-auto mb-0 group">
                <div className="h-[300px] lg:h-[200px] bg-gradient-to-r from-cyan-400 to-purple-500 w-full absolute blur-xl group-hover:blur-3xl duration-1000 ease-in-out"></div>
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full bg-black opacity-90">
                    <h3 className="text-xl text-center text-white lg:text-2xl">
                        November 13th - December 4th
                    </h3>
                </div>
            </section> */}
        </main>
    );
}
