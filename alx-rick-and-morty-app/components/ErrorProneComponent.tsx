// components/ErrorProneComponent.tsx
import { useState } from 'react';

interface ErrorProneComponentProps {
  shouldThrow?: boolean;
}

const ErrorProneComponent: React.FC<ErrorProneComponentProps> = ({ 
  shouldThrow = true 
}) => {
  const [clicked, setClicked] = useState(false);
  
  if (shouldThrow || clicked) {
    throw new Error('This is a test error from ErrorProneComponent!');
  }

  return (
    <div style={{ padding: '20px', border: '2px solid red', margin: '10px' }}>
      <h3>Error Test Component</h3>
      <p>This component will throw an error when the button is clicked.</p>
      <button onClick={() => setClicked(true)}>
        Click to trigger error
      </button>
    </div>
  );
};

export default ErrorProneComponent;
