import React, { useState, useEffect } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

const languages = [
  'English', 'Deutsch', 'Français', 'Español', 'Italiano', '日本語', 'Português', 'Svenska'
];

const Settings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'English';
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="p-4 w-full bg-[#2C3E50]">
      <h2 className="text-xl font-semibold text-[#F0F0F0] mb-4">Select Your Language</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {languages.map((language) => (
          <button
            key={language}
            className="flex items-center space-x-2 p-2 border rounded-lg w-full text-white hover:bg-[#1B3A57]"
            onClick={() => selectLanguage(language)}
          >
            {selectedLanguage === language ? (
              <FaCheckSquare className="text-[#A4C8E1]" />
            ) : (
              <FaRegSquare className="text-[#F0F0F0]" />
            )}
            <span>{language}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Settings;