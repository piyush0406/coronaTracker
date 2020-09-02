import React from 'react';
import coronaImage from './images/QS.png';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker, Footer } from './components';
import styles from './App.module.css';
import { fetchData } from './api' ;
import ReactGA from 'react-ga';
//import auth from './auth.ts'; // Sample authentication provider

const trackingId = "UA-177100276-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
//ReactGA.set({
//  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
//})


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
         <Footer />
        </div>
    )
  }
}

export default App;
