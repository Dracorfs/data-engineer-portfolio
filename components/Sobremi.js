import { sobremiData, habilidadesData } from "../data/sobremiData"

export default function Sobremi() {
    return (
        <section id="aboutme" className="py-20 bg-bg-light">
            <div className="section-container">
                {/* Section title */}
                <h2 className="section-title text-4xl md:text-5xl">
                    {sobremiData.titulo}
                </h2>

                {/* About content */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            className="w-64 h-64 md:w-80 md:h-80 rounded-xl shadow-2xl object-cover"
                            src="/img/aboutme.png"
                            alt="Profile"
                            style={{
                                boxShadow: '0 25px 50px -12px rgba(30, 64, 175, 0.15), 0 15px 30px -10px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                    </div>

                    {/* Text content */}
                    <div className="space-y-4">
                        <p className="text-text-primary text-base md:text-lg">
                            {sobremiData.descripcion1}
                        </p>
                        <p className="text-text-primary text-base md:text-lg">
                            {sobremiData.descripcion2}
                        </p>
                        <p className="text-text-primary text-base md:text-lg">
                            {sobremiData.descripcion3}
                        </p>3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/30
                        
                        <div className="pt-4">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                Open to work
                            </span>
                        </div>
                    </div>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {habilidadesData.map(habilidad => (
                        <div
                            key={habilidad.id}
                            className="card p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex justify-center">
                                <img
                                    src={`/img/brands/${habilidad.icon}`}
                                    alt={habilidad.name}
                                    className="w-20 h-20 object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                                />
                            </div>
                            <h3 className="text-primary font-title font-bold text-xl uppercase">
                                {habilidad.name}
                            </h3>
                            <p className="text-text-secondary text-sm">
                                {habilidad.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}