import { useState } from "react";
import { proyectosData } from "../data/proyectosData";
import ProyCard from "./ProyCard";
import { IconGlobal, IconGithub } from "./Icons";

export default function Proyectos() {
    const [ bigProyImgs, setBigProyImgs ] = useState({})
    const updateBigProyImg = (proyectoId, imgURL) => {
        setBigProyImgs((prevBigProyImgs) => ({
            ...prevBigProyImgs,
            [proyectoId]: imgURL,
        }));
    };

    return(
        <div>
            <div id="projects" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-[#004E98] text-center mt-5 mb-10">Projects</h2>
                <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 md:mx-0 px-3 md:px-0">
                    {proyectosData.map(proyecto =>{
                        const bigProyImg = bigProyImgs[proyecto.id] || proyecto.imagenes[0];
                        return (
                            <div key={proyecto.id}
                                className=" overflow-hidden flex flex-col bg-[#242424] border border-[#3A6EA5] border-opacity-20 bg-opacity-20 rounded-lg">
                                <div className='flex flex-col lg:flex-row justify-center items-center px-3'>
                                    <div className="lg:order-2">
                                        <img
                                            src={`/img/${bigProyImg}`}
                                            alt={`imagen ${bigProyImg}`}
                                            className=''
                                        />
                                    </div>
                                </div>
                                <div className="h-full flex flex-col justify-between px-5">
                                    <div>
                                        <h5 className="flex flex-col my-3 text-xl text-center text-[#004E98] font-bold tracking-tight">{proyecto.nombreProyecto}</h5>
                                        <ul className="flex items-center justify-center gap-3 mb-2">
                                        {proyecto.tecnologias.map((tecnologia, index) => (
                                            <li key={index} className="flex items-center gap-1 text-[#EBEBEB] px-4 py-1.5 text-sm font-medium border border-text border-opacity-30 rounded-full bg-[#07090D] bg-opacity-60">
                                                <img className="w-5 h-5" src={`/img/${tecnologia.image}`} alt={`imagen de logo ${tecnologia.nombre}`}/>
                                                <p>{tecnologia.name}</p>
                                            </li>
                                        ))}
                                        </ul>
                                        <p className="mb-4 font-normal text-grisclaro2 [text-wrap:pretty]">{proyecto.descripcionProyecto}</p>
                                    </div>
                                    <div className="flex gap-3 items-center justify-center pb-5">
                                        <a target="_blank" href={proyecto.link} className="flex flex-1 gap-1 items-center justify-center py-2.5 px-5 text-sm text-white font-medium  bg-transparent rounded-full border transition duration-300 hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(58,110,165,0.7)]">
                                            {proyecto.webpage_name}
                                            <img className="w-5 h-5" src={`/img/${proyecto.webpage_logo}`} alt={`imagen de logo ${proyecto.webpage_name}`}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}