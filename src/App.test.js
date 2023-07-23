import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import { store } from './redux/store';
import SigninComponent from './components/signIn/SigninComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CLIENT_ID } from './constants';
import Signin from './pages/signin/Signin';
import { debug } from 'jest-preview';
import NavBar from './components/Landing/Navbar';

const MockRouterSignin = () => (
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

test('renders home screen', () => {
  render(<MockRouterSignin />);
  debug();
  // const linkElement = screen.getByText('Sign');
  // expect(linkElement).toBeInTheDocument();
});
