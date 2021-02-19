import React from 'react';
import ReactDom from 'react-dom';

import Result from '../';

import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer'

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Result></Result>,div)
})

it("renders state correctly",() => {
    const {getByTestId} = render(<Result type='loading' />)
    expect(getByTestId('app-status')).toHaveTextContent('Loading...')
})

it("matches snapshot", () => {
    const tree = renderer.create(<Result type='loading'></Result>).toJSON();
    expect(tree).toMatchSnapshot();
})