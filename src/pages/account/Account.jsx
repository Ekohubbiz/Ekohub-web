import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../assets/img/avatar.png';
import { Button1 } from '../../components/shared/Buttons';
import { Input1 } from '../../components/shared/Inputs';
import { updateStore, updateUser } from '../../redux/actions/authuser';
import { uploadImagesMultiple } from '../../redux/actions/images';
import { getStoreOwner } from '../../redux/reducers/authSlice';
import { colors } from '../../themes';
import './styles.scss';

const Account = ({ stores, user }) => {
  const dispatch = useDispatch();
  const storeOwner = useSelector(getStoreOwner);
  const [form, setForm] = useState({
    first_name: user?.first_name,
    phone: user?.phone,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [form2, setForm2] = useState({
    phone: stores?.phone,
    name: stores?.name,
    address: stores?.address,
  });

  const uploadFile = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const uploadFile2 = (e) => {
    setSelectedImage2(e.target.files[0]);
  };
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(1);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (selectedImage) {
        const fd = new FormData();
        fd.append('media', selectedImage, 'media');
        const res = await dispatch(uploadImagesMultiple(fd));

        const data = {
          ...form,
          profile_pic_url: res[0],
        };
        await dispatch(updateUser(data));
        setLoading(false);
        setSelectedImage(null);
        return;
      }
      await dispatch(updateUser(form));
      setLoading(false);
    } catch (error) {
      setSelectedImage2(null);
      setLoading(false);
    }
  };
  const onSubmitForm2 = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (selectedImage2) {
        const fd = new FormData();
        fd.append('media', selectedImage2, 'media');
        const res = await dispatch(uploadImagesMultiple(fd));

        const data = {
          ...form2,
          cover_image_url: res[0],
        };
        await dispatch(updateStore(data));
        setLoading(false);
        setSelectedImage2(null);
        return;
      }
      await dispatch(updateStore(form2));
      setLoading(false);
    } catch (error) {
      setSelectedImage2(null);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex justify-center gap-2 my-8">
        <p
          onClick={() => setTab(1)}
          className="text-sm px-4 py-2 font-bold rounded-lg cursor-pointer"
          style={{
            backgroundColor: tab == 1 ? colors.red : 'transparent',
            color: tab == 1 ? '#fff' : '#000',
          }}
        >
          Personal
        </p>
        {storeOwner && (
          <p
            onClick={() => setTab(2)}
            className="text-sm px-4 py-2 font-bold rounded-lg cursor-pointer"
            style={{
              backgroundColor: tab == 2 ? colors.red : 'transparent',
              color: tab == 2 ? '#fff' : '#000',
            }}
          >
            Business
          </p>
        )}
      </div>
      {tab == 1 && (
        <div className="account flex flex-col  items-center">
          <div className="text-center justify-center my-4">
            <img
              src={
                (selectedImage && URL.createObjectURL(selectedImage)) ||
                user?.profile_pic_url ||
                Avatar
              }
              alt="shop online at Ekohub"
              className="w-24 h-24 rounded-full"
            />
            <label className="text-xs cursor-pointer">
              <input
                type="file"
                aria-describedby="file_input_help"
                id="file_input"
                accept="image/png, image/jpeg"
                required
                onChange={uploadFile}
              />
              Upload picture
            </label>
          </div>

          <div className="mt-4 flex flex-col items-center">
            <p className="text-2xl text-slate-700 pb-2">{user?.first_name}</p>
            <p className="text-xs text-slate-700 pb-2">{user?.address}</p>
            <p className="text-xs text-slate-700 pb-2">{user?.phone}</p>
            <p className="text-xs text-slate-700 pb-2">{user?.email}</p>
          </div>

          <div className="mt-4 flex flex-col items-center">
            <form onSubmit={onSubmitForm}>
              <p className="text-sm text-slate-700 font-thin">First name</p>
              <Input1
                type="text"
                placeholder="Your Name"
                name="first_name"
                id="first_name"
                onChange={(e) =>
                  setForm({ ...form, first_name: e.target.value })
                }
                value={form?.first_name}
              />
              <p className="text-sm text-slate-700 font-thin">Phone number</p>
              <Input1
                type="text"
                placeholder="Your phone"
                name="address"
                id="address"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                value={form?.phone}
              />
              <Button1
                title={loading ? 'Updating' : 'Update'}
                type="submit"
                // disabled={loading}
              />
            </form>
          </div>
        </div>
      )}
      {tab == 2 && (
        <div className="account flex flex-col  items-center">
          <div className="text-center justify-center my-4">
            <img
              src={
                (selectedImage2 && URL.createObjectURL(selectedImage2)) ||
                stores?.cover_image_url ||
                Avatar
              }
              alt="shop online at Ekohub"
              className="w-24 rounded-full"
            />
            <label className="text-xs cursor-pointer">
              <input
                type="file"
                aria-describedby="file_input_help"
                id="file_input"
                accept="image/png, image/jpeg"
                required
                onChange={uploadFile2}
              />
              Upload
            </label>
          </div>

          <div className="mt-4 flex flex-col items-center">
            <p className="text-2xl text-slate-700 pb-2">{stores?.name}</p>
            <p className="text-xs text-slate-700 pb-2">{stores?.address}</p>
            <p className="text-xs text-slate-700 pb-2">{stores?.phone}</p>
          </div>

          <div className="mt-4 flex flex-col items-center">
            <form onSubmit={onSubmitForm2}>
              <p className="text-sm text-slate-700 font-thin">Store name</p>
              <Input1
                type="text"
                placeholder="Store Name"
                name="name"
                id="name"
                onChange={(e) => setForm2({ ...form2, name: e.target.value })}
                value={form2?.name}
              />

              <p className="text-sm text-slate-700 font-thin">Address</p>
              <Input1
                type="text"
                placeholder="Your address"
                name="address"
                id="address"
                onChange={(e) =>
                  setForm2({ ...form2, address: e.target.value })
                }
                value={form2?.address}
              />
              <p className="text-sm text-slate-700 font-thin">Phone number</p>
              <Input1
                type="text"
                placeholder="Your phone"
                name="address"
                id="address"
                onChange={(e) => setForm2({ ...form2, phone: e.target.value })}
                value={form2?.phone}
              />
              <Button1
                title={loading ? 'Updating' : 'Update'}
                type="submit"
                // disabled={loading}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Account;
