import { render, screen , cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import TaskAdd from '../TaskAdd';

afterEach(() => {
    cleanup();
})

test('Should render task add and updated list', () => {
    render(<TaskAdd/>);
    const taskAddElement = screen.getByTestId('task-add');
    expect(taskAddElement).toBeInTheDocument();
});

test('matches TaskAdd snapshot', () => {
    const tree2 = renderer.create(<TaskAdd/>).toJSON();
    expect(tree2).toMatchSnapshot();
})