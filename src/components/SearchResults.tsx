import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import '@fortawesome/fontawesome-free/css/all.css';


import InferProps from '../types/InferProps';

const SearchResultsPropTypes = {
  searchText: PropTypes.string.isRequired,
  selection: PropTypes.func.isRequired,
}

const SearchResults = (
    { searchText, selection }: InferProps<typeof SearchResultsPropTypes>
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
          <div 
            className="search-result"
            role="button"
            key={location.address}
            onClick={() => selection(location)}
          >
            {location.address}
          </div>
        ))
      }
    </div>
  )
}

SearchResults.propTypes = SearchResultsPropTypes;

export default SearchResults;