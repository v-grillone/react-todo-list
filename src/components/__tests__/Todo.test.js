import { render, screen , cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Todo from '../Todo';

afterEach(() => {
    cleanup();
})

test('Should render non-completed todos', () => {
    const todo = {id: 1, title: 'Gym', completed: false};
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('GYM');
    expect(todoElement).not.toContainHTML('<strike>');
});

test('Should render completed todos', () => {
    const todo = {id: 2, title: 'Homework', completed: true};
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('HOMEWORK');
    expect(todoElement).toContainHTML('strike');
});

test('matches snapshot', () => {
    const todo = {id: 1, title: 'Gym', completed: false};
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
})