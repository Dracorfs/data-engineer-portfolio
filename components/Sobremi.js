import { sobremiData, habilidadesData } from "../data/sobremiData"

export default function Sobremi() {

    return(
        <div>
            <div id="aboutme" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 px-3 md:px-0 pt-10">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-[#004e98] text-center mt-5 mb-10">{sobremiData.titulo}</h2>
                <div className="md:flex gap-8 items-center justify-between md:mx-0">
                    <img 
                        className="border-8 border-[#242424]"
                        src="/img/aboutme.jpg" 
                        alt="Imagen Andres Martinez"
                    />
                    <div className="md:w-3/5">
                        <p className="mb-4 text-[#242424] lg:text-base 2xl:text-lg [text-wrap:pretty]">{sobremiData.descripcion1}</p>
                        <p className="mb-4 text-[#242424] lg:text-base 2xl:text-lg [text-wrap:pretty]">{sobremiData.descripcion2}</p>
                        <p className="mb-4 text-[#242424] lg:text-base 2xl:text-lg [text-wrap:pretty]">{sobremiData.descripcion3}</p>
                        <span className='inline-flex h-full animate-background-shine items-center justify-center rounded-full border border-text border-opacity-30 bg-[linear-gradient(110deg,#07090D,45%,#4D4B4B,55%,#07090D)] bg-[length:250%_100%] px-5 py-1.5 text-sm font-medium text-text backdrop-blur-3xl'>
                            Open to work
                        </span>
                    </div>
                </div>
                <ul className=" grid gap-8 grid-cols-1 md:grid-cols-3 my-10">
                    {habilidadesData.map(habilidades => (
                        <li key={habilidades.id} className="relative h-full rounded-xl bg-[#242424] border border-[#3A6EA5] border-opacity-20 py-5 px-5 bg-opacity-10 [text-wrap:pretty] text-center flex flex-col items-center">
                            <div className='absolute top-0 flex w-full justify-center'>
                                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-[#EBEBEB] to-[rgba(17,17,17,0)] transition-all duration-1000' />
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <img src={`/img/brands/${habilidades.icon}`} alt={`imagen de ${habilidades.name}`} className="w-20 h-20 p-2 border border-grisclaro border-opacity-40 rounded-full" />
                                <h3 className="text-[#3A6EA5] uppercase font-semibold text-lg">{habilidades.name}</h3>
                                <p className="text-[#242424] font-text text-base">{habilidades.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}