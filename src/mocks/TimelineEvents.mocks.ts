
export interface TimelineEvent {
    id:string;
    heading:string;
    subHeading: string;
    direction: TimelineEventDirection;
}


export const timelineEvents: TimelineEvent[] = [
    {
        id: "1",
        heading: "Event 1",
        subHeading: "Subheading 1",
        direction: "left"
    },
    {
        id: "2",
        heading: "Event 2",
        subHeading: "Subheading 2",
        direction: "right"
    },
    {
        id: "3",
        heading: "Event 3",
        subHeading: "Subheading 3",
        direction: "left"
    }
];


export type TimelineEventDirection = 'left' | 'right';