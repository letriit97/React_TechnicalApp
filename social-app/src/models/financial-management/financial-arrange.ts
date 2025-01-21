import type { BaseFilter, BaseIdentity } from "../BaseModel";

/**
 * Phân loại tài chính
 * @export
 * @interface Financial_Arrange
 * @extends {BaseIdentity}
 */
export interface Financial_Arrange extends BaseIdentity {
    title: string;
    code: string;
    description: string;
    position: number;
}

export interface Financial_ArrangeFilter extends BaseFilter {

}