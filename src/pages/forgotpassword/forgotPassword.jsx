import React, { useRef, useState } from 'react';
import { Input1 } from '../../components/shared/Inputs';
import Msg from '../../assets/icons/msg.svg';
import { CardDefault } from '../../components/shared/Cards';
import { Button1 } from '../../components/shared/Buttons';
import MainLayout from '../../components/Landing/MainLayout';
import { colors } from '../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import { forgotPassword } from '../../redux/actions/authuser';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../constants';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(getIsLoading);
  const [form, setForm] = useState({});

  const handleForgot = async (e) => {
    e.preventDefault();
    const res = await dispatch(forgotPassword(form));
    if (res) {
      navigate(paths.FORGOT_PASSWORD_CODE, { state: { email: form.email } });
    }
  };

  return (
    <>
      <Desktop>
        <MainLayout nomargin>
          <div style={{ backgroundColor: colors.red }}>
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="flex justify-center">
                <div className="lg:w-2/5 my-16">
                  <CardDefault>
                    <p className="text-3xl text-slate-700 font-bold pb-4 text-center">
                      Forgot password
                    </p>
                    <p className="text-slate-700 font-thin pb-4 text-center">
                      Can’t remember your password? Don’t worry, enter the email
                      attached to your account and we’ll send you a reset code.
                    </p>
                    <form onSubmit={handleForgot}>
                      <div>
                        <Input1
                          type="email"
                          placeholder="Your email"
                          icon={Msg}
                          name="email"
                          required
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="h-48 min-h-0"></div>
                      <div>
                        <Button1
                          title="Send Verification Code"
                          type="submit"
                          btnstyle={{ backgroundColor: colors.red }}
                        />
                      </div>
                    </form>
                  </CardDefault>
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
                  <CardDefault>
                    <p className="text-3xl text-slate-700 font-bold pb-4 text-center">
                      Forgot password
                    </p>
                    <p className="text-slate-700 font-thin pb-4 text-center">
                      Can’t remember your password? Don’t worry, enter the email
                      attached to your account and we’ll send you a reset code.
                    </p>
                    <form onSubmit={handleForgot}>
                      <div>
                        <Input1
                          type="email"
                          placeholder="Your email"
                          icon={Msg}
                          name="email"
                          required
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="h-48 min-h-0"></div>
                      <div>
                        <Button1
                          title="Send Verification Code"
                          type="submit"
                          btnstyle={{ backgroundColor: colors.red }}
                        />
                      </div>
                    </form>
                  </CardDefault>
                </div>
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default ForgotPassword;
