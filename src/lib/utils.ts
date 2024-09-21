import { gql } from "@apollo/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPosts() {
  return gql`
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
                  status
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
                  status
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
                    status
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
                timeZone
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
                    status
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
          attachments {
            extension
            id
            name
            size
            url
            downloadUrl
          }
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
            participants(limit: 10) {
              nodes {
                participant {
                  id
                  name
                }
              }
            }
          }
          replies(limit: 2, reverse: true) {
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
                      status
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
                      status
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
                        status
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
                    timeZone
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
                        status
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
              attachments {
                extension
                id
                name
                size
                url
                downloadUrl
              }
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
              embeds {
                author
                author_url
                description
                html
                id
                provider_name
                thumbnail_height
                thumbnail_url
                thumbnail_width
                title
                type
                url
              }
              mentions {
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
            pageInfo {
              endCursor
              hasNextPage
            }
            totalCount
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
                status
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
                status
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
                  status
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
              timeZone
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
                  status
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
        attachments {
          extension
          id
          name
          size
          url
          downloadUrl
        }
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
        postType {
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
          postFields {
            __typename
            fields {
              default
              description
              externalKeys
              key
              name
              archived
              readPrivacy {
                allow
              }
              required
              searchable
              settings {
                key
                value
              }
              type
              typeOptions {
                dateType
                numberType
                relationType
                richTextType
                textType
              }
              validators {
                customErrorMessage
                validation
                value
              }
              writePrivacy {
                allow
              }
              items {
                description
                key
                name
                required
                type
                typeOptions {
                  dateType
                  numberType
                  relationType
                  richTextType
                  textType
                }
                validators {
                  customErrorMessage
                  validation
                  value
                }
              }
              properties {
                description
                key
                name
                required
                type
                typeOptions {
                  dateType
                  numberType
                  relationType
                  richTextType
                  textType
                }
                validators {
                  customErrorMessage
                  validation
                  value
                }
                items {
                  description
                  key
                  name
                  required
                  type
                  typeOptions {
                    dateType
                    numberType
                    relationType
                    richTextType
                    textType
                  }
                  validators {
                    customErrorMessage
                    validation
                    value
                  }
                }
                properties {
                  description
                  key
                  name
                  required
                  type
                  typeOptions {
                    dateType
                    numberType
                    relationType
                    richTextType
                    textType
                  }
                  validators {
                    customErrorMessage
                    validation
                    value
                  }
                }
              }
            }
          }
          validReplyTypes {
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
            slate {
              rootBlock
              blocks {
                id
                name
                props
                extraProps
                children
                output
              }
              restrictions {
                nonEditableBlocks
                lockedChildrenBlocks
                nonRemovableBlocks
              }
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
            postFields {
              __typename
            }
            icon {
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
            validReplyTypes {
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
            authMemberProps {
              context
              scopes
            }
          }
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
        tags {
          description
          id
          slug
          title
        }
        embeds {
          author
          author_url
          description
          html
          id
          provider_name
          thumbnail_height
          thumbnail_url
          thumbnail_width
          title
          type
          url
        }
        mentions {
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
          postsCount
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
          banner {
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
          highlightedTags {
            description
            id
            slug
            title
          }
          collection {
            id
            slug
            name
            description
            createdAt
            relativeUrl
            url
          }
          authMemberProps {
            context
            lastReadAt
            membershipStatus
            scopes
            unreadPostsCount
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
            availablePostTypes {
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
          }
          slate {
            rootBlock
            blocks {
              id
              name
              props
              extraProps
              children
              output
            }
            restrictions {
              nonEditableBlocks
              lockedChildrenBlocks
              nonRemovableBlocks
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
        replies(limit: 2, reverse: true) {
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
                    status
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
                    status
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
                      status
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
                  timeZone
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
                      status
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
            attachments {
              extension
              id
              name
              size
              url
              downloadUrl
            }
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
            embeds {
              author
              author_url
              description
              html
              id
              provider_name
              thumbnail_height
              thumbnail_url
              thumbnail_width
              title
              type
              url
            }
            mentions {
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
          pageInfo {
            endCursor
            hasNextPage
          }
          totalCount
        }
        repliedTos {
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
                  status
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
                  status
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
                    status
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
                timeZone
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
                    status
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
            }
            role {
              id
              name
              type
              description
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
            }
          }
        }
        pinnedReplies {
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
                  status
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
                  status
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
                    status
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
                timeZone
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
                    status
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
          attachments {
            extension
            id
            name
            size
            url
            downloadUrl
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
          embeds {
            author
            author_url
            description
            html
            id
            provider_name
            thumbnail_height
            thumbnail_url
            thumbnail_width
            title
            type
            url
          }
          mentions {
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
          }
        }
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
