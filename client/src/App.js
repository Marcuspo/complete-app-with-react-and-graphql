import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//commponents
import BookList from "./components/BookList";

//ApolloClient setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
<<<<<<< HEAD
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Lista de livros do marquinhos</h1>
        <BookList />
      </div>
    </ApolloProvider>
=======
    <div className="main">
      <h1>React Graph</h1>
    </div>
>>>>>>> cf4739aed4d60a62e96266812d843c3156425f77
  );
}

export default App;
