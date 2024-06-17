import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';

test('About page displays correct headings, images and link to rooms', () => {
  render(<AboutPage />);

  const heading1 = screen.getByRole('heading', {
    name: 'Welcome to MyHotel',
  });

  expect(heading1).toBeInTheDocument();

  const heading2 = screen.getByRole('heading', {
    name: 'Managed by our family since 1962',
  });

  expect(heading2).toBeInTheDocument();

  const image1 = screen.getByRole('img', {
    name: 'London bridge image',
  });

  expect(image1).toBeInTheDocument();

  const image2 = screen.getByRole('img', {
    name: 'Retro picture of MyHotel',
  });

  expect(image2).toBeInTheDocument();

  const link = screen.getByRole('link', {
    name: 'Explore our luxury studios',
  });

  expect(link).toBeInTheDocument();
});
