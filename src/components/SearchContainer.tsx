import React, {useState} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {createClient} from '../lib/ApolloClient';

import InputWithClearButton from './InputWithClearButton';
import SearchResults from './SearchResults';

const SearchContainer = () => {
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
      <InputWithClearButton 
          onClear={() => console.log('clear')}
          onChange={(text: string) => handleSearchChange(text)}
          value={searchText}
        />
      <SearchResults searchText={searchReady ? searchText : ''} />
    </ApolloProvider>
  );
};

export default SearchContainer;