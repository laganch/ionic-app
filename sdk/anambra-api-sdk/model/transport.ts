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
import { PaymentFrequency } from './payment-frequency';


export interface Transport { 
    id?: number;
    dateDeactivated?: string;
    status?: Transport.StatusEnum;
    createdAt?: string;
    lastUpdatedAt?: string;
    plateNumber?: string;
    paymentFrequency?: PaymentFrequency;
    paymentMode?: string;
    type?: Transport.TypeEnum;
    timeCreated?: string;
    timeUpdated?: string;
}
export namespace Transport {
    export type StatusEnum = 'ACTIVE' | 'INACTIVE';
    export const StatusEnum = {
        Active: 'ACTIVE' as StatusEnum,
        Inactive: 'INACTIVE' as StatusEnum
    };
    export type TypeEnum = 'DRIVER' | 'OWNER';
    export const TypeEnum = {
        Driver: 'DRIVER' as TypeEnum,
        Owner: 'OWNER' as TypeEnum
    };
}

