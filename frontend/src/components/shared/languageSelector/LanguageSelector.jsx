import React, { useState } from 'react';
import "./LanguageSelector.scss"

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en-IL'); // Default selected language

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <select
      id="1c250a65fd3ff"
      name="LanguageSelect"
      className='selectz'
      data-uia="language-picker-header"
      value={selectedLanguage}
      onChange={handleLanguageChange}
    >
      <option lang="he" label="עברית" value="he-IL">
        עברית
      </option>
      <option lang="en" label="English" value="en-IL">
        English
      </option>
    </select>
  );
};

export default LanguageSelector;
