import React from 'react';
import coronaImage from './images/QS.png'

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api' ;


class App extends React.Component {

    state = {
      data: {},
      country: '',
    }


  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data:fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);

    this.setState({ data: fetchedData, country:country });
  }

  render(){
    const {data, country} = this.state;
    return(
      <div className={styles.container}>
      <img  className={styles.image} src={coronaImage} alt="Coronavirus" />
         <Cards data={data} />
         <CountryPicker handleCountryChange={this.handleCountryChange} />
         <Chart data={data} country={country}/>
        </div>
    )
  }
}

export default App;
