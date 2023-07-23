import React, { useEffect, useState } from 'react';
import ChatApi from '../../services/firebaseInstance';

import { Chat } from '../../components/Chat';
import { useSelector } from 'react-redux';
import { getCurrentUser, getUserStore } from '../../redux/reducers/authSlice';

import firebaseInstance from '../../services/firebaseInstance';

const ChatMessages = () => {
  const user = useSelector(getCurrentUser);
  const store = useSelector(getUserStore);
  const [storeChatsGroups, setStoreChatsGroup] = useState([]);
  const [myChatGroups, setMyChatGroups] = useState([]);

  useEffect(() => {
    fetchChatsGroups();
  }, []);

  const fetchChatsGroups = async () => {
    store?.id &&
      ChatApi.conversations.groupsBuinsess(store?.id, setStoreChatsGroup);
    ChatApi.conversations.groups(user?.id, setMyChatGroups);
  };
  return (
    <Chat storeChatsGroups={storeChatsGroups} myChatGroups={myChatGroups} />
  );
};
export default ChatMessages;
