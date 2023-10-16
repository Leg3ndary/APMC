import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full">
            <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-r from-cyan-400 to-purple-500 w-full border-b-2 border-slate-500">
                <h1 className="text-7xl font-bold text-center py-6">
                    Abbey Park Arduino Competition
                </h1>
                <h3 className="text-3xl text-center text-slate-200">
                    November 13th - December 4th
                </h3>
            </section>
        </main>
    );
}
