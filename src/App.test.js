import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {

  render(<App/>);
  const linkElement = screen.getByText('Landing Page will render here.');
  expect(linkElement).toBeInTheDocument();
});
