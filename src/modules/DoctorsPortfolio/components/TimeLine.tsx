import { Fragment } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { timelineEvents, type TimelineEvent } from '../../../mocks/TimelineEvents.mocks';

import { TimeLinePillar } from '../../../components/ui/TimeLinePillar';
import { TimeLineEventCard } from '../../../components/ui/TimeLineEventCard';
import { TimeLineCircle } from '../../../components/ui/TimeLineCircle';
import { AnchorButton } from '../../../components/ui/AnchorButton';

export const TimeLine = () => {
    return (
        <div className='w-full px-4 py-8 sm:px-6 lg:px-8'>
            <div className='mx-auto flex max-w-6xl flex-col gap-y-3'>
                <TimeLineCircle />

                {timelineEvents.map((event: TimelineEvent, index) => (
                    <Fragment key={event.id}>
                        <div className='grid grid-cols-[1rem_minmax(0,1fr)] items-stretch gap-x-4 md:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)] md:gap-x-6'>
                            <TimeLinePillar />
                            <div className={`col-start-2 row-start-1 min-w-0 ${event.direction === 'left' ? 'md:col-start-1' : 'md:col-start-3'}`}>
                                <TimeLineEventCard heading={event.heading} subHeading={event.subHeading} />
                            </div>
                        </div>
                        {index < timelineEvents.length - 1 && <TimeLineCircle />}
                    </Fragment>
                ))}
                <TimeLineCircle />
            </div>
            <div className='mx-auto flex max-w-6xl justify-end'>
                <AnchorButton buttonNanmeValue="Ver más ..." icon={<AiOutlineArrowRight />} />
            </div>

        </div>
    )
}

