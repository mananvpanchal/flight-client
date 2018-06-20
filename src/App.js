import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';

import SearchBox from './components/search-box';
import SearchResult from './components/search-result';

import { changeTab, searchFlights, changePriceRange } from './actions';
import {
  getReturnJourney, getOrigin, getDestination,
  getFlightResult, getDepartureDate, getReturnDate, getInitResult
} from './selectors';

const App = ({
  returnJourney, onSearch, onTabChange,
  origin, dest, depDate, retDate, flightResult, onPriceChange, initResult
}) => (
    <div className="App">
      <div className="App-title"><h2>Flight Search Engine</h2></div>
      <div className="Search-box">
        <SearchBox
          showRetDate={returnJourney}
          onSearch={onSearch}
          onPriceChange={onPriceChange}
          onTabChange={onTabChange}
          initResult={initResult}
        />
      </div>
      <div className="Search-result">
        <SearchResult
          returnJourney={returnJourney}
          origin={origin}
          dest={dest}
          depDate={depDate}
          retDate={retDate}
          flightResult={flightResult}
        />
      </div>
    </div>
  );

export default connect(
  (state) => {
    return {
      returnJourney: getReturnJourney(state),
      origin: getOrigin(state),
      dest: getDestination(state),
      depDate: getDepartureDate(state),
      retDate: getReturnDate(state),
      flightResult: getFlightResult(state),
      initResult: getInitResult(state)
    };
  },
  (dispatch) => {
    return {
      onSearch: (origin, dest, depDate, retDate, refinedPrice) => {
        dispatch(searchFlights(origin, dest, depDate, retDate, refinedPrice));
      },
      onTabChange: (e, data) => {
        dispatch(changeTab(data.activeIndex));
      },
      onPriceChange: (value, initResult) => {
        dispatch(changePriceRange(value, initResult));
      }
    };
  }
)(App);