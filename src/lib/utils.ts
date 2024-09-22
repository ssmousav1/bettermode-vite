import { gql } from "@apollo/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPosts() {
  return gql`
    query GetPosts(
      $filterBy: [PostListFilterByInput!]
      $limit: Int!
      $orderBy: PostListOrderByEnum
      $orderByString: String
      $postTypeIds: [String!]
      $reverse: Boolean
    ) {
      posts(
        filterBy: $filterBy
        limit: $limit
        orderBy: $orderBy
        orderByString: $orderByString
        postTypeIds: $postTypeIds
        reverse: $reverse
      ) {
        nodes {
          id
          postTypeId
          reactionsCount
          repliesCount
          totalRepliesCount
          title
          description
          reactions {
            count
            reacted
            reaction
          }
          replies(limit: 2, reverse: true) {
            nodes {
              reactionsCount
              repliesCount
              totalRepliesCount
              title
              description
              owner {
                __typename
                member {
                  displayName
                  name
                  id
                  username
                  profilePicture {
                    ... on Image {
                      __typename
                      id
                      url
                      urls {
                        __typename
                        full
                        large
                        medium
                        small
                        thumb
                      }
                    }
                    ... on Emoji {
                      __typename
                      id
                      text
                    }
                    ... on Glyph {
                      __typename
                      id
                      text
                      variant
                    }
                    ... on File {
                      id
                      name
                      url
                    }
                  }
                }
              }
              reactions {
                count
                reacted
                reaction
                participants(limit: 10) {
                  nodes {
                    participant {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}

export function getPost() {
  return gql`
    query GetPost($id: ID!) {
      post(id: $id) {
        id
        slug
        reactionsCount
        shortContent
        repliesCount
        totalRepliesCount
        title
        description
        owner {
          __typename
          member {
            displayName
            name
            username
            __typename
          }
        }
        reactions {
          count
          reacted
          reaction
          participants(limit: 10) {
            nodes {
              participant {
                id
                name
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        replies(limit: 2, reverse: true) {
          nodes {
            id
            slug
            reactionsCount
            shortContent
            repliesCount
            totalRepliesCount
            title
            description
            owner {
              __typename
              member {
                displayName
                name
                id
                username
                __typename
                profilePicture {
                  ... on Image {
                    url
                  }
                }
              }
            }
            reactions {
              count
              reacted
              reaction
              participants(limit: 10) {
                nodes {
                  participant {
                    id
                    name
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          totalCount
          __typename
        }
        __typename
      }
    }
  `;
}

export function addReaction() {
  return gql`
    mutation addReaction($input: AddReactionInput!, $postId: ID!) {
      addReaction(input: $input, postId: $postId) {
        status
      }
    }
  `;
}

export function removeReaction() {
  return gql`
    mutation removeReaction($reaction: String!, $postId: ID!) {
      removeReaction(reaction: $reaction, postId: $postId) {
        status
      }
    }
  `;
}
