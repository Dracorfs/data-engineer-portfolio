import { headerData } from "../data/headerData";

const Landing = () => {
  return (
    <section id="inicio" className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
      {/* Noise/Grain overlay - very subtle */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000000' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text content */}
            <div className="text-center md:text-left">
              <div className="space-y-3 md:space-y-4">
                <div>
                  {/* Gradient background for H1 */}
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-lg blur-xl -z-10" />
                    <h1 className="text-primary font-title font-black relative whitespace-nowrap">
                      {headerData.nombre}
                    </h1>
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-accent mt-2 md:mt-3">
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
            
            {/* Decorative image */}
            <div className="hidden md:flex justify-end items-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl" />
                <img
                  src="/img/redes.png"
                  alt="Social networks illustration"
                  className="relative w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
