import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const stockDiv = $('#stock');
const logoutNavBar = $('#logOut');

const checkLoginStaus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      stockDiv.removeClass('hide');
      logoutNavBar.removeClass('hide');
      authDiv.addClass('hide');
    } else {
      stockDiv.addClass('hide');
      logoutNavBar.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStaus };
