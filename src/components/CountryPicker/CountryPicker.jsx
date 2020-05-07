import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';
import cx from 'classnames'
import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>

      </div>
      <FormControl className={cx(styles.formControl , styles.container) }>
        
          <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            
            <option value="">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
          </NativeSelect>
        </FormControl>
    </div>
  );
};

export default Countries;