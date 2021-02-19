import React from 'react';
import ReactDom from 'react-dom';
import Filters from '../';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Filters></Filters>,div)
})
