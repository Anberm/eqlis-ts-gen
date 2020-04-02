export interface LoginReqDto {
  email: string;

  password: string;

  returnUrl?: string;

  rememberLogin: boolean;
}
export interface UserOrganization {
  userId: number;

  userName?: string;

  orgId: number;

  orgName?: string;

  orgLogo?: string;

  isPrimary: boolean;
}
export interface OrgType {
  name?: string;

  description?: string;

  code?: string;

  id: number;

  isDeleted: boolean;
}
export interface SecurityQuestion {
  question?: string;

  id: number;

  isDeleted: boolean;
}
export interface SignupInitDto {
  orgTypes: OrgType[];

  securityQuestions: SecurityQuestion[];
}
export interface SignupReqDto {
  firstName: string;

  lastName: string;

  email: string;

  securityQuestion: number;

  securityAnswer: string;

  orgType?: string;

  einsnn?: string;

  password: string;

  confirmPassword: string;

  returnUrl?: string;
}
export interface SignupRespDto {
  returnUrl?: string;
}
export interface ProblemDetails {
  type?: string;

  title?: string;

  status?: number;

  detail?: string;

  instance?: string;
}
export enum ProjectType {
  Funding = 0,
  Receiving = 1
}

export interface OrganizationDto {
  id: number;

  logo?: string;

  isActive: boolean;

  activeTime?: string;

  isTryOut: boolean;

  tryOutTime?: string;

  orgTypeId: number;

  orgTypeCode?: string;

  name?: string;

  legalName?: string;

  taxId?: string;

  phone?: string;

  howHeard?: string;

  website?: string;

  description?: string;

  facebookProfileUrl?: string;

  instagramProfileUrl?: string;

  linkedInProfileUrl?: string;

  twitterProfileUrl?: string;

  annualReceivingSupportedCount?: number;

  cause?: string;

  plan?: string;

  vision?: string;

  impact?: string;

  purpose?: string;

  irsStatus?: string;

  is501C3: boolean;

  allowReceivingTeams: boolean;

  yearStarted: number;

  previousHistory?: string;

  paidStaff: number;

  volunteers: number;

  projectedRevenue?: number;

  previousRevenue?: number;

  haveBudget: boolean;

  adhereToBudget?: boolean;

  haveDebt: boolean;

  debtAmount?: number;

  statsYear: number;

  invisible: boolean;

  anonymous: boolean;
}
