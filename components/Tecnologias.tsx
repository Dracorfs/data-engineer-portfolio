import { tecnologiasData } from "../data/tecnologiasData";

const Tecnologias = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Optional Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000000' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="relative mb-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] -z-10" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Technical Skills
          </h2>
        </div>

        {/* Scrolling tech stack */}
        <div className="relative max-w-5xl mx-auto">
          {/* Fade gradient overlays aligned to dark theme bg-slate-950 */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div className="flex gap-6 py-8 animate-infinite-scroll">
              {[...tecnologiasData, ...tecnologiasData].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 flex-shrink-0 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:bg-white/10"
                >
                  <img
                    className="w-8 h-8 object-contain"
                    src={`/img/tecnologias-andy/${tech.imagen}`}
                    alt={tech.nombre}
                  />
                  <span className="font-medium text-gray-200 whitespace-nowrap">
                    {tech.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills description */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-8 text-center transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-3">Data Engineering</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ETL pipelines, data warehousing, and data infrastructure
            </p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-8 text-center transition duration-300 hover:-translate-y-1 mt-0 lg:-mt-4 relative z-10">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Database &amp; SQL</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              SQL optimization, schema design, and query performance
            </p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-8 text-center transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-3">Analytics &amp; BI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Data visualization, dashboards, and business insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
