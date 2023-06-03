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


export interface PrintDto { 
    id?: number;
    type?: PrintDto.TypeEnum;
    emblemType?: PrintDto.EmblemTypeEnum;
}
export namespace PrintDto {
    export type TypeEnum = 'TRANSPORT' | 'MARKET' | 'ENUMERATION' | 'PROPERTY' | 'CORPORATE' | 'MARKET_STICKER' | 'TRANSPORT_STICKER';
    export const TypeEnum = {
        Transport: 'TRANSPORT' as TypeEnum,
        Market: 'MARKET' as TypeEnum,
        Enumeration: 'ENUMERATION' as TypeEnum,
        Property: 'PROPERTY' as TypeEnum,
        Corporate: 'CORPORATE' as TypeEnum,
        MarketSticker: 'MARKET_STICKER' as TypeEnum,
        TransportSticker: 'TRANSPORT_STICKER' as TypeEnum
    };
    export type EmblemTypeEnum = 'MOTORCYCLES' | 'TRICYCLE' | 'TAXI' | 'BUSES' | 'PICKUP' | 'TRUCKS_LORRIES';
    export const EmblemTypeEnum = {
        Motorcycles: 'MOTORCYCLES' as EmblemTypeEnum,
        Tricycle: 'TRICYCLE' as EmblemTypeEnum,
        Taxi: 'TAXI' as EmblemTypeEnum,
        Buses: 'BUSES' as EmblemTypeEnum,
        Pickup: 'PICKUP' as EmblemTypeEnum,
        TrucksLorries: 'TRUCKS_LORRIES' as EmblemTypeEnum
    };
}


