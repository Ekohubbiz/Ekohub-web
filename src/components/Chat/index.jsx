import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@material-tailwind/react';
import { Input1, Input1M, InputTextArea } from '../../components/shared/Inputs';
import MainLayout from '../../components/Landing/MainLayout';
import Search2 from '../../assets/icons/search2.svg';
import Avatar from '../../assets/img/avatar.png';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, getUserStore } from '../../redux/reducers/authSlice';
import ChatApi from '../../services/firebaseInstance';
import {
  getDateDifference,
  numberWithCommas,
  showToast,
  truncate,
} from '../../utils/helpers';
import './styles.scss';
import useQuery from '../../hooks/useQuery';
import { addStoreReview } from '../../redux/actions/stores';
import { sendProductConversation } from '../../redux/actions/products';
import Backdrop from '../shared/Backdrop/Backdrop';
import SideDrawer from '../mobile/SideDrawer/SideDrawer';
import { getCategories } from '../../redux/reducers/categorySlice';

export const Chat = ({ storeChatsGroups, myChatGroups }) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const query = useQuery();
  const user = useSelector(getCurrentUser);
  const store = useSelector(getUserStore);
  const categories = useSelector(getCategories);
  const [value, setValue] = useState('');
  const selectedChatId = query.get('chat_id');
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatType, setChatType] = useState('me');
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const messageRef = useRef(null);
  const [showModalChat, setShowModalChat] = useState(false);
  const [feedback, setFeedback] = useState('positive');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (selectedChatId) {
      const userInfo = {
        id: user?.id,
        name: user?.first_name,
        picture: user?.profile_pic_url,
        type: user?.role,
      };
      ChatApi.conversations.send(
        selectedChatId,
        userInfo,
        state.item,
        'product',
      );
    }
  }, [selectedChatId]);

  const onMessageSend = async (e, msg, type) => {
    e.preventDefault();
    messageRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    if (value === '') {
      showToast('Type a message', 'error');
      return;
    }
    const userInfo = {
      id: user?.id,
      name: user?.first_name,
      picture: user?.profile_pic_url,
      phone: user?.phone,
      type: user?.role,
    };
    await ChatApi.conversations.send(
      selectedChat?.groupId,
      userInfo,
      msg,
      type,
    );
    setValue('');
    await ChatApi.conversations.messages(selectedChat?.groupId, setChats);
    messageRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    const payload = {
      firebase_doc_id: selectedChat?.groupId,
      sender_id: selectedChat?.userId,
      sender_details: userInfo,
      store_is_sender: chatType == 'me' ? false : true,
      store_id: selectedChat?.storeId,
      message_content: msg,
      message_content_type: type,
    };
    await dispatch(sendProductConversation(payload));
  };

  const onChatClick = async (chat) => {
    console.log(chat?.groupId);
    setSelectedChat(chat);
    await ChatApi.conversations.messages(chat?.groupId, setChats);
    // ChatApi.conversations.read(chat?.groupId);
    // messageRef.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'end',
    //   inline: 'nearest',
    // });
    // if (message && message.userId !== user?.id) {
    //   ChatApi.conversations.read(chat?.id, message.id);
    // }
  };

  const handleFeedback = async (e) => {
    e.preventDefault();
    const data = {
      store_id: selectedChat?.users[1].id,
      comment,
      experience: feedback,
    };
    await dispatch(addStoreReview(data));
    setShowModalChat(false);
  };
  //mobile
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  let backdropComponent;

  const handleSideDrawer = () => {
    setSideDrawerOpen((prev) => !prev);
  };

  if (sideDrawerOpen) {
    backdropComponent = <Backdrop click={() => setSideDrawerOpen(false)} />;
  }
  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="">
            <div className="lg:px-12 lg:py-4 p-4">
              <div className="grid grid-cols-6 gap-8 pt-4">
                <div className="relative col-span-2 rounded-lg">
                  {/* messages card left */}
                  <div className="bg-white rounded-3xl drop-shadow-md py-4 mb-4 sticky top-4 overflow-y-auto">
                    <p className="text-xl text-slate-700 font-bold pb-4 px-8 ">
                      My messages
                    </p>
                    {/* <div className="px-8">
                      <Input1
                        type="test"
                        placeholder="Find a message"
                        icon={Search2}
                        name="search"
                      />
                    </div> */}
                    <div className="flex justify-center my-2">
                      <p
                        onClick={() => setChatType('me')}
                        style={{
                          backgroundColor:
                            chatType === 'me' ? '#eb3352' : 'transparent',
                          color: chatType === 'me' ? '#fff' : '#000',
                        }}
                        className="cursor-pointer text-sm px-8 py-2 rounded-2xl mr-2"
                      >
                        <span className=" mr-1">{myChatGroups.length}</span>
                        Personal
                      </p>
                      <p
                        onClick={() => setChatType('store')}
                        style={{
                          backgroundColor:
                            chatType === 'store' ? '#eb3352' : 'transparent',
                          color: chatType === 'store' ? '#fff' : '#000',
                        }}
                        className="cursor-pointer text-sm rounded-2xl px-8 py-2"
                      >
                        <span className=" mr-1">{storeChatsGroups.length}</span>{' '}
                        Business
                      </p>
                    </div>

                    {/* messages select */}
                    <div>
                      <>
                        {chatType === 'store' && storeChatsGroups.length < 1 && (
                          <div>
                            <p className="text-center text-sm text-slate-700 my-4">
                              No active chats
                            </p>
                          </div>
                        )}
                        {chatType === 'me' && myChatGroups.length < 1 && (
                          <div>
                            <p className="text-center text-sm text-slate-700 my-4">
                              No active chats
                            </p>
                          </div>
                        )}
                      </>
                      {chatType === 'me' &&
                        (myChatGroups || []).map((ch, i) => (
                          <div
                            key={i}
                            className=" py-1 px-4 w-full cursor-pointer mb-2"
                            style={{
                              backgroundColor:
                                ch.groupId === selectedChat?.groupId
                                  ? '#f0f0f3'
                                  : '#fff',
                            }}
                            onClick={() => onChatClick(ch)}
                          >
                            <div className="flex justify-between my-2">
                              <div className="flex">
                                <div className=" rounded-full bg-blue-400 flex justify-center items-center w-14 h-14">
                                  {ch?.users[1]?.picture ? (
                                    <img
                                      className="w-14 h-14 rounded-full"
                                      src={ch?.users[1]?.picture}
                                      alt="chatimage"
                                    />
                                  ) : (
                                    <p className="text-lg text-white font-bold">
                                      {ch?.users[1]?.name?.charAt(0) || 'A'}
                                    </p>
                                  )}
                                </div>
                                <div className="ml-4">
                                  <p className="font-bold text-sm mb-2">
                                    {ch?.users[1]?.name}
                                  </p>
                                  <p className="text-gray-300 text-xs">
                                    {ch?.lastMessage || ''}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end">
                                {!ch.isRead && (
                                  <div className="bg-red-600 rounded-full w-2 h-2"></div>
                                )}
                                <p className="text-gray-300 text-xs">
                                  {getDateDifference(
                                    ch?.lastMessageDate?.toDate(),
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      {chatType === 'store' &&
                        (storeChatsGroups || []).map((ch, i) => (
                          <div
                            key={i}
                            className=" py-1 px-4 w-full cursor-pointer mb-2"
                            style={{
                              backgroundColor:
                                ch.groupId === selectedChat?.groupId
                                  ? '#f0f0f3'
                                  : '#fff',
                            }}
                            onClick={() => onChatClick(ch)}
                          >
                            <div className="flex justify-between my-2">
                              <div className="flex">
                                <div className=" rounded-full bg-blue-400 flex justify-center items-center w-14 h-14">
                                  {ch?.users[0]?.picture ? (
                                    <img
                                      className="w-14 h-14 rounded-full"
                                      src={ch?.users[0]?.picture}
                                      alt="chatimage"
                                    />
                                  ) : (
                                    <p className="text-lg text-white font-bold">
                                      {ch?.users[0]?.name?.charAt(0) || 'A'}
                                    </p>
                                  )}
                                </div>
                                <div className="ml-4">
                                  <p className="font-bold text-sm mb-2">
                                    {ch?.users[0]?.name}
                                  </p>
                                  <p className="text-gray-300 text-xs">
                                    {ch?.lastMessage
                                      ? truncate(ch?.lastMessage, 25)
                                      : ''}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end">
                                {!ch.isRead && (
                                  <div className="bg-red-600 rounded-full w-2 h-2"></div>
                                )}
                                <p className="text-slate-300 text-xs">
                                  {getDateDifference(
                                    ch?.lastMessageDate?.toDate(),
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="relative col-span-4 lg:mb-44">
                  <div className="bg-white rounded-3xl drop-shadow-md p-4 overflow-y-auto">
                    {selectedChat && (
                      <p>
                        <div className="flex justify-between items-center bg-white drop-shadow-lg rounded-lg my-2">
                          {/* <Link to={`/profile-other/${selectedChat?.userId}`}> */}
                          <div className="flex m-1 items-center">
                            <img
                              src={selectedChat?.users[1]?.picture || Avatar}
                              alt=""
                              className="h-14 rounded-xl"
                            />
                            <div className="ml-4">
                              <p className="text-xs text-slate-400">
                                {selectedChat?.users[1]?.name}
                              </p>
                            </div>
                          </div>
                          {/* </Link> */}
                          {chatType === 'me' && (
                            <p
                              onClick={() => setShowModalChat(true)}
                              className="m-4 text-red-600 text-xs cursor-pointer"
                            >
                              {'Give feedback'}
                            </p>
                          )}
                        </div>
                      </p>
                    )}
                    {!selectedChat && (
                      <div>
                        <p className="text-center text-sm text-slate-700 my-4">
                          No selected chat
                        </p>
                      </div>
                    )}
                    <div
                      className="overflow-y-auto"
                      style={{ height: '500px' }}
                    >
                      {(chats || []).map((msg, i) => {
                        return (
                          <>
                            <div
                              className={
                                msg?.user?.id === user?.id
                                  ? `flex justify-end`
                                  : `flex justify-left`
                              }
                              key={i}
                            >
                              {msg.contentType === 'text' && (
                                <div>
                                  <p
                                    className={
                                      msg?.user?.id === user?.id
                                        ? `text-xs border rounded-xl p-3 my-1 w-fit`
                                        : `text-white text-xs bg-red-700 text-sm border rounded-xl p-3 w-fit`
                                    }
                                  >
                                    {msg.content}
                                  </p>
                                  <p
                                    className={
                                      msg?.user?.id === user?.id
                                        ? `text-right`
                                        : `text-left`
                                    }
                                    style={{ fontSize: '0.5em' }}
                                  >
                                    {getDateDifference(
                                      msg?.createdAt?.toDate(),
                                    )}
                                  </p>
                                </div>
                              )}
                            </div>
                            {msg?.contentType === 'product' && (
                              <Link
                                to={`/product/${msg?.content?.slug}`}
                                target="_blank"
                              >
                                <div className="flex justify-between items-center bg-white drop-shadow-lg rounded-lg my-2">
                                  <div className="flex m-1 items-center">
                                    <img
                                      src={msg?.content?.picture}
                                      alt=""
                                      className="h-14 rounded-xl"
                                    />
                                    <div className="ml-4">
                                      <p className="text-xs text-slate-400">
                                        {msg?.content?.name}
                                      </p>
                                      <p className="text-xs font-bold">
                                        {numberWithCommas(
                                          msg?.content?.price || 0,
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="m-4 font-bold text-2xl">
                                    {'>'}
                                  </p>
                                </div>
                              </Link>
                            )}
                          </>
                        );
                      })}
                      <div
                        style={{ float: 'left', clear: 'both' }}
                        ref={messageRef}
                      ></div>
                    </div>
                    <div className="flex">
                      {selectedChat && (
                        <div className="grow">
                          <form
                            onSubmit={(e) => onMessageSend(e, value, 'text')}
                          >
                            {chatType == 'me' && (
                              <div className="flex">
                                <p
                                  onClick={() =>
                                    setValue('Is this still available?')
                                  }
                                  className="text-xs bg-slate-200 rounded-2xl p-2 mx-2 cursor-pointer"
                                >
                                  Is this still available?
                                </p>
                                <p
                                  onClick={() => setValue('I am interested')}
                                  className="text-xs bg-slate-200 rounded-2xl p-2 mx-2 cursor-pointer"
                                >
                                  I am interested
                                </p>
                                <p
                                  onClick={() =>
                                    setValue('How much is the last price?')
                                  }
                                  className="text-xs bg-slate-200 rounded-2xl p-2 mx-2 cursor-pointer"
                                >
                                  How much is the last price?{' '}
                                </p>
                              </div>
                            )}

                            <Input1
                              type="text"
                              placeholder="type a message"
                              name="business"
                              onChange={(e) => setValue(e.target.value)}
                              value={value}
                            />
                          </form>
                        </div>
                      )}
                      {selectedChat && (
                        <button
                          onClick={(e) => onMessageSend(e, value, 'text')}
                          className="p-2 m-2 border bg-red-500 rounded-xl drop-shadow-md h-10 self-end"
                        >
                          <p className="text-xs text-white">send</p>
                        </button>
                      )}

                      {/* <button className="p-2 m-2 border border-slate-200 rounded-xl drop-shadow-md ">
                            <img src={Camera} alt="" className="w-6 rounded-xl" />
                          </button>
                          <button className="p-2 m-2 border border-slate-200 rounded-xl drop-shadow-md ">
                            <img src={Mic} alt="" className="w-6 rounded-xl" />
                          </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Dialog
              size="md"
              open={showModalChat}
              handler={() => setShowModalChat(false)}
            >
              <div className="p-2">
                <div className="flex justify-end">
                  <p
                    onClick={() => setShowModalChat(false)}
                    className="cursor-pointer px-2 bg-white rounded-full drop-shadow-lg text-right"
                  >
                    {'X'}
                  </p>
                </div>
                {/* <p className="text-sm text-bold py-2">
                  Feedback for {selectedChat?.name}
                </p> */}
                <div className="flex my-4 justify-around">
                  <p
                    onClick={() => setFeedback('positive')}
                    style={{
                      borderWidth: feedback === 'positive' ? 2 : 0,
                      borderColor: '#000',
                    }}
                    className="cursor-pointer text-base text-white text-bold p-4 bg-green-300 rounded-lg"
                  >
                    POSITIVE
                  </p>
                  <p
                    onClick={() => setFeedback('neutral')}
                    style={{
                      borderWidth: feedback === 'neutral' ? 2 : 0,
                      borderColor: '#000',
                    }}
                    className="cursor-pointer text-base text-white text-bold p-4 bg-orange-300 rounded-lg"
                  >
                    NEUTRAL
                  </p>
                  <p
                    onClick={() => setFeedback('negative')}
                    style={{
                      borderWidth: feedback === 'negative' ? 2 : 0,
                      borderColor: '#000',
                    }}
                    className="cursor-pointer text-base text-white text-bold p-4 bg-red-400 rounded-lg"
                  >
                    NEGATIVE
                  </p>
                </div>
                <form onSubmit={handleFeedback}>
                  <div className="bg-gray-100 rounded-xl p-2">
                    <InputTextArea
                      name="review"
                      id=""
                      rows="5"
                      placeholder="Please type your feedback"
                      onChange={(e) => setComment(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-base text-white p-2 my-2 align-center bg-red-500 rounded-lg "
                  >
                    send feedback
                  </button>
                </form>
              </div>
            </Dialog>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout route="My messages" sideDrawer={handleSideDrawer}>
          <SideDrawer
            clickCatIcon={() => setSideDrawerOpen(false)}
            show={sideDrawerOpen}
            data={categories}
          />
          {backdropComponent}
          <div className="py-20 overflow-y-auto h-screen">
            {selectedChat ? (
              <>
                <div className="px-2">
                  <div className="flex justify-between items-center drop-shadow-lg rounded-lg my-2">
                    <p
                      onClick={() => setSelectedChat(null)}
                      className="bg-white px-3 rounded-full text-3xl font-thin align-center"
                    >
                      {'<'}
                    </p>
                    {/* <Link to={`/profile-other/${selectedChat?.userId}`}> */}
                    <div className="flex m-1 items-center">
                      <img
                        src={selectedChat?.users[1]?.picture || Avatar}
                        alt=""
                        className="h-14 rounded-full"
                      />
                      <div className="ml-4">
                        <p className="text-xs text-slate-400">
                          {selectedChat?.users[1]?.name}
                        </p>
                      </div>
                    </div>
                    {/* </Link> */}
                    {chatType === 'me' && (
                      <p
                        onClick={() => setShowModalChat(true)}
                        className="m-4 text-red-600 text-xs cursor-pointer"
                      >
                        {'Give feedback'}
                      </p>
                    )}
                  </div>

                  <div className="mb-12">
                    {(chats || []).map((msg, i) => {
                      return (
                        <div className="">
                          <div
                            className={
                              msg?.user?.id === user?.id
                                ? `flex justify-end`
                                : `flex justify-left`
                            }
                            key={i}
                          >
                            {msg.contentType === 'text' && (
                              <div>
                                <p
                                  className={
                                    msg?.user?.id === user?.id
                                      ? `text-xs border rounded-full p-2 my-1 w-fit`
                                      : `text-white text-xs bg-red-700 text-sm border rounded-full p-2 w-fit`
                                  }
                                >
                                  {msg.content}
                                </p>
                                <p
                                  className={
                                    msg?.user?.id === user?.id
                                      ? `text-right`
                                      : `text-left`
                                  }
                                  style={{ fontSize: '0.5em' }}
                                >
                                  {getDateDifference(msg?.createdAt?.toDate())}
                                </p>
                              </div>
                            )}
                          </div>
                          {msg?.contentType === 'product' && (
                            <Link
                              to={`/product/${msg?.content?.slug}`}
                              target="_blank"
                            >
                              <div className="flex justify-between items-center bg-white drop-shadow-lg rounded-lg my-2">
                                <div className="flex m-1 items-center">
                                  <img
                                    src={msg?.content?.picture}
                                    alt=""
                                    className="h-14 rounded-xl"
                                  />
                                  <div className="ml-4">
                                    <p className="text-xs text-slate-400">
                                      {msg?.content?.name}
                                    </p>
                                    <p className="text-xs font-bold">
                                      {numberWithCommas(
                                        msg?.content?.price || 0,
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <p className="m-4 font-bold text-2xl">{'>'}</p>
                              </div>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    style={{ float: 'left', clear: 'both' }}
                    ref={messageRef}
                    className="p-14"
                  ></div>
                  <div className="absolute bottom-24 mb-2 ">
                    <form onSubmit={(e) => onMessageSend(e, value, 'text')}>
                      {chatType == 'me' && (
                        <div className="flex my-2">
                          <p
                            onClick={() => setValue('Is this still available?')}
                            className="quickmsg bg-slate-200 rounded-2xl mx-2 cursor-pointer"
                          >
                            Is this still available?
                          </p>
                          <p
                            onClick={() => setValue('I am interested')}
                            className="quickmsg bg-slate-200 rounded-2xl mx-2 cursor-pointer"
                          >
                            I am interested
                          </p>
                          <p
                            onClick={() =>
                              setValue('How much is the last price?')
                            }
                            className="quickmsg bg-slate-200 rounded-2xl mx-2 cursor-pointer"
                          >
                            How much is the last price?
                          </p>
                        </div>
                      )}
                      <div className="w-full mb-1 flex items-center">
                        <div className="grow">
                          <Input1M
                            type="text"
                            placeholder="type a message"
                            name="business"
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                          />
                        </div>
                        <button
                          onClick={(e) => onMessageSend(e, value, 'text')}
                          className="p-2 m-2 border bg-red-500 rounded-xl drop-shadow-md h-10 self-end"
                        >
                          <p className="text-xs text-white">send</p>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="px-4 my-2">
                  {/* <Input1
                    type="test"
                    placeholder="Find a message"
                    icon={Search2}
                    name="search"
                  /> */}
                  <p className="text-sm font-thin">
                    {myChatGroups.length + storeChatsGroups.length} new messages
                  </p>
                </div>
                {/* messages card left */}
                <div className="overflow-y-auto">
                  <div className="flex justify-center my-4">
                    <p
                      onClick={() => setChatType('me')}
                      style={{
                        backgroundColor:
                          chatType === 'me' ? '#eb3352' : 'transparent',
                        color: chatType === 'me' ? '#fff' : '#000',
                      }}
                      className="cursor-pointer text-sm px-8 py-2 rounded-2xl mr-2"
                    >
                      <span className=" mr-1">{myChatGroups.length}</span>
                      Personal
                    </p>
                    <p
                      onClick={() => setChatType('store')}
                      style={{
                        backgroundColor:
                          chatType === 'store' ? '#eb3352' : 'transparent',
                        color: chatType === 'store' ? '#fff' : '#000',
                      }}
                      className="cursor-pointer text-sm rounded-2xl px-8 py-2"
                    >
                      <span className=" mr-1">{storeChatsGroups.length}</span>{' '}
                      Business
                    </p>
                  </div>

                  {/* messages select */}
                  <div>
                    <>
                      {chatType === 'store' && storeChatsGroups.length < 1 && (
                        <div>
                          <p className="text-center text-sm text-slate-700 my-4">
                            No active chats
                          </p>
                        </div>
                      )}
                      {chatType === 'me' && myChatGroups.length < 1 && (
                        <div>
                          <p className="text-center text-sm text-slate-700 my-4">
                            No active chats
                          </p>
                        </div>
                      )}
                    </>
                    {chatType === 'me' &&
                      (myChatGroups || []).map((ch, i) => (
                        <div
                          key={i}
                          className=" py-1 px-4 w-full cursor-pointer mb-2"
                          style={{
                            backgroundColor:
                              ch.groupId === selectedChat?.groupId
                                ? '#f0f0f3'
                                : '#fff',
                          }}
                          onClick={() => onChatClick(ch)}
                        >
                          <div className="flex justify-between my-2">
                            <div className="flex">
                              <div className=" rounded-full bg-blue-400 flex justify-center items-center w-14 h-14">
                                {ch?.users[1]?.picture ? (
                                  <img
                                    className="w-14 h-14 rounded-full"
                                    src={ch?.users[1]?.picture}
                                    alt="chatimage"
                                  />
                                ) : (
                                  <p className="text-lg text-white font-bold">
                                    {ch?.users[1]?.name?.charAt(0) || 'A'}
                                  </p>
                                )}
                              </div>
                              <div className="ml-4">
                                <p className="font-bold text-sm mb-2">
                                  {ch?.users[1]?.name}
                                </p>
                                <p className="text-gray-300 text-xs">
                                  {ch?.lastMessage || ''}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                              {!ch.isRead && (
                                <div className="bg-red-600 rounded-full w-2 h-2"></div>
                              )}
                              <p className="text-gray-300 text-xs">
                                {getDateDifference(
                                  ch?.lastMessageDate?.toDate(),
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    {chatType === 'store' &&
                      (storeChatsGroups || []).map((ch, i) => (
                        <div
                          key={i}
                          className=" py-1 px-4 w-full cursor-pointer mb-2"
                          style={{
                            backgroundColor:
                              ch.groupId === selectedChat?.groupId
                                ? '#f0f0f3'
                                : '#fff',
                          }}
                          onClick={() => onChatClick(ch)}
                        >
                          <div className="flex justify-between my-2">
                            <div className="flex">
                              <div className=" rounded-full bg-blue-400 flex justify-center items-center w-14 h-14">
                                {ch?.users[0]?.picture ? (
                                  <img
                                    className="w-14 h-14 rounded-full"
                                    src={ch?.users[0]?.picture}
                                    alt="chatimage"
                                  />
                                ) : (
                                  <p className="text-lg text-white font-bold">
                                    {ch?.users[0]?.name?.charAt(0) || 'A'}
                                  </p>
                                )}
                              </div>
                              <div className="ml-4">
                                <p className="font-bold text-sm mb-2">
                                  {ch?.users[0]?.name}
                                </p>
                                <p className="text-gray-300 text-xs">
                                  {ch?.lastMessage || ''}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                              {!ch.isRead && (
                                <div className="bg-red-600 rounded-full w-2 h-2"></div>
                              )}
                              <p className="text-slate-300 text-xs">
                                {getDateDifference(
                                  ch?.lastMessageDate?.toDate(),
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <Dialog
            size="lg"
            open={showModalChat}
            handler={() => setShowModalChat(false)}
          >
            <div className="p-2">
              <div className="flex justify-end">
                <p
                  onClick={() => setShowModalChat(false)}
                  className="cursor-pointer px-2 bg-white rounded-full drop-shadow-lg text-right"
                >
                  {'X'}
                </p>
              </div>
              {/* <p className="text-sm text-bold py-2">
                  Feedback for {selectedChat?.name}
                </p> */}
              <div className="flex my-4 justify-between gap-1 overflow-x-auto">
                <p
                  onClick={() => setFeedback('positive')}
                  style={{
                    borderWidth: feedback === 'positive' ? 1 : 0,
                    borderColor: '#000',
                  }}
                  className="cursor-pointer text-xs text-white font-bold p-2 bg-green-400 rounded-lg"
                >
                  POSITIVE
                </p>
                <p
                  onClick={() => setFeedback('neutral')}
                  style={{
                    borderWidth: feedback === 'neutral' ? 1 : 0,
                    borderColor: '#000',
                  }}
                  className="cursor-pointer text-xs text-white font-bold p-2 bg-orange-400 rounded-lg"
                >
                  NEUTRAL
                </p>
                <p
                  onClick={() => setFeedback('negative')}
                  style={{
                    borderWidth: feedback === 'negative' ? 1 : 0,
                    borderColor: '#000',
                  }}
                  className="cursor-pointer text-xs text-white font-bold p-2 bg-red-400 rounded-lg"
                >
                  NEGATIVE
                </p>
              </div>
              <form onSubmit={handleFeedback}>
                <div className="bg-gray-100 rounded-xl p-2">
                  <InputTextArea
                    name="review"
                    id=""
                    rows="5"
                    placeholder="Please type your feedback"
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-base text-white p-2 my-2 align-center bg-red-500 rounded-lg "
                >
                  send feedback
                </button>
              </form>
            </div>
          </Dialog>
        </MobileLayout>
      </Mobile>
    </>
  );
};
