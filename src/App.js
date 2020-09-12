import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import Home from './pages/Home';

const App=({store})=>{
  return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistStore(store)}> 
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      </PersistGate>
     </Provider>
    )
}

export default App;