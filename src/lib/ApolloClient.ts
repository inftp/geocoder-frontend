import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
require('dotenv').config();


const HTTP_URI = 'http://localhost:4000/'//process.env.HTTP_URI;
export const createClient = () => {
  return new ApolloClient({
    // we will change this later when setting up the socket 
    link: new HttpLink({ uri: HTTP_URI }),
    cache: new InMemoryCache()
  });
};