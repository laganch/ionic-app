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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { AsinDto } from '../model/asin-dto';
// @ts-ignore
import { MarketInfoDto } from '../model/market-info-dto';
// @ts-ignore
import { UserDemographicIndividual } from '../model/user-demographic-individual';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface CreatePersonRequestParams {
    asinDto: AsinDto;
}

export interface GetInformalSectioFromTaxRequestParams {
    asin: string;
}

export interface GetInformalSectioFromTax1RequestParams {
    asin: string;
}

export interface GetInformalSectioFromTax2RequestParams {
    asin: string;
}

export interface GetInformalSectioFromTax3RequestParams {
    asin: string;
}

export interface GetInformalSectioFromTax4RequestParams {
    asin: string;
}

export interface GetInformalSectioFromTax5RequestParams {
    asin: string;
}

export interface GetInformalSectioFromTax6RequestParams {
    asin: string;
}

export interface GetMarketInfoRequestParams {
    mcode: string;
}


@Injectable({
  providedIn: 'root'
})
export class PublicControllerService {

    protected basePath = 'http://localhost:8089';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createPerson(requestParameters: CreatePersonRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<any>;
    public createPerson(requestParameters: CreatePersonRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<any>>;
    public createPerson(requestParameters: CreatePersonRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<any>>;
    public createPerson(requestParameters: CreatePersonRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const asinDto = requestParameters.asinDto;
        if (asinDto === null || asinDto === undefined) {
            throw new Error('Required parameter asinDto was null or undefined when calling createPerson.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/createperson`;
        return this.httpClient.request<any>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                body: asinDto,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInformalSectioFromTax(requestParameters: GetInformalSectioFromTaxRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<UserDemographicIndividual>;
    public getInformalSectioFromTax(requestParameters: GetInformalSectioFromTaxRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<UserDemographicIndividual>>;
    public getInformalSectioFromTax(requestParameters: GetInformalSectioFromTaxRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<UserDemographicIndividual>>;
    public getInformalSectioFromTax(requestParameters: GetInformalSectioFromTaxRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const asin = requestParameters.asin;
        if (asin === null || asin === undefined) {
            throw new Error('Required parameter asin was null or undefined when calling getInformalSectioFromTax.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/informal/sector/${this.configuration.encodeParam({name: "asin", value: asin, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<UserDemographicIndividual>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInformalSectioFromTax1(requestParameters: GetInformalSectioFromTax1RequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<UserDemographicIndividual>;
    public getInformalSectioFromTax1(requestParameters: GetInformalSectioFromTax1RequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<UserDemographicIndividual>>;
    public getInformalSectioFromTax1(requestParameters: GetInformalSectioFromTax1RequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<UserDemographicIndividual>>;
    public getInformalSectioFromTax1(requestParameters: GetInformalSectioFromTax1RequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const asin = requestParameters.asin;
        if (asin === null || asin === undefined) {
            throw new Error('Required parameter asin was null or undefined when calling getInformalSectioFromTax1.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/informal/sector/${this.configuration.encodeParam({name: "asin", value: asin, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<UserDemographicIndividual>('head', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInformalSectioFromTax2(requestParameters: GetInformalSectioFromTax2RequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<UserDemographicIndividual>;
    public getInformalSectioFromTax2(requestParameters: GetInformalSectioFromTax2RequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<UserDemographicIndividual>>;
    public getInformalSectioFromTax2(requestParameters: GetInformalSectioFromTax2RequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<UserDemographicIndividual>>;
    public getInformalSectioFromTax2(requestParameters: GetInformalSectioFromTax2RequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const asin = requestParameters.asin;
        if (asin === null || asin === undefined) {
            throw new Error('Required parameter asin was null or undefined when calling getInformalSectioFromTax2.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/informal/sector/${this.configuration.encodeParam({name: "asin", value: asin, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<UserDemographicIndividual>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInformalSectioFromTax3(requestParameters: GetInformalSectioFromTax3RequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<UserDemographicIndividual>;
    public getInformalSectioFromTax3(requestParameters: GetInformalSectioFromTax3RequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<UserDemographicIndividual>>;
    public getInformalSectioFromTax3(requestParameters: GetInformalSectioFromTax3RequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<UserDemographicIndividual>>;
    public getInformalSectioFromTax3(requestParameters: GetInformalSectioFromTax3RequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const asin = requestParameters.asin;
        if (asin === null || asin === undefined) {
            throw new Error('Required parameter asin was null or undefined when calling getInformalSectioFromTax3.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/informal/sector/${this.configuration.encodeParam({name: "asin", value: asin, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<UserDemographicIndividual>('patch', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInformalSectioFromTax4(requestParameters: GetInformalSectioFromTax4RequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<UserDemographicIndividual>;
    public getInformalSectioFromTax4(requestParameters: GetInformalSectioFromTax4RequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<UserDemographicIndividual>>;
    public getInformalSectioFromTax4(requestParameters: GetInformalSectioFromTax4RequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<UserDemographicIndividual>>;
    public getInformalSectioFromTax4(requestParameters: GetInformalSectioFromTax4RequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const asin = requestParameters.asin;
        if (asin === null || asin === undefined) {
            throw new Error('Required parameter asin was null or undefined when calling getInformalSectioFromTax4.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/informal/sector/${this.configuration.encodeParam({name: "asin", value: asin, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<UserDemographicIndividual>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInformalSectioFromTax5(requestParameters: GetInformalSectioFromTax5RequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<UserDemographicIndividual>;
    public getInformalSectioFromTax5(requestParameters: GetInformalSectioFromTax5RequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<UserDemographicIndividual>>;
    public getInformalSectioFromTax5(requestParameters: GetInformalSectioFromTax5RequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<UserDemographicIndividual>>;
    public getInformalSectioFromTax5(requestParameters: GetInformalSectioFromTax5RequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const asin = requestParameters.asin;
        if (asin === null || asin === undefined) {
            throw new Error('Required parameter asin was null or undefined when calling getInformalSectioFromTax5.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/informal/sector/${this.configuration.encodeParam({name: "asin", value: asin, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<UserDemographicIndividual>('options', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInformalSectioFromTax6(requestParameters: GetInformalSectioFromTax6RequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<UserDemographicIndividual>;
    public getInformalSectioFromTax6(requestParameters: GetInformalSectioFromTax6RequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<UserDemographicIndividual>>;
    public getInformalSectioFromTax6(requestParameters: GetInformalSectioFromTax6RequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<UserDemographicIndividual>>;
    public getInformalSectioFromTax6(requestParameters: GetInformalSectioFromTax6RequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const asin = requestParameters.asin;
        if (asin === null || asin === undefined) {
            throw new Error('Required parameter asin was null or undefined when calling getInformalSectioFromTax6.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/informal/sector/${this.configuration.encodeParam({name: "asin", value: asin, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<UserDemographicIndividual>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMarketInfo(requestParameters: GetMarketInfoRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<MarketInfoDto>;
    public getMarketInfo(requestParameters: GetMarketInfoRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<MarketInfoDto>>;
    public getMarketInfo(requestParameters: GetMarketInfoRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<MarketInfoDto>>;
    public getMarketInfo(requestParameters: GetMarketInfoRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const mcode = requestParameters.mcode;
        if (mcode === null || mcode === undefined) {
            throw new Error('Required parameter mcode was null or undefined when calling getMarketInfo.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/informal/market/sector/${this.configuration.encodeParam({name: "mcode", value: mcode, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<MarketInfoDto>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}