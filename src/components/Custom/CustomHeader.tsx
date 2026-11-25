import { useState } from "react"
import { CiMenuBurger, CiSearch } from "react-icons/ci"

export const CustomHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
            <header className=" flex justify-between fixed backdrop-blur-md bg-white/90 shadow-sm top-0 left-0 z-50 w-full items-center border-2 border-emerald-500 border-l-emerald-500 border-x-0 border-t- py-2 px-3 md:px-24   drop-shadow-zinc-500">

                <a className="flex items-center gap-3 hover:scale-105 transition-all">
                    <img src="/src/assets/heart_logo.png" alt="Retrato de la Dra. Jessica Jocelyn" className="h-12 w-12 object-contain" />
                    <p className="text-emerald-800">Dra. Jessica Jocelyn</p>
                </a>

                <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <li className="p-3 text-emerald-800 hover:bg-emerald-400 hover:text-white rounded-md transition-all">Home</li>
                    <li className="p-3 text-emerald-800 hover:bg-emerald-400 hover:text-white rounded-md transition-all">Sobre Mí</li>
                    <li className="p-3 text-emerald-800 hover:bg-emerald-400 hover:text-white rounded-md transition-all">Servicios</li>
                    <li className="p-3 text-emerald-800 hover:bg-emerald-400 hover:text-white rounded-md transition-all">Contacto</li>
                </ul>

                <div className="relative hidden md:flex items-center justify-center gap-3">             
                    <input 
                        type="text" 
                        placeholder="Buscar..." 
                        className="py-2 pl-10 rounded-xl border-2 border-emerald-800 focus:bg-slate-100 focus:outline-emerald-500" />
                    <CiSearch className="text-xl cursor-pointer absolute left-3" /> 
                </div>

                <CiMenuBurger 
                    className="xl:hidden block text-5xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}/>

                <div className={`
                    absolute xl:hidden top-16 left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center gap-7 font-semibold text-lg transform transition-transform 
                    ${isMenuOpen ? "opacity-100" : "opacity-0"} `}
                    style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}
                >
                    <li className=" list-none w-full text-center p-4 hover:bg-emerald-400 hover:text-white transition-all cursor-pointer">Home</li>
                    <li className=" list-none w-full text-center p-4 hover:bg-emerald-400 hover:text-white transition-all cursor-pointer">Sobre Mí</li>
                    <li className=" list-none w-full text-center p-4 hover:bg-emerald-400 hover:text-white transition-all cursor-pointer">Servicios</li>
                    <li className=" list-none w-full text-center p-4 hover:bg-emerald-400 hover:text-white transition-all cursor-pointer">Contacto</li>
                </div>
            </header>
        </>
    )
}
