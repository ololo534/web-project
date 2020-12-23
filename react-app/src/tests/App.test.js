import {render, screen} from '@testing-library/react';
import App from '../App';
import {BrowserRouter} from "react-router-dom";
import React from "react";

test('renders learn react link', () => {
  render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
  const linkElement = screen.getByText('ToDo List');
  expect(linkElement).toBeInTheDocument();
});
