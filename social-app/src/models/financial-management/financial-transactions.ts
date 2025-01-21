import { BaseGuid_Audit_SoftDelete, BaseFilter } from "../BaseModel";
import type { Financial_Transaction_Detail } from "./financial-transaction-detail";

export interface Financial_Transactions extends BaseGuid_Audit_SoftDelete {
    code: string;
    financial_Fund_Id: string;
    transaction_Type_Id: number | null;
    transaction_Type_Name: string;
    financial_Arrange_Id: number | null;
    financial_Arrange_Name: string;
    transaction_Amount: number;
    description: string;
    receiver: string;
    isInCome: boolean;
    transaction_History: string;
    details: Financial_Transaction_Detail[]
}

export interface Financial_TransactionsFilter extends BaseFilter {

}