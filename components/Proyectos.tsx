import { proyectosData } from "../data/proyectosData";

const Proyectos = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <div className="relative mb-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] -z-10" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Featured Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosData.map(proyecto => {
            return (
              <div key={proyecto.id} className="group flex flex-col h-full rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden transition-colors duration-300 hover:bg-white/[0.08] hover:border-white/30">
                {/* Project image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={`/img/${proyecto.imagenes[0]}`}
                    alt={proyecto.nombreProyecto}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105 saturate-[.70]"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                </div>

                {/* Project content */}
                <div className="flex flex-col justify-between flex-grow p-8">
                  {/* Title and description */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {proyecto.nombreProyecto}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {proyecto.descripcionProyecto}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech, index) => (
                        <div
                          key={index}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                        >
                          <img
                            className="w-3.5 h-3.5"
                            src={`/img/${tech.image}`}
                            alt={tech.name}
                          />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-auto">
                    <a
                      target="_blank"
                      href={proyecto.link}
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 text-sm font-medium transition duration-200 hover:bg-gray-200"
                    >
                      <span>{proyecto.webpage_name}</span>
                      <img
                        className="w-4 h-4 opacity-75"
                        src={`/img/${proyecto.webpage_logo}`}
                        alt={proyecto.webpage_name}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
