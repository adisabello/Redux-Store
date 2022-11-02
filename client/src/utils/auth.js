import decode from 'jwt-decode';
import {useSelector, useDispatch} from 'react-redux'
import {logIn, logOut} from '../actions'

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    let token = useSelector(state => state.authReduce)
    // return localStorage.getItem('id_token');
    return token;
  }

  login(idToken) {
    // Saves user token to localStorage
    // localStorage.setItem('id_token', idToken);
    let dispatch = useDispatch();
    dispatch(logIn(idToken))
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    // localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    let dispatch = useDispatch();
    dispatch(logOut())
    window.location.assign('/');
  }
}

export default new AuthService();
