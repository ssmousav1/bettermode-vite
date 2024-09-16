import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import App from "./App.tsx";
import "./index.css";

const httpLink = createHttpLink({
  uri: 'https://api.bettermode.com/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpBazZMWTFNSW4iLCJuZXR3b3JrSWQiOiJ6NEdDTVU3NFpSIiwibmV0d29ya0RvbWFpbiI6ImJldHRlcm1vZGUudHJpYmVwbGF0Zm9ybS5jb20iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoibzJwS0pCbUVNaHVIakdBSW1zQnJvb2ZiMVlob2IzeVpZZ0o4RVgzQ0tjZFk4cmZ0MFYiLCJpYXQiOjE3MjY0OTMwMjQsImV4cCI6MTcyOTA4NTAyNH0.hR1fNgdM47e42yRyQxq2prwt7zz2XUhajy0QcdYoBJI`,
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
