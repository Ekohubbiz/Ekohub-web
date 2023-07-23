import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { v4 as uuidv4 } from 'uuid';
import Api from '../api';
import { firebaseConfig } from '../constants';
import { arrayCompare } from '../utils/helpers';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
firebase.auth().signInAnonymously();

export const createGroup = async (members) => {
  const curTime = firebase.firestore.Timestamp.now();
  const document = await firebase.firestore().collection('chat_groups').add({
    members,
    no_of_members: members.length,
    createdAt: curTime,
    lastMessageDate: curTime,
  });

  return document.id;
};

export const createChatGroup = async (members, users) => {
  const curTime = firebase.firestore.Timestamp.now();
  const groupId = `group_user${members[0]}_store${members[1]}`;
  try {
    const document = await firebase
      .firestore()
      .collection('chat_groups')
      .doc(groupId)
      .set({
        groupId,
        users,
        members,
        userId: members[0],
        storeId: members[1],
        no_of_members: members.length,
        createdAt: curTime,
        lastMessageDate: curTime,
      });
    return groupId;
  } catch (error) {
    console.log(error);
  }
};

const ChatApi = {
  messages: {
    getUserGroups: (userId, emitter) =>
      firebase
        .firestore()
        .collection('chat_groups')
        .where('members', 'array-contains-any', [userId])
        .orderBy('lastMessageDate', 'desc')
        .onSnapshot((querySnapshot) => {
          const groups = querySnapshot.docs.map((value) => ({
            id: value.id,
            ...value.data(),
          }));
          groups.map((m, index) =>
            firebase
              .firestore()
              .collection('chat_groups')
              .doc(m.id)
              .collection('messages')
              .orderBy('createdAt', 'desc')
              .get()
              .then((querySnapshot) => {
                const messages = [];
                querySnapshot.docs.forEach((doc) => {
                  const messageData = doc.data();
                  messages.push({
                    id: doc.id,
                    userId: messageData.user._id,
                    text: messageData.text,
                    product: messageData.product,
                    createdAt: messageData.createdAt,
                    isRead: messageData.isRead,
                  });
                });
                messages.sort((a, b) =>
                  a.createdAt.toMillis() < b.createdAt.toMillis() ? -1 : 1,
                );

                const lastMessage =
                  messages[messages.length - 1] || m.lastMessageDate;
                const isRead =
                  lastMessage?.userId === userId
                    ? true
                    : messages[0]?.isRead || false;
                m.members.forEach(async (member) => {
                  if (member !== userId) {
                    // firebase
                    //   .firestore()
                    //   .collection('users')
                    //   .doc(member)
                    //   .get()
                    //   .then((doc) => {
                    //     if (doc.exists) {
                    //       emitter((prev) => [
                    //         ...prev.filter((obj) => obj.userId !== member),
                    //         {
                    //           userId: member,
                    //           name: doc.data().name,
                    //           avatar: doc.data().picture,
                    //           role: doc.data().userType,
                    //           isRead,
                    //           messages,
                    //           previewMessage: lastMessage?.text || '',
                    //           id: m.id,
                    //           lastMessageDate: m.lastMessageDate
                    //         }
                    //       ]);
                    //     }
                    //   });

                    // store user info in the chat data
                    try {
                      // const chatUser = await Api.user.userByIdDetails(member);

                      const chatStore = await Api.stores.viewOne(member);
                      emitter((prev) =>
                        [
                          ...prev.filter((obj) => obj.userId !== member),
                          {
                            userId: member,
                            // name: chatUser.data.data.user?.first_name,
                            // avatar: chatUser.data.data.user?.profile_pic_url,
                            name: chatStore.data.data?.store?.name || 'No name',
                            avatar: chatStore.data.data?.store?.cover_image_url,
                            isRead,
                            MessageGroupID: m.id,
                            id: m.id,
                            previewMessage: lastMessage?.text || '',
                            messages,
                            lastMessageDate: m.lastMessageDate,
                            role: 'user',
                            pid: m?.pid,
                            index,
                          },
                        ].sort((a, b) => a.index - b.index),
                      );
                    } catch (error) {
                      console.log(error);
                    }
                  }
                });
              }),
          );
        }),
    getStoreGroups: (userId, emitter) =>
      firebase
        .firestore()
        .collection('chat_groups')
        .where('members', 'array-contains-any', [userId])
        .orderBy('lastMessageDate', 'desc')
        .onSnapshot((querySnapshot) => {
          const groups = querySnapshot.docs.map((value) => ({
            id: value.id,
            ...value.data(),
          }));
          groups.map((m, index) =>
            firebase
              .firestore()
              .collection('chat_groups')
              .doc(m.id)
              .collection('messages')
              .orderBy('createdAt', 'desc')
              .get()
              .then((querySnapshot) => {
                const messages = [];
                querySnapshot.docs.forEach((doc) => {
                  const messageData = doc.data();
                  messages.push({
                    id: doc.id,
                    userId: messageData.user._id,
                    text: messageData.text,
                    createdAt: messageData.createdAt,
                    isRead: messageData.isRead,
                  });
                });
                messages.sort((a, b) =>
                  a.createdAt.toMillis() < b.createdAt.toMillis() ? -1 : 1,
                );

                const lastMessage =
                  messages[messages.length - 1] || m.lastMessageDate;
                const isRead =
                  lastMessage?.userId === userId
                    ? true
                    : messages[0]?.isRead || false;

                m.members.forEach(async (member) => {
                  if (member !== userId) {
                    // firebase
                    //   .firestore()
                    //   .collection('users')
                    //   .doc(member)
                    //   .get()
                    //   .then((doc) => {
                    //     if (doc.exists) {
                    //       emitter((prev) => [
                    //         ...prev.filter((obj) => obj.userId !== member),
                    //         {
                    //           userId: member,
                    //           name: doc.data().name,
                    //           avatar: doc.data().picture,
                    //           role: doc.data().userType,
                    //           isRead,
                    //           messages,
                    //           previewMessage: lastMessage?.text || '',
                    //           id: m.id,
                    //           lastMessageDate: m.lastMessageDate
                    //         }
                    //       ]);
                    //     }
                    //   });

                    // store user info in the chat data
                    try {
                      // const chatUser = await Api.stores.viewOne(member);
                      const chatUser = await Api.user.userByIdDetails(member);
                      emitter((prev) =>
                        [
                          ...prev.filter((obj) => obj.userId !== member),
                          {
                            userId: member,
                            name: chatUser.data.data.user?.first_name,
                            avatar: chatUser.data.data.user?.profile_pic_url,
                            isRead,
                            MessageGroupID: m.id,
                            id: m.id,
                            previewMessage: lastMessage?.text || '',
                            messages,
                            lastMessageDate: m.lastMessageDate,
                            role: 'store',
                            pid: m?.pid,
                            index,
                          },
                        ].sort((a, b) => a.index - b.index),
                      );
                    } catch (error) {
                      console.log(error);
                    }
                  }
                });
              }),
          );
        }),
    read: (groupId, messageId) =>
      firebase
        .firestore()
        .collection('chat_groups')
        .doc(groupId)
        .collection('messages')
        .doc(messageId)
        .update({
          isRead: true,
        }),
    send: async (groupId, currentUserId, text, product) => {
      try {
        const message = {
          id: uuidv4(),
          text,
          product,
          createdAt: firebase.firestore.Timestamp.now(),
          isRead: false,
          user: {
            _id: currentUserId,
          },
        };
        const groupQuery = firebase
          .firestore()
          .collection('chat_groups')
          .doc(groupId);
        const messagesQuery = groupQuery.collection('messages');
        const messageRef = await messagesQuery.add(message);

        groupQuery.update({
          lastMessageDate: message.createdAt,
        });
      } catch (error) {
        console.log(error);
      }
      //   sendNotification({
      //     type: notificationTypes.MESSAGE,
      //     authorId: currentUserId,
      //     userId,
      //     createdAt: message.createdAt,
      //     message: { ...message, messageId: messageRef.id, docId: groupId },
      //   });
    },
    create: (members, emitter) => {
      firebase
        .firestore()
        .collection('chat_groups')
        .where('members', 'array-contains-any', [members[0]])
        .where('no_of_members', '==', members.length)
        .get()
        .then(async (querySnapshot) => {
          if (!querySnapshot.empty) {
            const matchGroups = querySnapshot.docs.filter((doc) =>
              arrayCompare(doc.data().members, members),
            );

            if (matchGroups.length === 0) {
              const documentId = await createGroup(members);

              emitter(documentId);
            } else {
              emitter(matchGroups[0].id);
            }
          } else {
            const documentId = await createGroup(members);

            emitter(documentId);
          }
        });
    },
    bulkCreate: (members, currentUserId) => {
      members.forEach((member) =>
        firebase
          .firestore()
          .collection('chat_groups')
          .where('no_of_members', '==', 2)
          .where('members', 'array-contains', member._id)
          .get()
          .then(async (querySnapshot) => {
            const currentMembers = [member._id, currentUserId];

            if (!querySnapshot.empty) {
              const matchGroup = querySnapshot.docs.find((doc) =>
                arrayCompare(doc.data().members, currentMembers),
              );

              if (!matchGroup) {
                const documentId = await createGroup(currentMembers);

                addContactMessage(documentId, currentUserId);
              } else {
                addContactMessage(matchGroup.id, currentUserId);
              }
            } else {
              const documentId = await createGroup(currentMembers);

              addContactMessage(documentId, currentUserId);
            }
          }),
      );
    },
  },
  conversations: {
    groups: (userId, emitter) =>
      firebase
        .firestore()
        .collection('chat_groups')
        .where('userId', '==', userId)
        .onSnapshot((querySnapshot) => {
          const groups = querySnapshot.docs.map((value) => ({
            id: value.id,
            ...value.data(),
          }));
          groups.sort((a, b) =>
            a.lastMessageDate.toMillis() < b.lastMessageDate.toMillis()
              ? 1
              : -1,
          );
          emitter(groups);
        }),
    groupsBuinsess: (userId, emitter) =>
      firebase
        .firestore()
        .collection('chat_groups')
        .where('storeId', '==', userId)
        // .where('members', 'array-contains-any', [userId])
        .onSnapshot((querySnapshot) => {
          const groups = querySnapshot.docs.map((value) => ({
            id: value.id,
            ...value.data(),
          }));
          console.log(groups);
          groups.sort((a, b) =>
            a.lastMessageDate.toMillis() < b.lastMessageDate.toMillis()
              ? 1
              : -1,
          );
          emitter(groups);
        }),
    create: (members, users, emitter) => {
      const groupId = `group_user${members[0]}_store${members[1]}`;
      firebase
        .firestore()
        .collection('chat_groups')
        .where('groupId', '==', groupId)
        .get()
        .then(async (querySnapshot) => {
          if (!querySnapshot.empty) {
            const matchGroups = querySnapshot.docs.filter((doc) =>
              arrayCompare(doc.data().members, members),
            );

            if (matchGroups.length === 0) {
              const documentId = await createChatGroup(members, users);

              emitter(documentId);
            } else {
              emitter(matchGroups[0].data().groupId);
            }
          } else {
            const documentId = await createChatGroup(members, users);
            emitter(documentId);
          }
        });
    },
    send: async (groupId, user, content, contentType) => {
      try {
        const message = {
          groupId,
          messageId: uuidv4(),
          content,
          contentType,
          createdAt: firebase.firestore.Timestamp.now(),
          lastMessageDate: firebase.firestore.Timestamp.now(),
          isRead: false,
          user,
        };

        //add message
        firebase.firestore().collection('chat_messages').add(message);

        var chatGroup = firebase
          .firestore()
          .collection('chat_groups')
          .doc(groupId);
        chatGroup.update({
          lastMessage: content?.name || content,
          lastMessageDate: firebase.firestore.Timestamp.now(),
        });
        // console.log('groupRef', chatGroup);
        // washingtonRef.update({
        //   regions: firebase.firestore.FieldValue.arrayUnion('greater_virginia'),
        // });

        //add lastMessage
        // firebase
        //   .firestore()
        //   .collection('chat_groups')
        //   .where(groupId, '==', groupId)
        //   .update({
        //     lastMessage: content,
        //     lastMessageType: contentType,
        //   });
      } catch (error) {
        console.log(error);
      }
    },
    read: (groupId) =>
      firebase.firestore().collection('chat_messages').doc(groupId).update({
        isRead: true,
      }),
    messages: (groupId, emitter) =>
      firebase
        .firestore()
        .collection('chat_messages')
        .where('groupId', '==', groupId)
        .onSnapshot(async (querySnapshot) => {
          const messages = [];
          querySnapshot.docs.forEach((doc) => {
            const messageData = doc.data();
            messages.push({
              ...messageData,
            });
          });
          messages.sort((a, b) =>
            a.createdAt.toMillis() < b.createdAt.toMillis() ? -1 : 1,
          );
          emitter(messages);
        }),
  },
};

export default ChatApi;
