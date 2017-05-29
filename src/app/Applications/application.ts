export interface Application {
    _id?: string;
    studentID: string;
    jobID: string;
    employerID: string;
    status: ApplicationStatus;
    date: number;
    offerDate?: number;
    offered?: OfferStatus;
    commentToStudent?: string;
    studentRating?: number;
    edited?: boolean;
    editTime?: number; //epoch Miliseconds
}

// Status of an application
enum ApplicationStatus {
    "Pending",                  // Student Applied to job
    "Provisionally Accepted",   // Employer Accepted application and awaits Student Confirmation
    "Declined",                 // Student Withdrew or Employer Declined
    "Confirmed",                // Student Accepted the offer
    "Completed"                 // Application was confirmed and the job end date has passed
}

// Status of the offer after employer accepted the application
enum OfferStatus {
    "Accepted", 
    "Declined"
}