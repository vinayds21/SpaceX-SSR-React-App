import React from 'react';
import './style.css';

const Result = ({ type }) => (
    <div  className='result'>
        <div className='text' data-testid='app-status' >
            { type === 'Loading' ? 'Fetching Data...' : 'No Results Found'}
        </div>
    </div>
);

export default Result;