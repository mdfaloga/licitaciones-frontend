import React, { useState } from 'react';

const SearchPanel = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword.trim()) {
      alert("Debes ingresar al menos una palabra clave.");
      return;
    }
    onSearch({ keyword, startDate, endDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Palabra clave"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchPanel;