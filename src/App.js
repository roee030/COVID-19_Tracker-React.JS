import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import BackVideo from './images/1111.mp4'
import MidBackVideo from './images/mid.mp4';
import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      
      <>
      
      <div className={styles.container}>
      
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
      <div className="styles.bg-video">
        <video className='styles.bg-video__content'  autoPlay loop muted>
          <source src={BackVideo} type='video/mp4' media="all and (max-width: 900px)"/>
          <source src={MidBackVideo} type="video/mp4" media="all and (max-width: 480px)"/> 
        </video>
      </div>
      </>
    );
  }
}

export default App;