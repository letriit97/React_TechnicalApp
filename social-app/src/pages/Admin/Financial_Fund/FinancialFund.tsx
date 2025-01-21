import React, { useEffect } from 'react'
import { Financial_Fund, Financial_FundFilter } from '../../../models/financial-management/financial-fund'
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { financialFund_GetDataPagination, Financial_Fund_Thunk_Param } from '../../../store/financial_fund/financial_fund_reducers';
import { PaginationParam } from '../../../models/BaseModel';
import { useDispatch } from 'react-redux';
import { formatCurrency } from '../../../helpers/utilities/utilities';

export const FinancialFund = () => {
    const dispatch = useDispatch<any>();
    const financialFunds: Financial_Fund[] = useSelector((state: AppState) => state.financialFund.financialFunds);
    const pagination: PaginationParam = useSelector((state: AppState) => state.financialFund.pagination);
    const financialFilter: Financial_FundFilter = useSelector((state: AppState) => state.financialFund.financialFilter);

    useEffect(() => {

        const config: Financial_Fund_Thunk_Param = { pagination: { ...pagination }, filter: financialFilter };
        dispatch(financialFund_GetDataPagination(config));
    }, [dispatch, pagination, financialFilter]);


    const initialTableData: JSX.Element[] = financialFunds.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.code}</td>
                <td>{item.title}</td>
                <td>{item.cardNumber}</td>
                <td>{formatCurrency(item.totals )}</td>
            </tr>
        );
    });
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Danh sách quỹ tài chính</h6>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Mã </th>
                                        <th>Quỹ tài chính</th>
                                        <th>Số tài khoản</th>
                                        <th>Số dư</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {initialTableData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
