import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});


// export default function App() {
//   const texts = ["hello", "world"].map((text, index) => (
//     <p key={index} children={text} />
//   ));
//   return <div children={texts} />;
// }

export default function App() {
  return (
    <div>
      <EventListner />
    </div>
  );
}

