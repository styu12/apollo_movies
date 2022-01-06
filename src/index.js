import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import client from "./apollo";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
