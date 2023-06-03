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
import { QueryResultsWalletTransactions } from '../model/query-results-wallet-transactions';
// @ts-ignore
import { Wallet } from '../model/wallet';
// @ts-ignore
import { WalletTransactionsFilter } from '../model/wallet-transactions-filter';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface SearchWalletTransactionsRequestParams {
    filter: WalletTransactionsFilter;
}

export interface UpdateWalletBalanceRequestParams {
    rrr: string;
}


@Injectable({
  providedIn: 'root'
})
export class WalletControllerService {

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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getWalletBalance(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<Wallet>;
    public getWalletBalance(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<Wallet>>;
    public getWalletBalance(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<Wallet>>;
    public getWalletBalance(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {

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

        let localVarPath = `/api/wallet/balance`;
        return this.httpClient.request<Wallet>('get', `${this.configuration.basePath}${localVarPath}`,
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
    public searchWalletTransactions(requestParameters: SearchWalletTransactionsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<QueryResultsWalletTransactions>;
    public searchWalletTransactions(requestParameters: SearchWalletTransactionsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<QueryResultsWalletTransactions>>;
    public searchWalletTransactions(requestParameters: SearchWalletTransactionsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<QueryResultsWalletTransactions>>;
    public searchWalletTransactions(requestParameters: SearchWalletTransactionsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const filter = requestParameters.filter;
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling searchWalletTransactions.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>filter, 'filter');
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

        let localVarPath = `/api/wallet/transactions/search`;
        return this.httpClient.request<QueryResultsWalletTransactions>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
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
    public updateWalletBalance(requestParameters: UpdateWalletBalanceRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<Wallet>;
    public updateWalletBalance(requestParameters: UpdateWalletBalanceRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<Wallet>>;
    public updateWalletBalance(requestParameters: UpdateWalletBalanceRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<Wallet>>;
    public updateWalletBalance(requestParameters: UpdateWalletBalanceRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const rrr = requestParameters.rrr;
        if (rrr === null || rrr === undefined) {
            throw new Error('Required parameter rrr was null or undefined when calling updateWalletBalance.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (rrr !== undefined && rrr !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>rrr, 'rrr');
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

        let localVarPath = `/api/wallet/balance/update`;
        return this.httpClient.request<Wallet>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
