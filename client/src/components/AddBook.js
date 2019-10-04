import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }

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

  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Nome do livro: </label>
          <input
            type="text"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>

        <div className="field">
          <label>Gênero: </label>
          <input
            type="text"
            onChange={e => {
              this.setState({ genre: e.target.value });
            }}
          />
        </div>

        <div className="fiel">
          <label>Autor: </label>
          <select
            onChange={e => {
              this.setState({ authorId: e.target.value });
            }}
          >
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
