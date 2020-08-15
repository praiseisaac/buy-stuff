import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import { buyerAuthService } from './Buyer/services/buyerAuthService';
import BuyerPage from './Buyer/BuyerPage';
import BuyerLogin from './Buyer/BuyerLogin';
// import SellerPage from './components/SellerPage';
// import SellerLogin from './components/SellerLogin';
import { history } from './helpers/history';
import { PrivateRouteBuyer } from './Buyer/PrivateRouteBuyer';
import { Router, Route, Redirect } from 'react-router-dom';
import AppRouter from './AppRouter';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        currentBuyer: null,
        currentSeller: null
    };
}

  componentDidMount() {
    buyerAuthService.currentBuyer.subscribe(x => this.setState({ currentBuyer: x }));
}

logout() {
  buyerAuthService.logout();
  history.push('/login');
}

  render() {
    return (
      <div className="App">

        <NavBar login={BuyerLogin} page={BuyerPage} href="/"/>
        {/* <Landing id="app-body" /> */}
        <AppRouter />

      </div>
    );
  }
}

export default App;
