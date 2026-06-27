// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HashZone title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HashZone/i);
    expect(titleElement).toBeInTheDocument();
});
