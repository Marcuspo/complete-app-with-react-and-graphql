import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>Nome do Livro: {book.name} </h2>
          <p>Gênero: {book.genre} </p>
          <p>Nome do Autor: {book.author.name} </p>
          <p>Todos os livros desse autor</p>
          <ul className="other-books">
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div> Nenhum livro selecionado ....</div>;
    }
  }

  render() {
    return (
      <div>
        <ul id="book-details">{this.displayBookDetails()}</ul>
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
