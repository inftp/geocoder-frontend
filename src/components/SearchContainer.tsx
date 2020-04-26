import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ApolloProvider} from '@apollo/react-hooks';
import {createClient} from '../lib/ApolloClient';

import InferProps from '../types/InferProps';

import InputWithClearButton from './InputWithClearButton';
import SearchResults from './SearchResults';

const SearchContainerPropTypes = {
  selection: PropTypes.func.isRequired,
}

const SearchContainer = ({selection}: InferProps<typeof SearchContainerPropTypes>) => {
  const client = createClient();

  const [searchText, setSearchText] = useState('');
  const [searchReady, setSearchReady] = useState(false);

  const handleSearchChange = (text: string) => {
    setTimeout(() => {
      setSearchReady(true);
    }, 750);
    setSearchReady(false);
    setSearchText(text);
  }

  return (
    <ApolloProvider client={client}>
      <div className="search-container">
        <InputWithClearButton 
            onClear={() => console.log('clear')}
            onChange={(text: string) => handleSearchChange(text)}
            value={searchText}
          />
        <SearchResults searchText={searchReady ? searchText : ''} selection={selection} />
      </div>
    </ApolloProvider>
  );
};

SearchContainer.propTypes = SearchContainerPropTypes;

export default SearchContainer;