import React from 'react';
import Card from '../card';
import Result from '../result';
import  './style.css';

const LaunchList = ({ list }) => (
    <div className='list'>
        {
            list ?
            (
                list.length ? list.map((launch,i) => <Card launch={launch} key={`card${i}`} />)
                : <Result type='notfound' />
            ) :  <Result type='Loading' />
        }
    </div>
);

export default LaunchList;