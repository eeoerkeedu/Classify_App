import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User($_id: String!) {
    user(_id: $_id) {
      _id
      username
      email
      role
    }
  }
`;

export const QUERY_SCHOOL = gql`
  query school($_id: String!) {
    school(_id: $_id) {
      _id
      name
      principle
      budget
      department {
        _id
        department
      }
      teachers {
        _id
        name
        department
        office
        students {
          _id
          name
          grade
          note
        }
      }
    }
  }
`;

export const QUERY_ALLSCHOOLS = gql`
  query getSchools {
    schools {
      _id
      name
      principle
      budget
      department {
        _id
        department
      }
      teachers {
        _id
        name
        department
        office
        students {
          _id
          name
          grade
          note
        }
      }
    }
  }
`;
