import React from 'react';
import { render } from '@testing-library/react';
import Calculators from './Calculator';

describe('Calculators App', () => {
  it('should have a length of 1', () => {
    const { container } = render(<Calculators />);
    expect(container.querySelectorAll('.App')).toHaveLength(1);
  });
});
