/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListItem = /* GraphQL */ `
  query GetListItem($id: ID!) {
    getListItem(id: $id) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listListItems = /* GraphQL */ `
  query ListListItems(
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
