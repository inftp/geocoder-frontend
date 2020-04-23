import React, {useState} from 'react';
import {ApolloProvider} from 'react-apollo';
import './App.css';

import InputWithClearButton from './components/InputWithClearButton';
import SearchResults from './components/SearchResults';

function App() {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    // TODO: Geocode search
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
