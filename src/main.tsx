import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App.tsx";
import "./index.css";

const httpLink = createHttpLink({
  uri: "https://api.bettermode.com/",
});
localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpBazZMWTFNSW4iLCJuZXR3b3JrSWQiOiJ6NEdDTVU3NFpSIiwibmV0d29ya0RvbWFpbiI6ImJldHRlcm1vZGUudHJpYmVwbGF0Zm9ybS5jb20iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoiazNNbWJMejVZMXY4UW9Ec0FrV2RFREg2WVZnNFNSNjd2WUVTSElwSzFMUjRqSUc5ZW0iLCJpYXQiOjE3MjY5MDY4NDMsImV4cCI6MTcyOTQ5ODg0M30.j-yAeFdo2AF89fnKQ5NNIj53SVl46IofxFz5slnfS9U"
);
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
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
