import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, AddBookMutation };
