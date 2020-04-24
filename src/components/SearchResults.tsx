import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query, QueryResult } from 'react-apollo';

const SearchResultsPropTypes = {
  searchText: PropTypes.string.isRequired,
}

const SearchResults = (
    { searchText }: PropTypes.InferProps<typeof SearchResultsPropTypes>
  ): ReactElement => {

  const GET_ADDRESSES = `{
      locations(address: "${searchText}") {
          address
          lat
          lng
      }
    }`;

  return (
    <div className="search-results">
      <Query query={gql(GET_ADDRESSES)}>
        {({ loading, error, data}: QueryResult) => {
          if (loading) return (
            <i className="fas fa-spinner"></i>
          );
          if (error) return (
            <div>
              {`Error: ${error.message}`}
            </div>
          );
          return data.locations.map((location: {address: string}) => (
            <div className="search-result" key={location.address}>
              {location.address}
            </div>
          ));
        }}
      </Query>
    </div>
  )
}

SearchResults.propTypes = SearchResultsPropTypes;

export default SearchResults;