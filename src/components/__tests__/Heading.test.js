import { render, screen , cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from '../Heading';

test('Should render heading', () => {
    render(<Heading/>);
    const headingElement = screen.getByTestId('heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('React Todo List');
})