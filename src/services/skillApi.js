import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.PUBLIC_GRAPHCMS_ENDPOINT;

export const getSkills = async () => {
    const query = gql`
        query GetSkills {
            skills {
                title
                bgColor
                icon {
                    url
                }
            }
        }
    `
  
    const result = await request('https://api-eu-central-1.hygraph.com/v2/cl6nd7ub21a0g01uj9obf5ada/master', query);
    return result.skills;
};
  