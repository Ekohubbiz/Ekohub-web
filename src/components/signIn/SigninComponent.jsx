import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Input1 } from '../shared/Inputs';
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Eye from '../../assets/icons/eye.svg';
import Msg from '../../assets/icons/msg.svg';
import Lock from '../../assets/icons/lock.svg';
import { CardDefault } from '../shared/Cards';
import { Button1, Button2 } from '../shared/Buttons';
import MainLayout from '../Landing/MainLayout';
import { colors } from '../../themes';
import { CLIENT_ID, FACEBOOK_APP_ID, paths } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, setModalAuth } from '../../redux/reducers/loaderSlice';
import { signInGoogle, signInUserEmail } from '../../redux/actions/authuser';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../mobile/Landing/MobileLayout';

function SigninComponent({ onSign }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loading = useSelector(getIsLoading);
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({ email: '', password: '' });

  const handleSignin = async (e) => {
    e.preventDefault();
    const res = await dispatch(signInUserEmail(form));
    if (res) {
      //   navigate(paths.HOME);
      onSign();
    }
    return;
  };

  const handleGoogle = async (token) => {
    const res = await dispatch(signInGoogle(token));
    if (res) {
      dispatch(setModalAuth(false));
      navigate(paths.HOME);
    }
    return;
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse.access_token);
      handleGoogle(tokenResponse.access_token);
    },
    onError: (response) => console.log(response),
  });

  const responseFacebook = (res) => {
    const data = {
      accessToken: res.accessToken,
    };
    // handleFacebook(data);
    console.warn(res);
  };

  return (
    <>
      <Desktop>
        <CardDefault>
          <p
            data-testid="signin"
            className="text-3xl text-slate-700 font-bold pb-4"
          >
            Sign in
          </p>
          <p className="text-slate-700 pb-4">
            Welcome back, continue into your account with your email and
            password
          </p>
          <div>
            <form onSubmit={handleSignin}>
              <Input1
                type="email"
                placeholder="Your email"
                icon={Msg}
                name="email"
                id="email"
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Input1
                type={visible ? 'text' : 'password'}
                placeholder="Your password"
                icon={Lock}
                name="password"
                id="password"
                onToggle={() => setVisible(!visible)}
                passIcon={Eye}
                required
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <Link to={paths.FORGOT_PASSWORD}>
                <p className="text-red-600 text-xs my-4">Forgot password?</p>
              </Link>
              <div>
                <Button1
                  title="Sign in"
                  btnstyle={{ backgroundColor: colors.red }}
                  type="submit"
                />
              </div>
            </form>
          </div>
          <p className="text-center py-4 text-xs text-slate-400">
            Or sign in with social media
          </p>
          <div>
            <Button2
              onClick={login}
              title="CONNECT WITH GOOGLE"
              icon={Google}
              classes="w-full drop-shadow-md text-slate-600 bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 border-gray-100 font-medium rounded-xl text-sm py-4 my-3 text-center flex items-center justify-center dark:focus:ring-[#4285F4]/55"
            />
            {/* <FacebookLogin
              appId={FACEBOOK_APP_ID}
              callback={responseFacebook}
              render={(renderProps) => (
                <Button2
                  onClick={renderProps.onClick}
                  disabled={renderProps.isDisabled}
                  title="CONTINUE WITH FACEBOOK"
                  icon={Facebook}
                  classes="w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-4 my-3 flex items-center justify-center dark:focus:ring-[#3b5998]/55"
                />
              )}
            /> */}
            <Link to={paths.SIGNUP}>
              <span className="text-center">
                Dont have an account{' '}
                <span style={{ color: colors.red }}>Sign up</span>
              </span>
            </Link>
          </div>
        </CardDefault>
      </Desktop>
      <Mobile>
        <MobileLayout tab={false} nav={false}>
          <div className="h-screen">
            <div className="bg-red-600 w-full rounded-b-3xl flex flex-col justify-center items-start p-4 py-16">
              <p className="text-3xl text-white font-bold pb-4">Sign in</p>
              <p className="text-white pb-4">
                Welcome back, continue into your account with your email and
                password
              </p>
            </div>
            <div className="px-2 py-8">
              <div>
                <form onSubmit={handleSignin}>
                  <Input1
                    type="email"
                    placeholder="Your email"
                    icon={Msg}
                    name="email"
                    id="email"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <Input1
                    type="password"
                    placeholder="Your password"
                    icon={Lock}
                    name="password"
                    id="password"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <Link to={paths.FORGOT_PASSWORD}>
                    <p className="text-red-600 text-xs my-4">
                      Forgot password?
                    </p>
                  </Link>
                  <div>
                    <Button1
                      title="Sign in"
                      btnstyle={{ backgroundColor: colors.red }}
                      type="submit"
                    />
                  </div>
                </form>
              </div>
              <p className="text-center py-4 text-xs text-slate-400">
                Or sign in with social media
              </p>
              <div>
                <Button2
                  onClick={login}
                  title="CONNECT WITH GOOGLE"
                  icon={Google}
                  classes="w-full drop-shadow-md text-slate-600 bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 border-gray-100 font-medium rounded-xl text-sm py-4 my-3 text-center flex items-center justify-center dark:focus:ring-[#4285F4]/55"
                />
                {/* <Button2
                  title="CONNECT WITH GOOGLE"
                  icon={Google}
                  classes="w-full drop-shadow-md text-slate-600 bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 border-gray-100 font-medium rounded-xl text-sm py-4 my-3 text-center flex items-center justify-center dark:focus:ring-[#4285F4]/55"
                />
                <Button2
                  title="CONTINUE WITH FACEBOOK"
                  icon={Facebook}
                  classes="w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-4 my-3 flex items-center justify-center dark:focus:ring-[#3b5998]/55"
                /> */}
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default SigninComponent;
