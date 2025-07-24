import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, label }: { onClick: () => void, label: string }) => {
  console.log(`🔘 Rendering: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // 빈 배열이므로 최초 1번만 생성됨

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} label="Increment" />
    </div>
  );
}