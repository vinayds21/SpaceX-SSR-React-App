import React from 'react';
import SingleVehicleCard from '../SingleVehicleCard';
import VehicleResult from '../VehicleResult';
import  './style.css';

const LaunchData = ({ list }) => (
    <div className='list'>
        {
            list ?
            (
                list.length ?
                    list.map((launch,i) => 
                        <SingleVehicleCard
                            launch={launch}
                            key={`card${i}`}
                        />
                )
                : <VehicleResult type='notfound' />
            ) :  <VehicleResult type='Loading' />
        }
    </div>
);

export default LaunchData;