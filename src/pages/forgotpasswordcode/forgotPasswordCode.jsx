import React, { useRef, useState } from 'react';
import OtpInput from 'react-otp-input';
import { Input1 } from '../../components/shared/Inputs';
import Msg from '../../assets/icons/msg.svg';
import Lock from '../../assets/icons/lock.svg';
import Eye from '../../assets/icons/eye.svg';
import { Button1 } from '../../components/shared/Buttons';
import MainLayout from '../../components/Landing/MainLayout';
import { colors } from '../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import {
  forgotPassword,
  resendForgotPassword,
  resetPassword,
} from '../../redux/actions/authuser';
import { useLocation, useNavigate } from 'react-router-dom';
import { paths } from '../../constants';
import { showToast } from '../../utils/helpers';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';

function ForgotPasswordCode() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const loading = useSelector(getIsLoading);
  const [form, setForm] = useState({ password: '' });
  const [otp, setOtp] = useState('');
  const [verify, setVerify] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleResendForgot = async () => {
    await dispatch(resendForgotPassword({ email: state?.email }));
    // console.log(otp);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    console.log(otp.length);
    if (otp.length === 4) {
      setVerify(true);
    }
    return;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (form.cpassword !== form.password) {
      showToast('Password mismatch', 'error');
      return;
    }
    const data = {
      email: state?.email,
      code: otp,
      new_password: form.password,
    };
    const res = await dispatch(resetPassword(data));
    if (res) {
      navigate(paths.SIGIN);
      return;
    } else {
      showToast('Password reset failed', 'error');
    }
  };

  const handleChange = (otp) => setOtp(otp);

  return (
    <>
      <Desktop>
        <MainLayout nomargin loading={loading}>
          <div style={{ backgroundColor: colors.red }}>
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="flex justify-center">
                <div className="lg:w-2/5 my-16">
                  <div
                    className="rounded-3xl drop-shadow-md lg:py-12 lg:px-28 py-4 px-8 "
                    style={{ backgroundColor: '#f3f3f3' }}
                  >
                    {!verify && (
                      <div>
                        <p className="text-3xl text-slate-700 font-bold pb-4 text-center">
                          Forgot password
                        </p>
                        <p className="text-slate-700 font-thin pb-4 text-center">
                          Check your email for a 4-digit code and enter it below
                        </p>
                        <form onSubmit={handleVerify}>
                          <div className="flex justify-center my-4">
                            <OtpInput
                              value={otp}
                              onChange={handleChange}
                              numInputs={4}
                              separator={<span>{''}</span>}
                              inputStyle={{
                                width: '4rem',
                                height: '4rem',
                                margin: '0 1rem',
                                fontSize: '2rem',
                                borderRadius: 6,
                                border: '1px solid rgba(0,0,0,0.1)',
                                color: '#000',
                              }}
                              focusStyle={{
                                border: '1px solid #EB3352',
                                outline: 'none',
                              }}
                              // isInputNum={true}
                              shouldAutoFocus={true}
                              isInputSecure
                            />
                          </div>
                          <p className="text-slate-700 text-center text-sm my-1">
                            Enter the code that was send your email
                          </p>
                          <p className="text-red-600 text-center text-sm my-1">
                            {state?.email}
                          </p>
                          <div className="h-28 min-h-0"></div>
                          <p className="text-slate-600 pb-4 text-center text-sm">
                            This code will expire on{' '}
                            <span className="text-red-600">5 minutes</span>
                          </p>
                          <div>
                            <Button1
                              title="Verify"
                              type="submit"
                              btnstyle={{ backgroundColor: colors.red }}
                            />
                          </div>
                        </form>
                        <Button1
                          title="Resend Code"
                          type="button"
                          btnstyle={{ backgroundColor: '#9CA4BA' }}
                          onClick={handleResendForgot}
                        />
                      </div>
                    )}
                    {verify && (
                      <div>
                        <p className="text-3xl text-slate-700 font-bold pb-4 text-center">
                          Forgot password
                        </p>
                        <p className="text-slate-700 font-thin pb-4 text-center">
                          Check your email for a 4-digit code and enter it below
                        </p>
                        <form onSubmit={handleResetPassword}>
                          <div className="flex flex-col justify-center my-4">
                            <Input1
                              type={visible ? 'text' : 'password'}
                              placeholder="Your password"
                              icon={Lock}
                              name="password"
                              id="password"
                              passIcon={Eye}
                              onToggle={() => setVisible(!visible)}
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
                              passIcon={Eye}
                              onToggle={() => setVisible(!visible)}
                              required
                              onChange={(e) =>
                                setForm({ ...form, cpassword: e.target.value })
                              }
                            />
                          </div>
                          <p className="text-slate-700 text-sm my-1">
                            Both Passwords must match
                          </p>
                          <div className="h-28 min-h-0"></div>

                          <div>
                            <Button1
                              title="Reset Password"
                              type="submit"
                              btnstyle={{ backgroundColor: colors.red }}
                            />
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout tab={true} nav={false}>
          <div style={{ backgroundColor: colors.red }}>
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="flex justify-center">
                <div className="lg:w-2/5 my-16">
                  <div
                    className="rounded-3xl drop-shadow-md lg:py-12 lg:px-28 py-4 px-8 "
                    style={{ backgroundColor: '#f3f3f3' }}
                  >
                    {!verify && (
                      <div>
                        <p className="text-3xl text-slate-700 font-bold pb-4 text-center">
                          Forgot password
                        </p>
                        <p className="text-slate-700 font-thin pb-4 text-center">
                          Check your email for a 4-digit code and enter it below
                        </p>
                        <form onSubmit={handleVerify}>
                          <div className="flex justify-center my-4">
                            <OtpInput
                              value={otp}
                              onChange={handleChange}
                              numInputs={4}
                              separator={<span>{''}</span>}
                              inputStyle={{
                                width: '2rem',
                                height: '2rem',
                                margin: '0 1rem',
                                fontSize: '1rem',
                                borderRadius: 6,
                                border: '1px solid rgba(0,0,0,0.1)',
                                color: '#000',
                              }}
                              focusStyle={{
                                border: '1px solid #EB3352',
                                outline: 'none',
                              }}
                              // isInputNum={true}
                              shouldAutoFocus={true}
                              isInputSecure
                            />
                          </div>
                          <p className="text-slate-700 text-center text-sm my-1">
                            Enter the code that was sent your email
                          </p>
                          <p className="text-red-600 text-center text-sm my-1">
                            {state?.email}
                          </p>
                          <div className="h-28 min-h-0"></div>
                          <p className="text-slate-600 pb-4 text-center text-sm">
                            This code will expire on{' '}
                            <span className="text-red-600">5 minutes</span>
                          </p>
                          <div>
                            <Button1
                              title="Verify"
                              type="submit"
                              btnstyle={{ backgroundColor: colors.red }}
                            />
                          </div>
                        </form>
                        <Button1
                          title="Resend Code"
                          type="button"
                          btnstyle={{ backgroundColor: '#9CA4BA' }}
                          onClick={handleResendForgot}
                        />
                      </div>
                    )}
                    {verify && (
                      <div>
                        <p className="text-3xl text-slate-700 font-bold pb-4 text-center">
                          Forgot password
                        </p>
                        <p className="text-slate-700 font-thin pb-4 text-center">
                          Check your email for a 4-digit code and enter it below
                        </p>
                        <form onSubmit={handleResetPassword}>
                          <div className="flex flex-col justify-center my-4">
                            <Input1
                              type={visible ? 'text' : 'password'}
                              placeholder="Your password"
                              icon={Lock}
                              name="password"
                              id="password"
                              passIcon={Eye}
                              onToggle={() => setVisible(!visible)}
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
                              passIcon={Eye}
                              onToggle={() => setVisible(!visible)}
                              required
                              onChange={(e) =>
                                setForm({ ...form, cpassword: e.target.value })
                              }
                            />
                          </div>
                          <p className="text-slate-700 text-sm my-1">
                            Both Passwords must match
                          </p>
                          <div className="h-28 min-h-0"></div>

                          <div>
                            <Button1
                              title="Reset Password"
                              type="submit"
                              btnstyle={{ backgroundColor: colors.red }}
                            />
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default ForgotPasswordCode;
