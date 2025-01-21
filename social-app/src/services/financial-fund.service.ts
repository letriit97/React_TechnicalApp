import api from "../helpers/api";
import { PaginationUtility, PaginationParam } from "../models/BaseModel";
import { Financial_Fund, Financial_FundFilter } from "../models/financial-management/financial-fund";



const getFinancialFund_Search = async (pagination: PaginationParam, filter: Financial_FundFilter): Promise<PaginationUtility<Financial_Fund>> => {
    const params = {
        pageNumber: pagination.pageNumber,
        pageSize: pagination.pageSize,
        ...filter // Giả sử filter là một đối tượng với các thuộc tính cần thiết
    };

    return await api.get<PaginationUtility<Financial_Fund>>('api/FinancialFund/search', { params })
        .then((response: any) => {
            return response.data as PaginationUtility<Financial_Fund>;
        });
};

export const financialFundService = {
    getFinancialFund_Search
};