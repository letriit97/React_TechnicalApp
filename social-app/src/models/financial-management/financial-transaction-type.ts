import type { BaseIdentity, BaseFilter } from "../BaseModel";


/**
 * Loại giao dịch (dùng chung)
 */
export interface Financial_Transaction_Type extends BaseIdentity {
    title: string;
    code: string;
    description: string;
    position: number;
    isInCome: boolean;
}

export interface Financial_Transaction_TypeFilter extends BaseFilter {

}