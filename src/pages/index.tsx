import Head from "next/head";
import Image from "next/image";
import IcSVG from "@/assets/ic.svg";
import ESP32 from "@/assets/esp32.png";
import Arduino from "@/assets/arduino.png";
import Makeblock from "@/assets/makeblock.png";

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
            <section className="h-[360px] w-[350px] lg:h-[300px] lg:w-[900px] m-20 group hover:-translate-y-2 transition duration-1000 ease-in-out hover:scale-110">
                <div className="absolute h-[360px] w-[350px] lg:h-[300px] lg:w-[900px] bg-gradient-to-r from-cyan-400 to-red-500 blur-xl group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                <div className="relative z-20 w-full h-full p-12 bg-black">
                    <div className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text">
                        <h2 className="p-1 mb-6 text-2xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                            Completely Asynchronous
                        </h2>
                    </div>
                    <p className="text-xl lg:text-3xl">
                        Work on your project at your own pace
                    </p>
                </div>
            </section>
            <section
                id="prizes"
                className="w-[400px] lg:w-full flex flex-col justify-center content-center flex-wrap"
            >
                <div className="h-[480px] w-[350px] lg:h-[580px] lg:w-[900px] m-20 group hover:-translate-y-2 transition duration-1000 ease-in-out hover:scale-110 mx-auto">
                    <div className="absolute h-[480px] w-[350px] lg:h-[580px] lg:w-[900px] bg-gradient-to-r from-yellow-300 to-cyan-500 blur-xl group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                    <div className="relative z-20 w-full h-full p-12 bg-black">
                        <div className="bg-gradient-to-r from-yellow-300 to-cyan-500 bg-clip-text">
                            <h2 className="p-1 mb-6 text-2xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                                First Prize
                            </h2>
                        </div>
                        <Image
                            src={ESP32}
                            alt="ESP 32"
                            className="mx-auto w-[200px] lg:w-[400px] p-8"
                        />
                        <p className="text-xl lg:text-3xl">
                            Win an ESP32 with over
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="h-[480px] w-[350px] lg:h-[580px] lg:w-[410px] m-10 group hover:-translate-y-2 transition duration-1000 ease-in-out hover:scale-110">
                        <div className="absolute h-[480px] w-[350px] lg:h-[580px] lg:w-[400px] bg-gradient-to-r from-fuchsia-500 to-emerald-500 blur-xl group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                        <div className="relative z-20 w-full h-full p-12 bg-black">
                            <div className="bg-gradient-to-r from-fuchsia-500 to-emerald-500 bg-clip-text">
                                <h2 className="p-1 mb-6 text-2xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                                    Runner Up
                                </h2>
                            </div>
                            <div className="w-full">
                                <Image
                                    src={Arduino}
                                    alt="ESP 32"
                                    className="mx-auto w-[200px] lg:w-[300px] p-8"
                                />
                            </div>
                            <p className="text-xl lg:text-3xl">
                                Runner Up Prize
                            </p>
                        </div>
                    </div>
                    <div className="h-[480px] w-[350px] lg:h-[580px] lg:w-[410px] m-10 group hover:-translate-y-2 transition duration-1000 ease-in-out hover:scale-110">
                        <div className="absolute h-[480px] w-[350px] lg:h-[580px] lg:w-[400px] bg-gradient-to-r from-indigo-600 to-amber-500 blur-xl group-hover:blur-3xl transition ease-in-out duration-1000"></div>
                        <div className="relative z-20 w-full h-full p-12 bg-black">
                            <div className="bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text">
                                <h2 className="p-1 mb-6 text-2xl font-bold text-center text-transparent lg:text-6xl group-drop-shadow-lg">
                                    Creativity Prize
                                </h2>
                            </div>
                            <div className="w-full">
                                <Image
                                    src={Makeblock}
                                    alt="Makeblock"
                                    className="mx-auto w-[200px] lg:w-[500px]"
                                />
                            </div>
                            <p className="text-xl lg:text-3xl">
                                Creativity Prize
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-[300px] lg:h-[200px] w-full mt-14 mb-0 group">
                <div className="h-[300px] lg:h-[200px] bg-gradient-to-r from-yellow-400 to-red-500 w-full absolute blur-xl group-hover:blur-3xl duration-1000 ease-in-out"></div>
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full bg-black opacity-90">
                    <h3 className="text-xl text-center text-white lg:text-2xl">
                        November 13th - December 4th
                    </h3>
                </div>
            </section>
        </main>
    );
}
