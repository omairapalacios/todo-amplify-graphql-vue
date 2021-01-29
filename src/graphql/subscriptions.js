/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem($owner: String!) {
    onCreateListItem(owner: $owner) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem($owner: String!) {
    onUpdateListItem(owner: $owner) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem($owner: String!) {
    onDeleteListItem(owner: $owner) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
