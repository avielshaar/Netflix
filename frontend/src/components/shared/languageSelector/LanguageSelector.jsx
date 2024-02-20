import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en-IL'); // Default selected language

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <select
      id="1c250a65fd3ff"
      name="LanguageSelect"
     
      value={selectedLanguage}
      onChange={handleLanguageChange}
    >
      <option lang="he" value="he-IL">
        עברית
      </option>
      <option lang="en" value="en-IL">
        English
      </option>
    </select>
  );
};

export default LanguageSelector;
