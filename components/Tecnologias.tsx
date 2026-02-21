import { tecnologiasData } from "../data/tecnologiasData";

const Tecnologias = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="section-container">
        {/* Section title */}
        <h2 className="section-title text-4xl md:text-5xl">
          Technical Skills
        </h2>

        {/* Scrolling tech stack */}
        <div className="relative">
          {/* Fade gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-primary/5 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-primary/5 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div className="flex gap-12 py-8 animate-infinite-scroll">
              {[...tecnologiasData, ...tecnologiasData].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 flex-shrink-0 px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    className="w-12 h-12 object-contain"
                    src={`/img/tecnologias-andy/${tech.imagen}`}
                    alt={tech.nombre}
                  />
                  <span className="font-semibold text-text-primary whitespace-nowrap">
                    {tech.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills description */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <h3 className="text-primary font-title font-bold mb-2">Data Engineering</h3>
            <p className="text-sm text-text-secondary">
              ETL pipelines, data warehousing, and data infrastructure
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="text-primary font-title font-bold mb-2">Database &amp; SQL</h3>
            <p className="text-sm text-text-secondary">
              SQL optimization, schema design, and query performance
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="text-primary font-title font-bold mb-2">Analytics &amp; BI</h3>
            <p className="text-sm text-text-secondary">
              Data visualization, dashboards, and business insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
