import { headerData } from "../data/headerData";
import Link from "next/link";

export default function Landing() {
    return (
        <section className="relative overflow-hidden">
            {/* Background with backdrop filter */}
            <div className="absolute inset-0 bg-top bg-cover z-0">
                <img src="/img/hero.jpg" alt="Hero Background" className="w-full h-full object-cover object-center opacity-40" />
                <div className="absolute inset-0 backdrop-blur-[2px] bg-[#ebebeb]/40"></div>
            </div>

            {/* Content container */}
            <div id="inicio" className="relative z-10 flex flex-col items-start justify-center h-screen pl-6">
                <div className="text-center lg:text-left mx-auto md:w-4/6 2xl:w-4/6 ">
                    <div>
                        <h1 className="text-4xl font-title font-black leading-none md:text-6xl lg:text-5xl 2xl:text-7xl text-[#004e98]">{headerData.nombre}</h1>
                        <p className="mb-4 mt-2 lg:mt-0 text-2xl font-semibold font-secundary leading-none md:text-3xl lg:text-4xl text-[#3a6ea5]"> {headerData.titulo}</p>
                    </div>
                    <div className="flex justify-center md:justify-start gap-5">
                        <Link href="https://drive.google.com/file/d/1kxOG3hf9G2WfI23v13hjpaFI6IasyGoZ/view">
                            <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 py-2.5 px-5 text-sm text-[#004e98] hover:text-white font-medium bg-[#ebebeb]/50 rounded-full border transition duration-300 hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(58,110,165,0.7)]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                Download CV
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
