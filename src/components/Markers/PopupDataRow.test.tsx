import React from 'react';
import { render, screen } from '@testing-library/react';
import PopupDataRow from './PopupDataRow';

it('has a title', () => {
  render(<PopupDataRow title="My Title" value="This is the value" />);
  expect(screen.getByText("My Title:")).toBeInTheDocument();
});

it('has a value', () => {
  render(<PopupDataRow title="My Title" value="This is the value" />);
  expect(screen.getByText("This is the value")).toBeInTheDocument();
});