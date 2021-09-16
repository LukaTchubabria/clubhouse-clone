import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/invite' component={PhoneConfirmation} />
      <Route exact path='/code-confirm' component={CodeConfirm} />
      </PlanLayout>
    </BrowserRouter>
  )
}

export default App;
