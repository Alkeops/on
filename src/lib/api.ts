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
      posts(where: {orderby: {field: DATE, order: DESC}}, first: 10 ${after ? `, after : "${after}"` : ""}) {
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
