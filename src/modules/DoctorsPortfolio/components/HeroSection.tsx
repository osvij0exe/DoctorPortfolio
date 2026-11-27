import { IoShieldCheckmarkOutline } from "react-icons/io5"
import { AnchorButton } from "../../../components/ui/AnchorButton"

export const HeroSection = () => {
    return (
        <section className="min-h-dvh bg-linear-to-b from-emerald-300 via-white to-emerald-300 pt-10">
            <div className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-16 md:px-12 lg:px-20">
                <div className="space-y-6">
                    <img
                        src="/src/assets/jessica_green.png"
                        alt="Retrato de la Dra. Jessica Jocelyn"
                        className="object-contain  h-48 w-96 items-center"
                    />
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/75 border border-emerald-700/60 text-emerald-200 text-xs font-medium mb-4">
                        <IoShieldCheckmarkOutline  className="w-4 h-4"/>
                        <span>Cédula Profesional Verificada  • Consejo Mexicano de Cardiología</span>
                    </div>
                    <p className="text-balance text-2xl font-bold leading-tight tracking-tight text-emerald-950 sm:text-4xl lg:text-6xl">
                        Atención especializada en <span className="text-emerald-800">cardio-oncología</span>
                    </p>
                    <p className="max-w-lg border-l-4 border-emerald-500 pl-4 text-pretty text-base leading-8 text-slate-700 sm:text-lg">
                        Enfocada en la prevención, diagnóstico y tratamiento de las complicaciones cardiovasculares asociadas al cáncer.
                    </p>
                    <AnchorButton buttonNanmeValue="Agendar cita" />
                </div>

                <div className="flex flex-col items-center gap-5 md:items-end">
                    <img
                        src="/src/assets/dra_white.png"
                        alt="Retrato de la Dra. Jessica Jocelyn"
                        className="w-full max-w-xl rounded-3xl object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}
