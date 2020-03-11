export interface LoginReqDto {
    email: string;
    password: string;
    returnUrl: string;
    rememberLogin: boolean;
}
export interface UserOrganization {
    userId: number;
    userName: string;
    orgId: number;
    orgName: string;
    orgLogo: string;
    isPrimary: boolean;
}
export interface OrgType {
    name: string;
    description: string;
    code: string;
    id: number;
    isDeleted: boolean;
}
export interface SecurityQuestion {
    question: string;
    id: number;
    isDeleted: boolean;
}
export interface SignupInitDto {
    orgTypes: [];
    securityQuestions: [];
}
export interface SignupReqDto {
    firstName: string;
    lastName: string;
    email: string;
    securityQuestion: number;
    securityAnswer: string;
    orgType: string;
    einsnn: string;
    password: string;
    confirmPassword: string;
    returnUrl: string;
}
export interface SignupRespDto {
    returnUrl: string;
}
export interface ProblemDetails {
    type: string;
    title: string;
    status ? : number;
    detail: string;
    instance: string;
}
export interface PeopleDto {
    id: number;
    name: string;
    age: number;
    birthday: string;
    address: string;
}
export interface OrganizationDto {
    id: number;
    logo: string;
    isActive: boolean;
    activeTime: string;
    isTryOut: boolean;
    tryOutTime: string;
    orgTypeId: number;
    orgTypeCode: string;
    taxId: string;
    irsStatus: string;
    name: string;
    legalName: string;
    annualReceivingSupportedCount ? : number;
    yearStarted: number;
    is501C3: boolean;
    vision: string;
    purpose: string;
    plan: string;
    allowReceivingTeams: boolean;
    invisible: boolean;
    anonymous: boolean;
    projectedRevenue ? : number;
    previousRevenue ? : number;
    haveBudget: boolean;
    adhereToBudget ? : boolean;
    haveDebt: boolean;
    debtAmount ? : number;
    website: string;
    facebookProfileUrl: string;
    instagramProfileUrl: string;
    twitterProfileUrl: string;
}
export interface AddressDto {
    countryId: number;
    stateOrProvinceId: number;
    city: string;
    postalCode: string;
    detail: string;
}
export interface ImproveDto {
    id: number;
    taxId: string;
    irsStatus: string;
    name: string;
    legalName: string;
    annualReceivingSupportedCount ? : number;
    yearStarted: number;
    address ? : ;
    is501C3: boolean;
    vision: string;
    purpose: string;
    plan: string;
    supportCategories: [];
    categories: [];
    affiliates: [];
    allowReceivingTeams: boolean;
    invisible: boolean;
    anonymous: boolean;
    projectedRevenue ? : number;
    previousRevenue ? : number;
    haveBudget: boolean;
    adhereToBudget ? : boolean;
    haveDebt: boolean;
    debtAmount ? : number;
    website: string;
    facebookProfileUrl: string;
    instagramProfileUrl: string;
    twitterProfileUrl: string;
}
export interface Country {
    name: string;
    twoLetterIsoCode: string;
    threeLetterIsoCode: string;
    numericIsoCode: number;
    id: number;
    isDeleted: boolean;
}
export interface StateOrProvince {
    countryId: number;
    name: string;
    abbreviation: string;
    id: number;
    isDeleted: boolean;
}
export interface FRCategoryMatrix {
    orgCategoryId: number;
    reportCategoryId: number;
    id: number;
    isDeleted: boolean;
}
export interface OrgCategory {
    name: string;
    description: string;
    code: string;
    id: number;
    isDeleted: boolean;
}
export interface Affiliate {
    name: string;
    id: number;
    isDeleted: boolean;
}
export interface HealthRating {
    displayOrder: number;
    name: string;
    description: string;
    id: number;
    isDeleted: boolean;
}
export interface RFFType {
    name: string;
    description: string;
    code: string;
    id: number;
    isDeleted: boolean;
}
export interface ReportCategory {
    name: string;
    description: string;
    code: string;
    id: number;
    isDeleted: boolean;
}
export interface OrgCompletenessStep {
    key: string;
    value: number;
    id: number;
    isDeleted: boolean;
}