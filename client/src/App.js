import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//commponents
import BookList from "./components/BookList";

//ApolloClient setup
const client = new ApolloClient({
  uri: "http://localhost:400/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Arruma essa coluna e vai beber água</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
