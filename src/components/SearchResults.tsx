import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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

  const { loading, error, data} = useQuery(gql(GET_ADDRESSES));

  if (loading) return (
    <i className="fas fa-spinner"></i>
  );

  if (error) return (
    <div>
      {`Error: ${error.message}`}
    </div>
  );

  return (
    <div className="search-results">
      {
      !!(searchText) && 
      Array.isArray(data.locations) &&
        data.locations.slice(0,5).map((location: {address: string}) => (
          <div className="search-result" key={location.address}>
            {location.address}
          </div>
        ))
      }
    </div>
  )
}

SearchResults.propTypes = SearchResultsPropTypes;

export default SearchResults;