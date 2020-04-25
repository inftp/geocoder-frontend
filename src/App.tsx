import React, {useState} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import './App.css';
import {createClient} from './lib/ApolloClient';

import InputWithClearButton from './components/InputWithClearButton';
import SearchResults from './components/SearchResults';

function App() {
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
      <div className="App">
        <header className="App-header">
          <InputWithClearButton
              onClear={() => console.log('clear')}
              onChange={(text) => handleSearchChange(text)}
              value={searchText}
            />
          {
            searchReady && !!(searchText) && (
              <SearchResults searchText={searchText} />
            )
          }
        </header>
      </div>
    </ApolloProvider>

  );
}

export default App;
