export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
};


export function CurrencyFormatter({ amount = 0 }) {
    const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0, // Vietnamese Dong doesn't use smaller units
    }).format(amount);
    return formattedAmount;
}