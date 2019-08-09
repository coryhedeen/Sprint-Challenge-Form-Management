import React from 'react';
import FormikLogin from './Form';
import LoginForm from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('<FormikLogin/>', () => {
  it('renders without crashing', () => {
    const login = render(<FormikLogin />)
  })
  it('fires', () => {
    const click = jest.fn();
    const { getByText } = render(<LoginForm/>)
    const button = getByText(/^submit$/i);
    fireEvent.click(button);
    expect(click).toBeCalled();
  })
})
