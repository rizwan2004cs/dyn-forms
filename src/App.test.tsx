import { render, screen } from '@testing-library/react'; // Add this import
import App from './App'; // Ensure App is correctly imported

test('renders form with schema data', () => {
  render(<App />);

  // Use getByRole to target the h1 tag for the form title
  const formTitle = screen.getByRole('heading', { name: /Project Requirements Survey/i });

  // Use getByText to target the <p> element for the form description
  const formDescription = screen.getByText(/Please fill out this survey about your project needs/i, { selector: 'p' });

  expect(formTitle).toBeInTheDocument();
  expect(formDescription).toBeInTheDocument();

  // Check if input fields are rendered correctly
  const nameInput = screen.getByPlaceholderText(/Enter your full name/i);
  const emailInput = screen.getByPlaceholderText(/you@example.com/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  // Check if the submit button is rendered
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});
