import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  render() {
    return (
      <div>
        <ul id="book-details">
          <p>Detalhes dos livros</p>
        </ul>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);
