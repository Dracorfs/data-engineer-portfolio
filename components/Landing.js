import { headerData } from "../data/headerData";

export default function Landing() {
    return (
        <section id="inicio" className="relative min-h-screen pt-20 pb-12 md:pb-20 flex items-center justify-center">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            
            {/* Content */}
            <div className="section-container relative z-10">
                <div className="max-w-3xl mx-auto text-center md:text-left">
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <h1 className="text-primary font-title font-black">
                                {headerData.nombre}
                            </h1>
                            <p className="text-xl md:text-2xl text-text-secondary font-semibold mt-3">
                                {headerData.titulo}
                            </p>
                        </div>
                        
                        <p className="text-text-secondary text-base md:text-lg max-w-2xl">
                            Crafting data-driven solutions that transform business intelligence into actionable insights.
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-6">
                            <a
                                href="https://drive.google.com/file/d/1kxOG3hf9G2WfI23v13hjpaFI6IasyGoZ/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download CV
                            </a>
                            
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                View My Work
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
