import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm'
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={[
          "/",
          "/invite",
          "/get_username",
          "/code_confirm",
          "/allow_notification"
        ]}>
        <PlanLayout>
          <Switch>
            <Route 
              exact 
              path='/' 
              component={Welcome} 
            />
            <Route exact 
              path='/invite' 
              component={PhoneConfirmation} 
            />
            <Route 
              exact 
              path='/code_confirm' 
              component={CodeConfirm} 
            />
            <Route 
              exact 
              path='/allow_notification' 
              component={AllowNotification} 
            />
          </Switch>
        </PlanLayout>
      </Route>
      <Route
        exact
        path={["/home", "/explore", "/profile"]}>
          <AppLayout>
            <Switch>
              <Route
                exact
                path="/home"
                component={() => <Home />}>
              </Route>
              <Route
                exact
                path="/explore"
                component={Explore}>
              </Route>
              <Route
                exact
                path="/profile"
                component={Profile}>
              </Route>
            </Switch>
          </AppLayout>
      </Route>
    </BrowserRouter>
  )
}

export default App;
