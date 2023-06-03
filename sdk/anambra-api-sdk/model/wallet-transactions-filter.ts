/**
 * ANAMBRA API
 * The ANAMBRA RESTful service using springdoc-openapi and OpenAPI 3.0
 *
 * The version of the OpenAPI document: 1.0
 * Contact: cuhuegbulem@oasismgt.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface WalletTransactionsFilter { 
    offset?: number;
    limit?: number;
    order?: WalletTransactionsFilter.OrderEnum;
    orderColumn?: string;
    from?: string;
    to?: string;
}
export namespace WalletTransactionsFilter {
    export type OrderEnum = 'ASC' | 'DESC';
    export const OrderEnum = {
        Asc: 'ASC' as OrderEnum,
        Desc: 'DESC' as OrderEnum
    };
}


