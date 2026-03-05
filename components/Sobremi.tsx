import { sobremiData, habilidadesData } from "../data/sobremiData";

const Sobremi = () => {
  return (
    <section id="aboutme" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title with radial gradient background */}
        <div className="relative mb-16 text-center">
          <div className="absolute -inset-y-12 inset-x-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)] -z-10" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {sobremiData.titulo}
          </h2>
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
              <img
                className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border border-white/10"
                src="/img/aboutme.png"
                alt="Profile"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                {sobremiData.descripcion1}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {sobremiData.descripcion2}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {sobremiData.descripcion3}
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {habilidadesData.map(habilidad => (
            <div
              key={habilidad.id}
              className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-8 flex flex-col items-center text-center transition duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={`/img/brands/${habilidad.icon}`}
                  alt={habilidad.name}
                  className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {habilidad.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {habilidad.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
