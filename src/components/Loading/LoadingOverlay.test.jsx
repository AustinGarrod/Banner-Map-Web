import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingOverlay from './LoadingOverlay';
import LoadingPoppy from '../../assets/poppy_loader.svg';

it('loads svg image', () => {
  render(<LoadingOverlay 
            icon={LoadingPoppy} 
            iconSize={[100, 100]} 
            text="This is my header"
            subtext="This is my subtext" />);
  const loadingIconImage = screen.getByAltText("Loading Icon");
  expect(loadingIconImage).toBeInTheDocument();
});

it('has a header', () => {
  render(<LoadingOverlay 
            icon={LoadingPoppy} 
            iconSize={[100, 100]} 
            text="This is my header"
            subtext="This is my subtext" />);
  expect(screen.getByText("This is my header")).toBeInTheDocument();
});

it('has subtext', () => {
  render(<LoadingOverlay 
            icon={LoadingPoppy} 
            iconSize={[100, 100]} 
            text="This is my header"
            subtext="This is my subtext" />);
  expect(screen.getByText("This is my subtext")).toBeInTheDocument();
});