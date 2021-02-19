import React from 'react';
import './style.css';

const SingleVehicleCard = ({ launch }) => (
    <div className='card'>
        <div className='body'>
            <div className='img'>
                <img src={launch.links.mission_patch_small} alt={launch.mission_name} />
            </div>
            <label className='label'>
                { `${launch.mission_name} #${launch.flight_number}` }
            </label>
            <div className='missions'>
                <strong>
                    Mission ID:{' '}
                </strong>
                {
                    launch.mission_id.length ?  
                    <span>{launch.mission_id.map( (id,i) => (id))}</span> :
                    <span> NA</span>
                }
            </div>
            <div>
                <strong>Launch Year:{' '}</strong>
                <span>{launch.launch_year}</span>
            </div>
            <div>
                <strong>Successful Launch:{' '}</strong> 
                <span>{launch.launch_success ? 'true' : 'false'}</span>
            </div>
            <div>
                <strong>Successful Landing:{' '}</strong> 
                <span>{ launch.rocket.first_stage.cores[0].land_success ? 'true' : 'false'}</span>
            </div>
        </div>
    </div>
)

export default SingleVehicleCard;