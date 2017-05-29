export interface job {
    _id?: string;
    employerID: string;
    status: JobStatus;
    provisionalLeft: number;
    positionsLeft: number;
    applicationsLeft: number;
    requirements?: MatricResults[];
    experience?: WorkExperience[];
    endDate?: number;
    startDate: number;
    category: string;
    otherCategory?: string;
    description: string;
    location: {
        address: string;
        geo: {
            lat: number;
            lng: number;
        };
    };
    payPer: PayPer;
    tips?: string;
    pay?: number;
    commission?: {
        type: string;
        percentage: number;
        per: string;
    };
    timePeriod: TimePeriod;
    gender: Gender;
    driversLicence: boolean;
    interviewRequired: boolean;
    spotsAvailable: number;
    threshold: number;
    postDate: Date;
    applicants?: string[];
}

enum JobStatus {
    "Active",
    "Started",
    "Completed"
}

enum PayPer {
    "hour",
    "tips",
    "hourAndTips",
    "commission"
}

enum TimePeriod {
    "Short Term",
    "Once Off",
    "Long Term"
}

enum Gender {
    'M',
    'F',
    'Any'
}

enum ResultSymbol {
    "A",
    "B",
    "C",
    "D",
    "F"
}

interface MatricResults {
    subject: string;
    symbol: ResultSymbol;
}

interface WorkExperience {
    category: string;
}