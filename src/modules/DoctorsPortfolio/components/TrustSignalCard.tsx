import { LuAward } from "react-icons/lu"

export const TrustSignalCrad = () => {
    return (
        <>
        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/70 border border-slate-100 hover:-translate-y-1 hover:bg-emerald-50 transition-all duration-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <LuAward  className="w-6 h-6"/>
            </div>
            <div>
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">15+ Años</p>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">De experiencia clínica</p>
                <p className="text-xs text-slate-500 mt-1">Especialidad certificada</p>
            </div>
        </div>
        </>
    )
}
