import { headerData } from "../data/headerData";

const Landing = () => {
  return (
    <section id="inicio" className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden py-24">
      {/* Noise/Grain overlay - very subtle */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000000' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Subtle radial background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                  {headerData.nombre}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-blue-400">
                  {headerData.titulo}
                </p>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting data-driven solutions that transform business intelligence into actionable insights.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <a
                  href="https://drive.google.com/file/d/1kxOG3hf9G2WfI23v13hjpaFI6IasyGoZ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-medium transition duration-200 hover:scale-[1.02]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition duration-200"
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
          <div className="hidden lg:flex justify-end items-center relative h-full">
            {/* Soft backdrop glow to help it blend */}
            <div className="absolute w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            {/* The scaled, rotated, slightly blurred image */}
            <img
              src="/img/redes.png"
              alt="Social networks illustration"
              className="relative w-full max-w-lg object-contain opacity-80 blur-[0.2px] mix-blend-screen transition-all duration-700 [transform:perspective(1000px)_rotateX(20deg)_rotateY(-20deg)_rotateZ(5deg)_scale(1.1)] hover:[transform:perspective(1000px)_rotateX(10deg)_rotateY(-5deg)_rotateZ(0deg)_scale(1.15)] hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
