import React from 'react';
import FormikLogin from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('<FormikLogin/>', () => {
  it('renders without crashing', () => {
    const login = render(<FormikLogin />)
  })
})
