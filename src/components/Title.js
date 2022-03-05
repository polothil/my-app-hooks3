import React from 'react';

function Title() {
  console.log('Rendering Title');
  return (
    <div>
      <br />
      <strong>Using useCallback Hook</strong>
    </div>
  );
}

export default React.memo(Title);
