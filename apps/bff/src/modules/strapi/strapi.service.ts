import { ApolloClient, DefaultOptions, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { Global, Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache'
    },
    query: {
        fetchPolicy: 'no-cache'
    }
};

@Global()
@Injectable()
export class StrapiService {
    private readonly client: ApolloClient<NormalizedCacheObject>;
    
    constructor() {
        this.client = new ApolloClient({
            link: new HttpLink({ uri: process.env.STRAPI_HOST + 'graphql', fetch }),
            cache: new InMemoryCache(),
            defaultOptions
        });
    }

    get getClient() {
        return this.client;
    }
}
