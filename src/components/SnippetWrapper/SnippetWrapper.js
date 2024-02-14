'use client';

import React from 'react';

function SnippetWrapper({children}) {
  const [
    visible,
    setVisible,
  ] = React.useState(false);

  return (
    <>
    {visible ? children: <div className="reveal">
          <button
            onClick={() =>
              setVisible(true)
            }
          >
            Reveal Content
          </button>
        </div>}
    </>
  );
}

export default SnippetWrapper;
