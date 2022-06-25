import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o2whj00a2z01xxawz1e12r/master",
  cache: new InMemoryCache()
})