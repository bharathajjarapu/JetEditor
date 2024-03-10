import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('# Write your Markdown Here');
  const [darkMode, setDarkMode] = useState(true);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(markdown);
    // You can add a visual indication or feedback here if needed
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <button className="copy-button" onClick={handleCopyClick}>
        📋
      </button>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? '🌞' : '🌚'}
      </button>
      <div className="editor-preview-container">
        <div className="editor-container">
          <h2>Markdown Editor</h2>
          <textarea
            rows="15"
            value={markdown}
            onChange={handleInputChange}
            placeholder="Write your Markdown Here"
          />
        </div>
        <div className="preview-container">
          <h2>Markdown Preview</h2>
          <div className="markdown-preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;