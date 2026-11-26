
export const DoctorResume = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 ">
            <div className="max-w-6xl mx-auto ">
                <div className="bg-linear-to-br  from-emerald-300 via-white to-emerald-300 rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row items-stretch">
                        {/* Imagen */}
                        <div className="w-full md:w-2/5 shrink-0 overflow-hidden">
                            <img 
                                src="/src/assets/dra_tomografo.jpg" 
                                alt="dra.tomografo" 
                                className="w-full h-full object-cover rounded-2xl md:rounded-none"
                            />
                        </div>

                        {/* Contenido */}
                        <div className="w-full md:w-3/5 flex flex-col justify-center p-6 sm:p-8 md:p-10">
                            <p className=" text-emerald-800 font-semibold text-lg sm:text-3xl mb-2">Dra. Jessica Jocelyn </p>
                            <p className="text-emerald-800 font-semibold text-lg sm:text-3xl mb-2"> Amdor Cuenca</p>
                            <p className="text-emerald-700 leading-relaxed text-lg sm:text-2xl font-semibold">Corazón y esperanza: atención especializada</p>
                            <p className="text-emerald-700 leading-relaxed text-lg sm:text-2xl font-semibold"> en cardio-oncología.</p>
                            <p className="text-slate-900 leading-relaxed text-sm sm:text-base font-normal">
                                Médica especialista en Cardiología, con experiencia profesional en reconocidas 
                                instituciones hospitalarias públicas y privadas de la Ciudad de México. Cuenta con 
                                formación especializada en Cardio-oncología y diagnóstico cardiovascular por imagen, 
                                incluyendo ecocardiografía, tomografía y resonancia magnética cardíaca.
                            </p>
                            
                            <p className="text-slate-900 leading-relaxed text-sm sm:text-base font-normal mt-4 sm:mt-6">
                                Su práctica médica se distingue por un enfoque integral, basado en la evidencia 
                                científica, la actualización continua y el compromiso con una atención personalizada, 
                                humana y de calidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
