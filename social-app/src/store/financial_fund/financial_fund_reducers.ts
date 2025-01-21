import { createAsyncThunk, createSlice,  PayloadAction } from "@reduxjs/toolkit"
import { FinancialState } from "./financial_type"
import { PaginationParam,PaginationUtility } from "../../models/BaseModel"
import { Financial_FundFilter, Financial_Fund } from "../../models/financial-management/financial-fund"
import { financialFundService } from "../../services/financial-fund.service"

// 1. Init state
const initialState: FinancialState = {
    financialFunds: [],
    pagination: {
        pageNumber: 1,
        pageSize: 10
    },
    financialFilter: <Financial_FundFilter>{
        keyword: ''
    },
    loading: false,
    error: null
}

export interface Financial_Fund_Thunk_Param {
    pagination: PaginationParam,
    filter: Financial_FundFilter
}

//#region 2. Create reducers thao tác với API
export const financialFund_GetDataPagination = 
            createAsyncThunk<PaginationUtility<Financial_Fund>, Financial_Fund_Thunk_Param, { rejectValue: string }>('financialFund/search',
    async (request: Financial_Fund_Thunk_Param) => {
        try {
            const response = await financialFundService.getFinancialFund_Search(request.pagination, request.filter);
            return response;
        } catch (error) {
            console.log("reducer - financialFund_GetDataPagination - error:", error);
            return (error);
        }
    }
);
//#endregion



const financialSlice = createSlice({
    name: 'financialFund',
    initialState,
    reducers: {
        fetchFinancialRequest: state => {
            return {
                ...state,
                loading: true,
                error: null
            }
        },
        fetchFinancialSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                financialFunds: action.payload.result,
                pagination: action.payload.pagination
            }
        },
        fetchFinancialFailure: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(financialFund_GetDataPagination.pending, (state) => {
            return {
                ...state,
                loading: true,
                error: null
            }
        });
        builder.addCase(financialFund_GetDataPagination.fulfilled, (state, action) => {
            // debugger;
            console.log(action);
            
            return {
                ...state,
                loading: false,
                financialFunds: action.payload.result,
                pagination: action.payload.pagination
            }
        });
        builder.addCase(financialFund_GetDataPagination.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                financialFilter: state.financialFilter,
                pagination: state.pagination,
                error: action.error.message
            }
        });
    }
})


export const { fetchFinancialRequest, fetchFinancialSuccess, fetchFinancialFailure } = financialSlice.actions
export default financialSlice.reducer