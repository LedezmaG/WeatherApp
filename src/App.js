import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './Components/LocationList';
import ForecastExtended from './Components/forecastExtended/ForecastExtended';

import './Assets/Style/App.css';

const cities = [
  'Guadalajara,mx',
  'Washington,us',
  'Bogota,col',
  'Madril,es',
  'Lima,pe'
];

class App extends Component {
  
  constructor() {
    super();
    this.state = { city: null }   
  }


  handleSelectedLocation = city => {
    this.setState( { city } );
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row className="mb-5">
          <AppBar >
            <Toolbar>
              <Typography >
                Weather App Mexico
              </Typography>
            </Toolbar>
          </AppBar> 
        </Row>
        <Row>
          <Col xs={ 12 } md={ 6 }>
            <LocationList 
            cities={ cities } 
            onSelectedLocation={ this.handleSelectedLocation }
            />
          </Col>
          <Col xs={ 12 } md={ 6 }>
            <Paper zDepth={ 4 }>
              <div className="details">
                  { 
                    city ? 
                    <ForecastExtended city={ city }/> : 
                    <h1>Seleccione una Ciudad</h1>  
                  }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
