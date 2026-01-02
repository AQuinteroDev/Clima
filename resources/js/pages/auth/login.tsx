import React from 'react';

// Definición de tipos para las props
interface MyComponentProps {
  message: string;
  count?: number; // Prop opcional
}

// Componente funcional
const MyComponent: React.FC<MyComponentProps> = ({ message, count }) => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>{message}</h1>
      {count !== undefined && <p>Contador: {count}</p>}
    </div>
  );
};

export default MyComponent;
