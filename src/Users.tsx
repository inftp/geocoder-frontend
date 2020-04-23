import gql from "graphql-tag";
import React from "react";
import { Query, QueryResult } from "react-apollo";

function Users() {
  const LIST_USERS = gql`
    {
      listUsers {
        id
        name
        email
      }
    }
  `;

  return (
    <div>
      <h1>Users!</h1>
      <Query query={LIST_USERS}>
        {({ loading, error, data }: QueryResult) => {
          if (loading) return (
            <div>
              {'Loading...'}
            </div>
          );
          if (error) return (
            <div>
              {`Error! ${error.message}`}
            </div>
          );

          return (
            <ul>
              {data.listUsers.map((user: {id: string, name: string, email: string})  => (
                <li key={user.id}>
                  {user.name}: {user.email}
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
      </div>
    );
  }
  export default Users;