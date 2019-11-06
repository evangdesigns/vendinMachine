import firebase from 'firebase';
import 'bootstrap';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import naveyOut from './components/navey/navey';
import machine from './components/machine/machine';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStaus();
  auth.loginButton();
  naveyOut.logoutEvent();
  machine.buildTheMachine();
};

init();
