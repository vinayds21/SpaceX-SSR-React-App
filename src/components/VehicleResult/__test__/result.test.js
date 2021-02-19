import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer'
import VehicleResult from '../';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<VehicleResult></VehicleResult>,div)
})

it("renders state correctly",() => {
    const {getByTestId} = render(<VehicleResult type='loading' />)
    expect(getByTestId('app-status')).toHaveTextContent('Loading...')
})

it("matches snapshot", () => {
    const tree = renderer.create(<VehicleResult type='loading'></Result>).toJSON();
    expect(tree).toMatchSnapshot();
})