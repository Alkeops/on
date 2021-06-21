const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export const fetchApi = async (query: string, { variables }: any = {}) => {
  const headers = { "Content-Type": "application/json" };
  const response = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const { data, errors }: any = await response.json();
  if (errors) {
    console.log(errors);
    throw new Error("Failed to fetch API");
  }

  return data;
};
// TODO Only ssr
export const getAllPostsForBlog = async (preview: boolean, after?: string) => {
  const data = await fetchApi(
    `query AllPosts {
      posts(where: {orderby: {field: DATE, order: DESC}}, first: 10 ${
        after ? `, after : "${after}"` : ""
      }) {
        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }
        nodes {
          title
          excerpt(format: RENDERED)
          slug
          featuredImage {
            node {
              sourceUrl(size: POST_THUMBNAIL)
            }
          }
        }
      }
    }
       `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );
  return data?.posts;
};

export const getAllPostsWithSlug = async () => {
  const data = await fetchApi(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
};

export const getPostAndMorePosts = async (slug, preview, previewData) => {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post 

  const isId :boolean= Number.isInteger(Number(slug));
 
  const isSamePost :boolean = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;  
  const isDraft: boolean = isSamePost && postPreview?.status === "draft";
  const isRevision : boolean = isSamePost && postPreview?.status === "publish";console.log({isRevision})
  const data = await fetchApi(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
};
