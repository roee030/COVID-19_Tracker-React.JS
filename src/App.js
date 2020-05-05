import React from 'react';

import {Cards, Chart , CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/';

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount (){
        try {
            const fetchedData = await fetchData();

            this.setState({data: fetchedData})
        } catch (error) {
            console.log('could not fetch data');
            
        }
    }
    render() {

        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Cards data = {data} />
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;