/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      subtitle
      body
      slug
      image
      date
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        body
        slug
        image
        date
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      title
      slug
      body
      header
      subheader
      image
      date
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        slug
        body
        header
        subheader
        image
        date
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDoc = /* GraphQL */ `
  query GetDoc($id: ID!) {
    getDoc(id: $id) {
      id
      title
      slug
      body
      header
      subheader
      image
      date
      category
      code
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDocs = /* GraphQL */ `
  query ListDocs(
    $filter: ModelDocFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        slug
        body
        header
        subheader
        image
        date
        category
        code
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
