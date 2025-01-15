import type { BaseGuid } from "../BaseModel";

export interface AuthenticationResponse extends BaseGuid {
    token: string;
    refreshToken: string;
    accountInfo: AccountInformation;
    roles: AccountModule[];
}

export interface AccountInformation {
    username: string;
    fullName: string;
    avatar: string;
    customerId: string | null;
}

export interface AccountModule {
    groupRoleId: string;
    groupRoleName: string;
    groupRoleKey: string;
    position: number;
    menuName: string;
    menuUrl: string;
    menuIcon: string;
    isShowCategories: boolean;
    roles: AccountRole[];
}

export interface AccountRole {
    roleName: string;
    roleKey: string;
    area: string;
    controller: string;
    action: string;
    menuName: string;
    menuUrl: string;
    menuIcon: string;
    position: number;
    isShow: boolean;
}

export interface LoginRequest {
    username: string;
    password: string;
    isRememberMe: boolean;
}

export interface ForgetPasswordRequest {
    username: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

export interface RefreshToken {
    iD: number;
    token: string;
    expires: string;
    createdTime: string;
    revokedTime: string | null;
    replacedByToken: string;
    reasonRevoked: string;
    username: string;
    isExpired: boolean;
    isRevoked: boolean;
    isActive: boolean;
}