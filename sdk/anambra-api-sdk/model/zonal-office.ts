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
import { Zone } from './zone';


export interface ZonalOffice { 
    id?: number;
    name?: string;
    address?: string;
    head?: string;
    contact?: string;
    zone?: Zone;
}

