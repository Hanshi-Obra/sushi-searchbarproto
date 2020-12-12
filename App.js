import React from 'react';
import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import SearchEngine from './app/components/SearchEngine';

export default function App() {
  return (
    <Screen>
      <SearchEngine />
    </Screen>
  );
}


