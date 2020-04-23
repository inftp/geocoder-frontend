import React, {useState} from 'react';
import {ApolloProvider} from 'react-apollo';
import './App.css';
import {createClient} from './lib/ApolloClient';
import Users from './Users';

import InputWithClearButton from './components/InputWithClearButton';
import SearchResults from './components/SearchResults';

function App() {
  const client = createClient();

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    // TODO: Geocode search
  }

  return (
    <ApolloProvider client={client}>
      {/* <div className="App">
        <header className="App-header">
          <InputWithClearButton
              onClear={() => console.log('clear')}
              onChange={(text) => handleSearchChange(text)}
              value={searchText}
            />
          {
            searchResults.length && (
              <SearchResults />
            )
          }
        </header>
      </div> */}
      <Users />
    </ApolloProvider>

  );
}

export default App;
