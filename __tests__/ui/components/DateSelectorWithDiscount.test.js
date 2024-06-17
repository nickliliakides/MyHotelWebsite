import { render, screen } from '@testing-library/react';
import DateSelector from '@/app/_components/DateSelector';
import { ReservationProvider } from '@/app/_context/ReservationContext';
import { dates, room, settings } from '@/__tests__/__Mocks__/data';

describe('DateSelector component tests with no discount', () => {
  const { container } = render(
    <ReservationProvider>
      <DateSelector
        room={{ ...room, discount: 100 }}
        bookedDates={dates}
        settings={settings}
      />
    </ReservationProvider>
  );

  test('Is price displayed correctly when there is discount', () => {
    expect(container.getElementsByClassName('line-through').length).toBe(1);
  });
});
