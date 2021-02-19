import React from 'react';
import ReactDom from 'react-dom';
import LaunchData from '../';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<LaunchData></LaunchData>,div)
})
