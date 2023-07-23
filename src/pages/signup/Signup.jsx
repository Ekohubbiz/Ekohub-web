import React, { useRef, useState } from 'react';
import { Input1 } from '../../components/shared/Inputs';
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Msg from '../../assets/icons/msg.svg';
import User from '../../assets/icons/userinput.svg';
import Lock from '../../assets/icons/lock.svg';
import Eye from '../../assets/icons/eye.svg';
import { CardDefault } from '../../components/shared/Cards';
import { Button1, Button2 } from '../../components/shared/Buttons';
import MainLayout from '../../components/Landing/MainLayout';
import { colors } from '../../themes';
import { signUpUserEmail } from '../../redux/actions/authuser';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../utils/helpers';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';
import { paths, CLIENT_ID, FACEBOOK_APP_ID } from '../../constants';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(getIsLoading);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    cpassword: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    if (form.cpassword !== form.password) {
      showToast('Password mismatch', 'error');
      return;
    }
    const res = await dispatch(signUpUserEmail(form));
    if (res) {
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

  const responseGoogle = (res) => {
    console.log(res);
    const data = { token: res.tokenId };
    // handleGoogle(data);
  };

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
        <MainLayout nomargin loading={loading}>
          <div
            className="bg-auth xl:px-32 px-12 py-8"
            style={{ backgroundColor: colors.red }}
          >
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="flex lg:justify-end">
                <div className="lg:w-2/5">
                  <CardDefault>
                    <p className="text-3xl text-slate-700 font-bold pb-4">
                      Sign up
                    </p>
                    <p className="text-slate-700 pb-4">
                      Hello stranger, let’s get to know you more. Create and
                      account with your verified information
                    </p>
                    <div>
                      <form onSubmit={handleSignup}>
                        <Input1
                          type="text"
                          placeholder="First name"
                          icon={User}
                          name="fname"
                          id="fname"
                          onChange={(e) =>
                            setForm({ ...form, first_name: e.target.value })
                          }
                          required
                        />
                        <Input1
                          type="text"
                          placeholder="Last name"
                          icon={User}
                          name="lname"
                          id="lname"
                          onChange={(e) =>
                            setForm({ ...form, last_name: e.target.value })
                          }
                          required
                        />
                        <Input1
                          type="number"
                          placeholder="Your phone number"
                          icon={User}
                          name="phone"
                          id="phone"
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          required
                        />
                        <Input1
                          type="email"
                          placeholder="Your email"
                          icon={Msg}
                          name="email"
                          id="email"
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          required
                        />
                        <Input1
                          type={visible ? 'text' : 'password'}
                          placeholder="Your password"
                          icon={Lock}
                          name="password"
                          id="password"
                          onToggle={() => setVisible(!visible)}
                          passIcon={Eye}
                          onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                          }
                          required
                        />
                        <Input1
                          type={visible ? 'text' : 'password'}
                          placeholder="Confirm password"
                          icon={Lock}
                          name="cpassword"
                          id="cpassword"
                          onToggle={() => setVisible(!visible)}
                          passIcon={Eye}
                          onChange={(e) =>
                            setForm({ ...form, cpassword: e.target.value })
                          }
                          required
                        />
                        <div className="flex my-2">
                          <input
                            required
                            type="checkbox"
                            className="p-2 rounded-md focus:bg-red-400"
                          />
                          <p className="ml-2 text-xs text-gray-400">
                            By creating your account, you have agree to our{' '}
                            <Link
                              to={paths.TOC}
                              className="hover:text-red-400 underline"
                            >
                              Terms and Conditions
                            </Link>{' '}
                            and{' '}
                            <Link
                              to={paths.POLICY}
                              className="hover:text-red-400 underline"
                            >
                              Privacy Policy
                            </Link>
                            .
                          </p>
                        </div>
                        <div>
                          <Button1
                            title="Sign up"
                            btnstyle={{ backgroundColor: colors.red }}
                            type="submit"
                          />
                        </div>
                      </form>
                    </div>
                    <p className="text-center py-4 text-xs text-slate-400">
                      Or sign up with social media
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
            <div className="bg-red-600 w-full rounded-b-3xl flex flex-col justify-center items-start p-4 py-16">
              <p className="text-3xl text-white font-bold pb-4">Sign up</p>
              <p className="text-white pb-4">
                Hello stranger, let’s get to know you more. Create and account
                with your verified information
              </p>
            </div>
            <div className="px-2 py-8 pb-20">
              <form onSubmit={handleSignup}>
                <Input1
                  type="text"
                  placeholder="First name"
                  icon={User}
                  name="fname"
                  id="fname"
                  required
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                />
                <Input1
                  type="text"
                  placeholder="Last name"
                  icon={User}
                  name="lname"
                  id="lname"
                  required
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                />
                <Input1
                  type="number"
                  placeholder="Your phone number"
                  icon={User}
                  name="phone"
                  id="phone"
                  required
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
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
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <Input1
                  type={visible ? 'text' : 'password'}
                  placeholder="Confirm password"
                  icon={Lock}
                  name="cpassword"
                  id="cpassword"
                  onToggle={() => setVisible(!visible)}
                  passIcon={Eye}
                  required
                  onChange={(e) =>
                    setForm({ ...form, cpassword: e.target.value })
                  }
                />
                <div className="flex my-2">
                  <input
                    required
                    type="checkbox"
                    className="p-2 rounded-md focus:bg-red-400"
                  />
                  <p className="ml-2 text-xs text-gray-400">
                    By creating your account, you have agree to our{' '}
                    <Link
                      to={paths.TOC}
                      className="hover:text-red-400 underline"
                    >
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link
                      to={paths.POLICY}
                      className="hover:text-red-400 underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
                <div>
                  <Button1
                    title="Sign up"
                    btnstyle={{ backgroundColor: colors.red }}
                    type="submit"
                  />
                </div>
              </form>
              <p className="text-center py-4 text-xs text-slate-400">
                Or sign up with social media
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
              <Link to={paths.SIGIN}>
                <span className="text-center text-sm">
                  Already have an account{' '}
                  <span style={{ color: colors.red }}>Sign in</span>
                </span>
              </Link>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default Signup;
