import { Fragment } from 'react';
import { timelineEvents, type TimelineEvent } from '../../../mocks/TimelineEvents.mocks';

export const TimeLine = () => {
    return (
        <div className='w-full px-4 py-8 sm:px-6 lg:px-8'>
            <div className='mx-auto flex max-w-6xl flex-col gap-y-3'>
                <Circle />

                {timelineEvents.map((event: TimelineEvent, index) => (
                    <Fragment key={event.id}>
                        <div className='grid grid-cols-[1rem_minmax(0,1fr)] items-stretch gap-x-4 md:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)] md:gap-x-6'>
                            <Pillar />
                            <div className={`col-start-2 row-start-1 min-w-0 ${event.direction === 'left' ? 'md:col-start-1' : 'md:col-start-3'}`}>
                                <EventCard heading={event.heading} subHeading={event.subHeading} />
                            </div>
                        </div>
                        {index < timelineEvents.length - 1 && <Circle />}
                    </Fragment>
                ))}

                <Circle />
            </div>
        </div>
    )
}

const Circle = () => {
    return (
        <div className='grid grid-cols-[1rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)] md:gap-x-6'>
            <div className='col-start-1 h-2 w-2 rounded-full bg-linear-to-br from-emerald-400 to-emerald-700 md:col-start-2' />
        </div>
    )
}

const Pillar = () => {
    return (
        <div className='col-start-1 row-start-1 h-full w-2 rounded-full bg-linear-to-b from-emerald-400 to-emerald-700 md:col-start-2' />
    )
}

const EventCard = ({ heading, subHeading }: { heading: string, subHeading: string }) => {
    return (
        <div className='flex h-full flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-50'>
            <div className='border-b border-emerald-100 pb-2 text-lg font-bold text-emerald-800'>{heading}</div>
            <div className='text-sm leading-relaxed text-slate-700'>{subHeading}</div>
        </div>
    )
}
