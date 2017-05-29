export interface Student{
    _id?: string;
    location: {
        geo:{
            lng: number;
            lat: number;
        };
        address: string;
    };
    dob: number;
    type: UserTypes;
    name: string;
    surname: string;
    aboutMe: string;
    contact: {
        contactNo: string;
        email: string;
    };
    IDnumber: string;
    gender: Gender;
    passwordHash: string;
    active: boolean;
    freeApplications: number;
    emailDisable?: boolean;
    institution: {
        matricType: MatricType;
        name: string;
        type: InstitutionType;
    };
    qualification: {
        name: string;
        GPA?: number;
    };
    driversLicence: boolean;
    numRatings?: number;
    rating?: number;
    work?: Work[];
    resetPasswordExpires?: number;
    resetPasswordToken?: string;
    packages: any[];
    profilePicture?: string;
    results?: MatricResults[];
}

enum UserTypes{
    "Student",
    "Employer"
}

enum Gender {
    'M',
    'F'
}

enum MatricType {
    "Cambridge",
    "NSC",
    "IEB"
}

enum InstitutionType {
    "Secondary",
    "Tertiary"
}

enum ResultSymbol {
    "A",
    "B",
    "C",
    "D",
    "F"
}

enum PackageType {
    "Talent_Basic",
    "Talent_Classic",
    "Talent_Ultimate"
}

interface Work {
    contact: {
        name: string;
        number?: string;
        email?: string;
        company?: string;
    },
    employerType: string;
    jobID?: string;
    category: string;
    roleDescription?: string;
    duration: string;
}

interface MatricResults {
    subject: string;
    symbol: ResultSymbol;
    file?: string;
}

interface Packages {
    active: boolean;
    paymentToken: string;
    packageType: PackageType;
}

interface Certifications {
    name: string;
    certificationDescription?: string;
    file?: string;
}