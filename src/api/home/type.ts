export interface Param {
    hostypeString: string;
    fullAddress: string;
}

export interface BookingRule {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
}

export interface Hospital {
    id: string;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: Param;
    hoscode: string;
    hosname: string;
    hostype: string; // 考虑使用 enum
    provinceCode: string;
    cityCode: string;
    districtCode: string;
    address: string;
    logoData: string;
    intro?: string; // 指定更具体的类型
    route: string;
    status: number;
    bookingRule: BookingRule;
}

export type Content = Hospital[];

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export interface Pageable {
    sort: Sort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Data {
    content: Content;
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: Sort;
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
}

export interface RootObject<T = any> {
    code: number;
    message: string;
    ok: boolean;
    data: T; // 使用泛型
}

export interface HospitalObject extends RootObject<Data> {
}

export interface HospitalData {
    id: number;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: {};
    parentId: number;
    name: string;
    value: string;
    dictCode?: any; // 考虑指定更具体的类型
    hasChildren: boolean;
}

export type DictData = HospitalData[];

export interface DictObject extends RootObject<DictData> {
}
