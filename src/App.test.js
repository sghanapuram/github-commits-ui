import { render, screen } from '@testing-library/react';
import App from './App';

// FIX ME: mock asynchronous call in try catch block

let container;

test('renders github commit ui', () => {
    container = render(<App />);
    expect(container).toMatchSnapshot();
});

test('renders github commit ui header', () => {
    container = render(<App />);
    const header = screen.getByText('Commit Feed');
    expect(header).toBeInTheDocument();
});


