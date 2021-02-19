import React from  'react';
import  './filter.css';

const Filters = ({ config, setYear, setLaunch, setLand }) => {
    let years =[
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020'
    ];
    return (
        <div className='filterSections'>
            <div className='filterLabel'>Filters</div>
            <section className='filter'>
                <label>Launch Year</label>
                <div className='options'>
                    {
                        years.map ((year,i) => <div onClick={()=> setYear(year)} key={`year${i}`}>
                            <span className={ config.year  === year ? 'active' : ''}>{ year }</span>
                        </div>)
                    }
                </div>
            </section>
            <section className='filter'>
                <label>Successfull Launch</label>
                <div className='options'>
                    <div onClick={()=>setLaunch('true')}>
                        <span className={ config.launch  === 'true' ? 'active' : ''} >True </span>
                    </div>
                    <div onClick={()=>setLaunch('false')}>
                        <span className={ config.launch  === 'false' ? 'active' : ''} >False</span>
                    </div>
                </div>
            </section>
            <section className='filter'>
                <label>Successfull Landing</label>
                <div className='options'>
                    <div onClick={()=>setLand('true')}>
                        <span className={ config.land  === 'true' ? 'active' : ''} >True </span>
                    </div>
                    <div onClick={()=>setLand('false')}>
                        <span className={ config.land  === 'false' ? 'active' : ''} >False</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Filters;