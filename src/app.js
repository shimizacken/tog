import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import DrivingDashboardContainer from './features/driveDashboard';
import styles from './app.module.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <DrivingDashboardContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
