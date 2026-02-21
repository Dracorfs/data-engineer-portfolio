import { useState } from "react";
import { proyectosData } from "../data/proyectosData";
import ProyCard from "./ProyCard";

export default function Proyectos() {
    const [bigProyImgs, setBigProyImgs] = useState({});

    const updateBigProyImg = (proyectoId, imgURL) => {
        setBigProyImgs((prevBigProyImgs) => ({
            ...prevBigProyImgs,
            [proyectoId]: imgURL,
        }));
    };

    return (
        <section id="projects" className="py-20">
            <div className="section-container">
                {/* Section title */}
                <h2 className="section-title text-4xl md:text-5xl">
                    Featured Projects
                </h2>

                {/* Projects grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {proyectosData.map(proyecto => {
                        const bigProyImg = bigProyImgs[proyecto.id] || proyecto.imagenes[0];
                        
                        return (
                            <div key={proyecto.id} className="card overflow-hidden flex flex-col h-full">
                                {/* Project image */}
                                <div className="relative overflow-hidden bg-gray-100 h-48">
                                    <img
                                        src={`/img/${bigProyImg}`}
                                        alt={proyecto.nombreProyecto}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Project content */}
                                <div className="flex flex-col justify-between flex-grow p-6">
                                    {/* Title and description */}
                                    <div className="space-y-4">
                                        <h3 className="text-primary font-title font-bold text-xl">
                                            {proyecto.nombreProyecto}
                                        </h3>

                                        <p className="text-text-secondary text-sm">
                                            {proyecto.descripcionProyecto}
                                        </p>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {proyecto.tecnologias.map((tech, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-text-primary"
                                                >
                                                    <img
                                                        className="w-4 h-4"
                                                        src={`/img/${tech.image}`}
                                                        alt={tech.name}
                                                    />
                                                    <span>{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project links */}
                                    <div className="flex gap-3 pt-6">
                                        <a
                                            target="_blank"
                                            href={proyecto.link}
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300"
                                        >
                                            <span>{proyecto.webpage_name}</span>
                                            <img
                                                className="w-4 h-4"
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
}