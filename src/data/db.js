import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clulby30c003s07wb6t1od0lc/master',
    cache: new InMemoryCache(),
});

const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    items {
      id
      name
      description
    }
  }
`;

//get posts query
const GET_POSTS_QUERY = gql`
    query GetPosts {
        posts {
            body
            createdAt
            id
            publishedAt
            slug
            subtitle
            title
            updatedAt
            image {
              url
            }
          }
    }
    `;

//get post by slug query
const GET_POST_BY_SLUG_QUERY = gql`
    query Posts($slug: String!) {
            post(where: {slug:$slug}) {
              body
              createdAt
              publishedAt
              slug
              subtitle
              title
              image {
                url
              }
            }
    }
    `;


// get pages by slug query
const GET_PAGE_BY_SLUG_QUERY = gql`
    query Pages($slug: String!) {
            page(where: {slug:$slug}) {
                body
                slug
                subheader
                title
                header
                page {
                    html
                  }
              }
            }
    `;

// get docs by slug query
const GET_DOC_BY_SLUG_QUERY = gql`
    query Docs($slug: String!) {
            doc(where: {slug:$slug}) {
                body
                slug
                subheader
                title
                header
              }
            }
    `;

const DB = {
    getPosts: async () => {
        const { data } = await client.query({
            query: GET_POSTS_QUERY
        });
        return data.posts;
    },
    getPostBySlug: async (slug) => {
        const { data } = await client.query({
            query: GET_POST_BY_SLUG_QUERY,
            variables: { slug }
        });
        return data.post;
    },
    getPageBySlug: async (slug) => {
        const { data } = await client.query({
            query: GET_PAGE_BY_SLUG_QUERY,
            variables: { slug }
        });
        return data.page;
    },
    getDocBySlug: async (slug) => {
        const { data } = await client.query({
            query: GET_DOC_BY_SLUG_QUERY,
            variables: { slug }
        });
        return data.doc;
    },
}

export default DB;