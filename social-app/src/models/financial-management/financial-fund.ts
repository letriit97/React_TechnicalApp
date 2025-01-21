import type { BaseGuid, BaseFilter } from "../BaseModel";



/**
 * Quỹ tài chính
 */
export interface Financial_Fund extends BaseGuid {
   /**
* Mã
*/
   code: string;

   /**
* Tên
*/
   title: string;

   /**
* Tổng tiền
*/
   totals: number;

   /**
* Số thẻ
*/
   cardNumber: string | null;
   customerId: string | null;
}

export interface Financial_FundFilter extends BaseFilter {
}

/// <summary>
/// Chỉ số tiêu dùng - số dư
/// </summary>
export interface Financial_Fund_Expense {
   income: number;
   used: number;
   balance: number;
}

export interface Financial_Fund_Report_Follow_Week {
   valuesOfWeek: number[];
   expense: Financial_Fund_Expense;
}