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
import { PortalUserPojo } from './portal-user-pojo';


export interface QueryResultsPortalUserPojo { 
    limit?: number;
    offset?: number;
    total?: number;
    results?: Array<PortalUserPojo>;
    empty?: boolean;
}

