import type { PaginationParam } from "../../models/BaseModel";
import type { Financial_Fund, Financial_FundFilter } from "../../models/financial-management/financial-fund";

export interface FinancialState {
    pagination: PaginationParam;
    financialFilter: Financial_FundFilter;
    financialFunds: Financial_Fund[],
    loading: boolean,
    error: string | null
}