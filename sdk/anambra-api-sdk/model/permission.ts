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
import { Roles } from './roles';


export interface Permission { 
    id?: number;
    permissionTypeConstant?: Permission.PermissionTypeConstantEnum;
    role?: Roles;
}
export namespace Permission {
    export type PermissionTypeConstantEnum = 'CREATE_USER' | 'UPDATE_USER' | 'CREATE_MARKET' | 'CREATE_TRANSPORT' | 'CREATE_PROPERTY' | 'PRINT_CARD' | 'MANAGE_DRIVER' | 'ENROLLMENT' | 'DEFAULT' | 'SIGNAGE' | 'CAN_VIEW_TOKEN' | 'CAN_ACCESS_INFORMAL_SECTOR' | 'CAN_ACCESS_EMBLEM_MANAGEMENT' | 'CAN_VIEW_TRANSPORT_REPORT' | 'CAN_VIEW_MARKET_REPORT' | 'CAN_VIEW_TRANSPORT' | 'CAN_VIEW_MARKET' | 'CAN_VIEW_PROPERTY' | 'CAN_VIEW_PAYMENTS' | 'CAN_DELETE_DRIVER' | 'CAN_DELETE_TRANSPORT' | 'CAN_GENERATE_EMBLEM' | 'CAN_PRINT_EMBLEM' | 'CAN_VIEW_EMBLEM' | 'CAN_ISSUE_EMBLEM';
    export const PermissionTypeConstantEnum = {
        CreateUser: 'CREATE_USER' as PermissionTypeConstantEnum,
        UpdateUser: 'UPDATE_USER' as PermissionTypeConstantEnum,
        CreateMarket: 'CREATE_MARKET' as PermissionTypeConstantEnum,
        CreateTransport: 'CREATE_TRANSPORT' as PermissionTypeConstantEnum,
        CreateProperty: 'CREATE_PROPERTY' as PermissionTypeConstantEnum,
        PrintCard: 'PRINT_CARD' as PermissionTypeConstantEnum,
        ManageDriver: 'MANAGE_DRIVER' as PermissionTypeConstantEnum,
        Enrollment: 'ENROLLMENT' as PermissionTypeConstantEnum,
        Default: 'DEFAULT' as PermissionTypeConstantEnum,
        Signage: 'SIGNAGE' as PermissionTypeConstantEnum,
        CanViewToken: 'CAN_VIEW_TOKEN' as PermissionTypeConstantEnum,
        CanAccessInformalSector: 'CAN_ACCESS_INFORMAL_SECTOR' as PermissionTypeConstantEnum,
        CanAccessEmblemManagement: 'CAN_ACCESS_EMBLEM_MANAGEMENT' as PermissionTypeConstantEnum,
        CanViewTransportReport: 'CAN_VIEW_TRANSPORT_REPORT' as PermissionTypeConstantEnum,
        CanViewMarketReport: 'CAN_VIEW_MARKET_REPORT' as PermissionTypeConstantEnum,
        CanViewTransport: 'CAN_VIEW_TRANSPORT' as PermissionTypeConstantEnum,
        CanViewMarket: 'CAN_VIEW_MARKET' as PermissionTypeConstantEnum,
        CanViewProperty: 'CAN_VIEW_PROPERTY' as PermissionTypeConstantEnum,
        CanViewPayments: 'CAN_VIEW_PAYMENTS' as PermissionTypeConstantEnum,
        CanDeleteDriver: 'CAN_DELETE_DRIVER' as PermissionTypeConstantEnum,
        CanDeleteTransport: 'CAN_DELETE_TRANSPORT' as PermissionTypeConstantEnum,
        CanGenerateEmblem: 'CAN_GENERATE_EMBLEM' as PermissionTypeConstantEnum,
        CanPrintEmblem: 'CAN_PRINT_EMBLEM' as PermissionTypeConstantEnum,
        CanViewEmblem: 'CAN_VIEW_EMBLEM' as PermissionTypeConstantEnum,
        CanIssueEmblem: 'CAN_ISSUE_EMBLEM' as PermissionTypeConstantEnum
    };
}


