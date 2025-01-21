import { BaseGuid } from "../BaseModel";

export interface Financial_Transaction_Detail extends BaseGuid {
    financial_TransactionId: string;
    note: string;
    amount: number;
    
    rowId: number;
}