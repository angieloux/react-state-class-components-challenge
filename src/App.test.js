import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('shows all songs on load', () => {
  const { getByTestId } = render(<App />);
  const songs = getByTestId("app").getElementsByTagName("p");

  expect(songs).toHaveLength(7);
});

test('shows filters songs on search', () => {
  const { getByRole, getByTestId } = render(<App />);
  userEvent.type(getByRole("textbox"), "Hotel");

  expect(getByTestId("app")).toHaveTextContent("Hotel California")
});

test('shows multiple matches on search', () => {
  const { getByRole, getByTestId } = render(<App />);
  userEvent.type(getByRole("textbox"), "d");

  expect(getByTestId("app")).toHaveTextContent("Single Ladies");
  expect(getByTestId("app")).toHaveTextContent("Run the World");
});
