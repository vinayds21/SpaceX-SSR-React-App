import React from 'react';
import ReactDom from 'react-dom';

import LaunchList from '../';


it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<LaunchList></LaunchList>,div)
})
