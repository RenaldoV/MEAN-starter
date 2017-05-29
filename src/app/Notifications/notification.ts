export interface Notification {
    _id?: string;
    type: string;
    jobID: string;
    userID: string;
    status: string;
    title: string;
    seen: boolean;
    dateTime: Date;
}