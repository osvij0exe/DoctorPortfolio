

export const TimeLineEventCard = ({ heading, subHeading }: { heading: string, subHeading: string }) => {
    return (
        <div className='flex h-full flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-50'>
            <div className='border-b border-emerald-100 pb-2 text-lg font-bold text-emerald-800'>{heading}</div>
            <div className='text-sm leading-relaxed text-slate-700'>{subHeading}</div>
        </div>
    )
}
