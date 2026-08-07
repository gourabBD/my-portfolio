import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hi, I.m Gourab Roy/i);
  expect(headingElement).toBeInTheDocument();
});
