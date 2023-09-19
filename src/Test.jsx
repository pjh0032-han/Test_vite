import React from 'react';

const Test = () => {
  const [num, setNum] = React.useState(0);

  return (
    <div>
      <p>This is Test Page</p>
      <p onClick={() => setNum(num +1)}>Count : {num}</p>
    </div>
  );

}

export default Test;