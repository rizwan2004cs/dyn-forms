import { render, screen, fireEvent } from '@testing-library/react';
import JSONEditor from '../JSONEditor';
import { act } from 'react'; // Use this


test('displays error message for invalid JSON', () => {
  render(<JSONEditor schema={{}} setSchema={() => {}} />);

  const textarea = screen.getByRole('textbox');
  fireEvent.change(textarea, { target: { value: '{ invalid json' } });

  expect(screen.getByText('Invalid JSON')).toBeInTheDocument();
});
