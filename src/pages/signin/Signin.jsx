import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGoogleLogin, hasGrantedAnyScopeGoogle } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Input1 } from '../../components/shared/Inputs';
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Msg from '../../assets/icons/msg.svg';
import Lock from '../../assets/icons/lock.svg';
import Eye from '../../assets/icons/eye.svg';
import { CardDefault } from '../../components/shared/Cards';
import { Button1, Button2 } from '../../components/shared/Buttons';
import MainLayout from '../../components/Landing/MainLayout';
import { colors } from '../../themes';
import { FACEBOOK_APP_ID, paths } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import { signInGoogle, signInUserEmail } from '../../redux/actions/authuser';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import './styles.scss';

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(getIsLoading);
  const [form, setForm] = useState({ email: '', password: '' });
  const [visible, setVisible] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    const res = await dispatch(signInUserEmail(form));
    if (res) {
      navigate(paths.HOME);
    }
    return;
  };

  const handleGoogle = async (token) => {
    const res = await dispatch(signInGoogle(token));
    if (res) {
      navigate(paths.HOME);
    }
    return;
  };

  const responseFacebook = (res) => {
    const data = {
      accessToken: res.accessToken,
    };
    // handleFacebook(data);
    console.warn(res);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse.access_token, tokenResponse);
      handleGoogle(tokenResponse.access_token);
      const hasAccess = hasGrantedAnyScopeGoogle(
        tokenResponse,
        'google-scope-1',
        'google-scope-2',
      );
      console.log(hasAccess);
    },
    onError: (response) => console.log(response),
  });

  return (
    <>
      <Desktop>
        <MainLayout nomargin loading={loading}>
          <div
            className="bg-auth xl:px-32 px-12 py-8"
            style={{ backgroundColor: colors.red }}
          >
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="flex lg:justify-end">
                <div className="lg:w-2/5">
                  <CardDefault>
                    <p
                      data-testid="signin"
                      className="text-3xl text-slate-700 font-bold pb-4"
                    >
                      Sign in
                    </p>
                    <p className="text-slate-700 pb-4">
                      Welcome back, continue into your account with your email
                      and password
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
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                        />
                        <Input1
                          type={visible ? 'text' : 'password'}
                          placeholder="Your password"
                          icon={Lock}
                          onToggle={() => setVisible(!visible)}
                          passIcon={Eye}
                          name="password"
                          id="password"
                          required
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
                    </div>
                  </CardDefault>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout tab={true} nav={false}>
          <div className="h-screen">
            <div className="bg-red-600 w-full rounded-b-3xl flex flex-col justify-center items-start p-4 py-8">
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
                    type={visible ? 'text' : 'password'}
                    placeholder="Your password"
                    icon={Lock}
                    onToggle={() => setVisible(!visible)}
                    passIcon={Eye}
                    name="password"
                    id="password"
                    required
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
                  title="CONTINUE WITH FACEBOOK"
                  icon={Facebook}
                  classes="w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-4 my-3 flex items-center justify-center dark:focus:ring-[#3b5998]/55"
                /> */}
              </div>
              <Link to={paths.SIGNUP}>
                <span className="text-center text-sm">
                  Dont have an account{' '}
                  <span style={{ color: colors.red }}>Sign up</span>
                </span>
              </Link>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default Signin;
