import React from 'react';
import { render, screen } from '@testing-library/react';
import PopupDataHeader from './PopupDataHeader';

it('has a value', () => {
  render(<PopupDataHeader value="This is the value" />);
  expect(screen.getByText("This is the value")).toBeInTheDocument();
});
