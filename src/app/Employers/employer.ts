export interface Employer{
    _id?: string;
    company?: {
        position: string;
        otherCategory?: string;
        category: string;
        name: string;
        location: {
            geo: {
                lng: number;
                lat: number;
            };
            address: string;
        }
    };
    type: "string";
    contact: {
        constactNo: string;
        email: string;
        surname: string;
        name: string;
    };
    IDnumber: string;
    passwordHash: string;
    employerType: string;
    profilePicture: string;
    suggested?: string;
    active: boolean;
    activateToken?: string;
    resetPasswordExpires?: number;
    resetPasswordToken?: string;
    emailDisable?: boolean;
}