import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

test('Home page displays correct heading, image and link to rooms', () => {
  render(<HomePage />);

  const heading = screen.getByRole('heading', {
    name: 'Welcome to MyHotel',
  });

  expect(heading).toBeInTheDocument();

  const image = screen.getByRole('img', {
    name: 'MyHotel luxurious lobby',
  });

  expect(image).toBeInTheDocument();

  const link = screen.getByRole('link', {
    name: 'Book a room',
  });

  expect(link).toBeInTheDocument();
});
