import { render, screen } from '@testing-library/react';
import DateSelector, { isAlreadyBooked } from '@/app/_components/DateSelector';
import { ReservationProvider } from '@/app/_context/ReservationContext';
import {
  dates,
  range,
  rangeOut,
  room,
  settings,
} from '@/__tests__/__Mocks__/data';

describe('DateSelector component tests with no discount', () => {
  const { container } = render(
    <ReservationProvider>
      <DateSelector room={room} bookedDates={dates} settings={settings} />
    </ReservationProvider>
  );
  test('DateSelector after passing correct room, booked dates and settings data to be rendered in the document', () => {
    expect(container.getElementsByClassName('rdp-multiple_months').length).toBe(
      1
    );
    expect(container.getElementsByClassName('price-display').length).toBe(1);
  });

  test('isAlreadyBooked function to work correctly when passed range contained and not contained in booking dates', () => {
    const result = isAlreadyBooked(range, dates);
    const resultOutOfRange = isAlreadyBooked(rangeOut, dates);
    expect(result).toBe(true);
    expect(resultOutOfRange).toBe(false);
  });

  test('Is price displayed correctly when no discount', () => {
    expect(container.getElementsByClassName('line-through').length).toBe(0);
  });

  test('Number of nights is not displayed', () => {
    expect(container.getElementsByClassName('line-through').length).toBe(0);
  });

  test('Number of nights are not displayed when range is not selected', () => {
    const status = screen.queryByTestId('reservation-status');

    expect(status).toBeNull();
  });
});
