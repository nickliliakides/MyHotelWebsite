import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '@/app/_components/TextInput';
import TextArea from '@/app/_components/TextArea';

describe('Contact form text inputs tests', () => {
  beforeEach(() => {
    render(<TextInput label='Test' name='test' type='text' />);
  });
  it('text input label is displayed as expected', () => {
    const labelElement = screen.getByLabelText(/test/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('should be able to type into input', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'TestingText' } });
    expect(inputElement.value).toBe('TestingText');
  });
});

describe('Contact form text area tests', () => {
  beforeEach(() => {
    render(<TextArea label='Test' name='test' rows='3' />);
  });
  it('text area label is displayed as expected', () => {
    const labelElement = screen.getByLabelText(/test/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('should be able to type into area', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'TestingText' } });
    expect(inputElement.value).toBe('TestingText');
  });
});
