const API_URL = process.env.WORDPRESS_API_URL;

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

export const getAllPostsForBlog = async (preview : boolean) => {
  const data = await fetchApi(
    `
        query AllPosts {
          posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
              nodes {
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
                    name
                    firstName
                    lastName
                    avatar {
                      url
                    }
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
