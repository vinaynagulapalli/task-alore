export class Segments {
    public segmentName: string;
    public segmentIcon: string;
    public segmentDescription: string;
    public showValue: boolean;
    public subSegmentName: SubSegments[] = [];
}

export class SubSegments {
    public subSubSegmentsName: string;
    public subSubSegmentsIcon: string;
    public subSubSegmentsColor: string;
}
