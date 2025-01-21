export const generateParams = (paramsObject: Record<string, any>): URLSearchParams => {
    const params = new URLSearchParams();

    for (const key in paramsObject) {
        if (paramsObject.hasOwnProperty(key)) {
            const value = paramsObject[key];

            // Kiểm tra nếu giá trị là một chuỗi không rỗng
            if (typeof value === 'string' && value.trim() !== '') {
                params.append(key, value);
            }
            // Kiểm tra nếu giá trị là một mảng và có ít nhất một phần tử
            else if (Array.isArray(value) && value.length > 0) {
                value.forEach(item => {
                    if (typeof item === 'string' && item.trim() !== '') {
                        params.append(key, item);
                    }
                });
            }
            // Kiểm tra nếu giá trị là một số
            else if (typeof value === 'number') {
                params.append(key, value.toString());
            }
        }
    }

    return params;
};