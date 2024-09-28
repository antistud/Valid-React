/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
export const createDoc = /* GraphQL */ `
  mutation CreateDoc(
    $input: CreateDocInput!
    $condition: ModelDocConditionInput
  ) {
    createDoc(input: $input, condition: $condition) {
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
export const updateDoc = /* GraphQL */ `
  mutation UpdateDoc(
    $input: UpdateDocInput!
    $condition: ModelDocConditionInput
  ) {
    updateDoc(input: $input, condition: $condition) {
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
export const deleteDoc = /* GraphQL */ `
  mutation DeleteDoc(
    $input: DeleteDocInput!
    $condition: ModelDocConditionInput
  ) {
    deleteDoc(input: $input, condition: $condition) {
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
