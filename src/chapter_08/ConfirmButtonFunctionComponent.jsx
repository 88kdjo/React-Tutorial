import { useState } from 'react';

// function component

const ConfirmButtonFunctionComponent = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed( (prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {
        isConfirmed ? '확인됨' : '확인하기'
      }
    </button>
  );

}

export default ConfirmButtonFunctionComponent;