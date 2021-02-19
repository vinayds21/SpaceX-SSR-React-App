import React from 'react';
import LaunchData from './components/LaunchData';
import Filters from './components/filters';
import './App.css';

const API_HOST ='https://api.spacexdata.com/v3';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        year: '',
        launch: '',
        land: '',
        list: this.props.list,
        count:100
    }
  }

  componentDidMount() {
    if(window){
      if(window.localStorage.configuration){
        let temp = JSON.parse(window.localStorage.configuration)
        this.setState({...temp},this.filter)
      }
    }
  }

  componentDidUpdate(){
    this.updateLocalstorage();
  }

  filter = async ( year = this.state.year, launch = this.state.launch, land = this.state.land ) => {
    const { count } = this.state;
    let res = await fetch(`${API_HOST}/launches?limit=${count}&launch_success=${launch}&land_success=${land}&launch_year=${year}`);
    res = await res.json();
    this.setState({ list: res });
  }

  changeYear = (year) => {
    const { launch, land } = this.state;
    this.setState({list:null})
    year = year === this.state.year ? '' : year;
    this.setState({ year });
    this.filter(year, launch, land);
  }

  changeLaunchFilter = (launch) => {
    const { year, land } = this.state;
    this.setState({ list: null })
    launch = launch === this.state.launch ? '' : launch;
    this.setState({ launch })
    this.filter(year, launch, land);
  }

  changeLandingFilter = (land) => {
    const { year, launch } = this.state;
    this.setState({ list: null })
    land = land === this.state.land ? '' : land;
    this.setState({ land })
    this.filter(year, launch, land);
  }

  updateLocalstorage = () => {
    const { year, launch, land } = this.state
    if(window){
      let temp = JSON.stringify({year, launch, land});
      window.localStorage.setItem('configuration', temp)
    }
  }

  render() {
    const { year, list } = this.state;
    return (
      <div className="App">
        <h3 className="left">SpaceX Launch Programs</h3>
        <div className='container'>
          <Filters
            config={this.state}
            setYear={this.changeYear}
            setLaunch={this.changeLaunchFilter}
            setLand={this.changeLandingFilter}
          />
          <LaunchData
            config={this.state}
            year={year} 
            list={list}
          />
        </div>
        <div className="center">Developed By: Vinay D S</div>
      </div>
      )
    }
}

export default App;
