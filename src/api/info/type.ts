export interface BookingRule {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
}

export interface Param {
    hostypeString: string;
    fullAddress: string;
}

export interface Hospital {
    id: string;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: Param;
    hoscode: string;
    hosname: string;
    hostype: string;
    provinceCode: string;
    cityCode: string;
    districtCode: string;
    address: string;
    logoData: string;
    intro: string;
    route: string;
    status: number;
    bookingRule?: any;
}

export interface HospitalData {
    bookingRule: BookingRule;
    hospital: Hospital;
}

export interface RootObject<T = any>{
    code: number;
    message: string;
    data: T;
    ok: boolean;
}

export interface HospitalDetailObject extends RootObject<HospitalData> {
}

export interface DepartmentChildren {
    depcode: string;
    depname: string;
    children?: any;
}

export interface DepartmentData {
    depcode: string;
    depname: string;
    children: DepartmentChildren[];
}

export interface DepartmentObject extends RootObject<DepartmentData> {

}
