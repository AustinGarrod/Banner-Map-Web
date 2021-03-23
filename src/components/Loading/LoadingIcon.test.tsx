import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingIcon from './LoadingIcon';
import LoadingPoppy from '../../assets/poppy_loader.svg';

it('loads svg image', () => {
  render(<LoadingIcon icon={LoadingPoppy} width={150} height={150} />);
  const loadingIconImage = screen.getByAltText("Loading Icon");
  expect(loadingIconImage).toBeInTheDocument();
});