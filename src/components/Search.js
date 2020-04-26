import React from 'react';

export default function Search ({ handleInput, search }) {
  return (
    <section className="searchBox-wrap">
      <input 
        type="text" 
        placeholder="Search for a movie..." 
        className="searchBox" 
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}
