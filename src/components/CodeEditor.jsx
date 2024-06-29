import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const applySyntaxHighlighting = (code) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  };

  return (
      <div className="code-editor-container">

        <textarea
          className="code-input"
          value={code}
          onChange={handleCodeChange}
          spellCheck="false"
          autoComplete="on"
          autoCapitalize="off"
          autoCorrect="on"
          placeholder="Type your code here..."
        />

        <pre
          className="code-display"
          dangerouslySetInnerHTML={{ __html: applySyntaxHighlighting(code) }}
        />
      </div>
  );
};

export default CodeEditor;
