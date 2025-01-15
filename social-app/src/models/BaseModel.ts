
export interface BaseResult<T> {
    statusCode: number;
    message: string;
    success: boolean;
    result: T;
}

export interface BaseGuid {
    id: string;
}



export interface BaseGuid_Audit_SoftDelete extends BaseGuid {
    createdDate: string;
    modifiedDate: string | null;
    isDeleted: boolean;
    deletedAt: string | null;
}

export interface BaseGuid_Entity_Audit extends BaseGuid {
    createdDate: string;
    modifiedDate: string | null;
    createdBy: string;
    modifiedBy: string;
}

export interface BaseGuid_Entity_Audit_SoftDelete extends BaseGuid {
    createdDate: string;
    modifiedDate: string | null;
    createdBy: string;
    modifiedBy: string;
    isDeleted: boolean;
    deletedAt: string | null;
}

// ===================IDENITY===================
export interface BaseIdentity {
    id: number;
}

export interface BaseIdentity_Audit_SoftDelete extends BaseIdentity {
    createdDate: string;
    modifiedDate: string | null;
    isDeleted: boolean;
    deletedAt: string | null;
}

export interface BaseIdentity_Entity_Audit extends BaseIdentity {
    createdDate: string;
    modifiedDate: string | null;
    createdBy: string;
    modifiedBy: string;
}

export interface BaseIdentity_Entity_Audit_SoftDelete extends BaseIdentity {
    createdDate: string;
    modifiedDate: string | null;
    createdBy: string;
    modifiedBy: string;
    isDeleted: boolean;
    deletedAt: string | null;
}


export interface BaseFilter {
    keyword: string;
}