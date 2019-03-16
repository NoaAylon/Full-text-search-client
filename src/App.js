
import React, { useState } from 'react'; import { Route, Switch } from 'react-router-dom';
import { AdminContext } from './context/adminContext';
import { HomePage } from './HomePage';
import { Login } from './Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return <AdminContext.Provider value={{
    setIsLogin,
    isLogin
  }}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </AdminContext.Provider>
}

export default App;