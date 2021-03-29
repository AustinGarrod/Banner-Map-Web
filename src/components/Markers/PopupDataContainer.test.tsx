import React from 'react';
import { render, screen } from '@testing-library/react';
import PopupDataContainer from './PopupDataContainer';
import TEST_VALUES from '../../config/testValues';

it('has banner name', () => {
  render(<PopupDataContainer banner={TEST_VALUES.banner} />);
  expect(screen.getByText(TEST_VALUES.banner.bannerName)).toBeInTheDocument();
});

it('has branch', () => {
  render(<PopupDataContainer banner={TEST_VALUES.banner} />);
  expect(screen.getByText("Branch:")).toBeInTheDocument();
  expect(screen.getByText(TEST_VALUES.banner.branch)).toBeInTheDocument();
});

it('has era', () => {
  render(<PopupDataContainer banner={TEST_VALUES.banner} />);
  expect(screen.getByText("Era:")).toBeInTheDocument();
  expect(screen.getByText(TEST_VALUES.banner.era)).toBeInTheDocument();
});