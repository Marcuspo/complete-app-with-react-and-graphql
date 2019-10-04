import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  displayAuthor() {
    var data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading Autores....</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <form id="add-book">
        <div className="field">
          <label>Nome do livro: </label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Gênero: </label>
          <input type="text" />
        </div>

        <div className="fiel">
          <label>Autor: </label>
          <select>
            <option>Selecione o Autor: </option>
            {this.displayAuthor()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
