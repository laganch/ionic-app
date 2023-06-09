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
import { PaymentHistoryDto } from './payment-history-dto';
import { Penalty } from './penalty';


export interface EnforcementDto { 
    amount?: number;
    name?: string;
    fee_description?: string;
    asin?: string;
    reference?: string;
    plateNumber?: string;
    photo?: string;
    historyList?: Array<PaymentHistoryDto>;
    biometric?: Array<PaymentHistoryDto>;
    penalty?: Array<Penalty>;
    route?: string;
    address?: string;
    lastPayment?: PaymentHistoryDto;
    lastPenalty?: Penalty;
    totalPayment?: number;
    totalPenalty?: number;
    paymentBalance?: number;
    registeredWeeks?: number;
    registeredDays?: number;
    registeredMonth?: number;
    amountDue?: number;
    penaltyDue?: number;
    otherPenaltyDue?: number;
    dateRegistered?: string;
    status?: string;
    biometricLevy?: number;
    biometricStatus?: string;
    paymentDate?: string;
    penaltyBalance?: number;
}

