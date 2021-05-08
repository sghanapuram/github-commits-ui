import { render, screen } from '@testing-library/react';
import DisplayCommitFeed from './DisplayCommitFeed';

const response =  [
    {
      commit: {
        author: {
          date: '05-07-2021',
          name: 'name'
        },
        message: 'test'
      },
      html_url: 'test_url'
    }
];

let container;

test('renders Commit feed table', () => {
    container = render(<DisplayCommitFeed data={ response } />);
    expect(container).toMatchSnapshot();
});

test('renders commits table header', () => {
    container = render(<DisplayCommitFeed data={ response } />);
    const timestamp = screen.getByText('Timestamp');
    const message = screen.getByText('Commit');
    const author = screen.getByText('Author');
    expect(timestamp).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});


test('renders commits table data', () => {
    container = render(<DisplayCommitFeed data={ response } />);
    const timestamp = screen.getByText('05-07-2021');
    const message = screen.getByText('test');
    const author = screen.getByText('name');
    expect(timestamp).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

