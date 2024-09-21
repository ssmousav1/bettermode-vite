import { Button } from "@/components/ui/button";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const FILMS_QUERY = gql`
  query GetPosts(
    $after: String
    $before: String
    $excludePins: Boolean
    $filterBy: [PostListFilterByInput!]
    $limit: Int!
    $offset: Int
    $orderBy: PostListOrderByEnum
    $orderByString: String
    $postTypeIds: [String!]
    $reverse: Boolean
    $spaceIds: [ID!]
    $query: String
  ) {
    posts(
      after: $after
      before: $before
      excludePins: $excludePins
      filterBy: $filterBy
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      orderByString: $orderByString
      postTypeIds: $postTypeIds
      reverse: $reverse
      spaceIds: $spaceIds
      query: $query
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        slug
        mappingFields {
          key
          type
          value
        }
        fields {
          key
          value
          relationEntities {
            __typename
            medias {
              __typename
              ... on Emoji {
                __typename
                id
                text
              }
              ... on File {
                __typename
                downloadUrl
                extension
                id
                name
                size
                url
              }
              ... on Image {
                __typename
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                dominantColorHex
                downloadUrl
                dpi
                height
                id
                name
                url
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
                width
              }
            }
            members {
              __typename
              bannerId
              blockedMemberIds
              createdAt
              displayName
              email
              emailStatus
              externalId
              externalUrl
              flagged
              id
              lastSeen
              lastSeenAt
              locale
              name
              networkId
              newEmail
              overrideTeammate
              profilePicture {
                __typename
                ... on Image {
                  __typename
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  dominantColorHex
                  downloadUrl
                  dpi
                  height
                  id
                  name
                  url
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                  width
                }
              }
              profilePictureId
              relativeUrl
              roleId
              score
              staffReasons
              status
              subscribersCount
              tagline
              teammate
              updatedAt
              url
              username
              verifiedAt
            }
            posts {
              __typename
              allowedEmojis
              allowedReactions
              attachmentIds
              createdAt
              createdById
              description
              embedIds
              externalId
              externalUrl
              followersCount
              forbiddenEmojis
              forbiddenReactions
              hasMoreContent
              id
              imageIds
              isAnonymous
              isHidden
              language
              lastActivityAt
              locked
              mentionedMembers
              negativeReactions
              negativeReactionsCount
              networkId
              ownerId
              pinnedInto
              positiveReactions
              positiveReactionsCount
              postTypeId
              primaryReactionType
              publishedAt
              reactionsCount
              relativeUrl
              repliedToId
              repliedToIds
              repliesCount
              shortContent
              singleChoiceReactions
              slug
              spaceId
              status
              subscribersCount
              tagIds
              textContent
              thumbnailId
              title
              topicIds
              totalRepliesCount
              updatedAt
              url
            }
            spaces {
              __typename
              bannerId
              createdAt
              createdById
              customOrderingIndexInGroup
              description
              externalId
              externalUrl
              groupId
              hidden
              highlightedTagIds
              id
              image {
                __typename
                ... on Emoji {
                  __typename
                  id
                  text
                }
                ... on Image {
                  __typename
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  dominantColorHex
                  downloadUrl
                  dpi
                  height
                  id
                  name
                  url
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                  width
                }
              }
              imageId
              inviteOnly
              isHomepage
              isNewUserHomepage
              isReturningUserHomepage
              key
              layout
              membersCount
              name
              networkId
              nonAdminsCanInvite
              postsCount
              private
              relativeUrl
              slug
              subscribersCount
              type
              updatedAt
              url
              whoCanPost
              whoCanReact
              whoCanReply
            }
            tags {
              __typename
              description
              id
              slug
              spaceId
              title
            }
          }
        }
        subscribersCount
        postTypeId
        reactionsCount
        hasMoreContent
        isAnonymous
        isHidden
        shortContent
        createdAt
        publishedAt
        ownerId
        createdById
        status
        spaceId
        imageIds
        pinnedInto
        repliesCount
        totalRepliesCount
        locked
        repliedToIds
        repliedToId
        title
        description
        textContent
        thumbnail {
          ... on Image {
            __typename
            id
            url
            width
            height
            dominantColorHex
            dpi
            cropHeight
            cropWidth
            cropX
            cropY
            cropZoom
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
        embedIds
        mentionedMembers
        primaryReactionType
        lastActivityAt
        language
        customSeoDetail {
          description
          noIndex
          thumbnail {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
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
          thumbnailId
          title
          canonicalUrl
        }
        relativeUrl
        url
        authMemberProps {
          context
          scopes
          subscribed
          permissions {
            name
            isAuthorized {
              authorized
              reason
              requiredPlan
            }
            inputPermissions {
              path
              isAuthorized {
                authorized
                reason
                requiredPlan
              }
            }
            outputPermissions {
              path
              isAuthorized {
                authorized
                reason
                requiredPlan
              }
            }
          }
          availableReplyTypes {
            __typename
            archived
            allowedEmojis
            context
            createdAt
            forbiddenEmojis
            id
            languageTemplate
            name
            description
            nativeFieldsTemplates {
              description
              thumbnailId
              title
            }
            negativeReactions
            pluralName
            positiveReactions
            primaryReactionType
            shortContentTemplate
            singleChoiceReactions
            allowedReactions
            customReactions {
              __typename
              activeColor
              activeGlyphId
              activeName
              color
              glyphId
              key
              name
            }
            slug
            titleTemplate
            updatedAt
            mappings {
              key
              field
              type
              title
              description
              required
              isMainContent
              isSearchable
              default
            }
          }
          canReact
        }
        owner {
          __typename
          member {
            displayName
            name
            id
            locale
            profilePictureId
            bannerId
            status
            username
            email
            emailStatus
            newEmail
            tagline
            lastSeenAt
            createdAt
            updatedAt
            relativeUrl
            url
            externalId
            roleId
            flagged
            teammate
            staffReasons
            profilePicture {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
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
            badges {
              backgroundColor
              badgeId
              imageId
              longDescription
              text
              shortDescription
              textColor
              type
              badge {
                active
                backgroundColor
                daysUntilExpired
                id
                imageId
                longDescription
                name
                shortDescription
                textColor
                text
                type
                settings {
                  key
                  value
                }
                image {
                  ... on Image {
                    __typename
                    id
                    url
                    width
                    height
                    dominantColorHex
                    dpi
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
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
          }
        }
        space {
          id
          networkId
          name
          description
          slug
          type
          layout
          isHomepage
          address {
            path
            exact
            editable
          }
          createdById
          groupId
          imageId
          bannerId
          membersCount
          createdAt
          updatedAt
          private
          hidden
          inviteOnly
          nonAdminsCanInvite
          customOrderingIndexInGroup
          whoCanPost
          whoCanReact
          whoCanReply
          customSeoDetail {
            description
            noIndex
            thumbnail {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
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
            thumbnailId
            title
          }
          relativeUrl
          url
          image {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
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
        reactions {
          count
          reacted
          reaction
        }
      }
    }
  }
`;

export default function Root() {
  const { data, loading, error } = useQuery(FILMS_QUERY, {
    variables: {
      limit: 10,
      spaceIds: ["7lPbkoH9yfem", "1tcjA4iSM3ZW", "CcW7RN7LVLb5"],
      orderByString: "publishedAt",
      reverse: true,
      filterBy: [],
    },
  });
  console.log(data, loading, error);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div id="sidebar">
        <div>
          <h1>SpaceX Launches</h1>
          <Button>Click me</Button>
          <ul>
            {data.posts.nodes.map((launch: any) => (
              <li key={launch.id}>{launch.title}</li>
            ))}
          </ul>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
