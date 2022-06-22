import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pwfo872isx01xk4zir3hq7/master',
    cache: new InMemoryCache()
})