import firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

import firebase_config from './firebase_config';

const firebaseApp = firebase.initializeApp(firebase_config)
const database = firebaseApp.firestore()



export default {

  facebookLoginPopup: async () => {

      console.log('')
  console.log('Start login')
    console.log('')

    const provider = new firebase.auth.FacebookAuthProvider();

    console.log('')
console.log('get facebook provider')
    console.log('')
    console.log('')
console.log(provider)
    console.log('')

    let result = await firebaseApp.auth().signInWithPopup(provider)
//firebaseapp.auth().signInWithPopup()
    
console.log('')
console.log('Login Result')
console.log('')
    console.log(result)
    console.log('')

    return result;
  },

  addUser: async (user) => {
    await database.collection("User").doc(user.id).set(
      {
      name: user.name,
      avatar: user.avatar,
    }, {merge: true})
  },

  getContactList: async (userId) => {

    let list = []

    let results = await database.collection("User").get()

    results.forEach(result => {
      let userData = result.data();

      if (result.id !== userId) {
        list.push({

          id: result.id,
          name: userData.name,
          avatar: userData.avatar
        });
      }
    })

    return list;
  },

  getUser: async (userId) => {

    let user = {}

    let result = await (await database.collection("User").doc(userId).get()).data()


    user = {
      id: result.id,
      name: result.name,
      avatar: result.avatar
    }

    // results.forEach(result => {

    //   let userData = result.data()

    //   if (result.id === userId) {

    //     user = {
    //       id: result.id,
    //       name: userData.name,
    //       avatar: userData.avatar
    //     }

    //   }
    // });

    return user;

  },

  newChat: async (user, contact) => {

    let newChat = await database.collection("Chat").add({

      messages: [],
      users:[user.id, contact.id]

    });

    database.collection("User").doc(user.id).update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        title: contact.name,
        image: contact.avatar,
        with: [contact.id]
      })
    });

    database.collection("User").doc(contact.id).update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        title: user.name,
        image: user.avatar,
        with: [user.id]
      })
    });

    return newChat;
  },

  onChatList: (userId, setContacts) => {

    return database.collection("User").doc(userId).onSnapshot((doc) => {

      if (doc.exists) {
        let userData = doc.data();

        if (userData.chats) {

          let chats = [...userData.chats];

          chats.sort((a,b) => {
            if (a.lastMessageDate === undefined) {

              return -1;
            }

            if (b.lastMessageDate === undefined) {

              return -1;
            }

            if (a.lastMessageDate.seconds < b.lastMessageDate.seconds) {
              return 1;

            } else {
              return -1;
            }
          })
          setContacts(chats)
        }
      }
    })
  },

  onChatContent: (chatId, setMessageList, setUsers) => {
    return database.collection('Chat').doc(chatId).onSnapshot(doc => {
      if (doc.exists) {
        let chatData = doc.data();
        console.log(chatData)
        setMessageList(chatData.messages);
        setUsers(chatData.users)
      }

    })
  },

  sendMessage: async (chatData, userId, type, body, users) => {

    let now = new Date();

    database.collection("Chat").doc(chatData.chatId).update({
      messages: firebase.firestore.FieldValue.arrayUnion({
        type,
        author: userId,
        body,
        date: now
      })
    });

    for (let i in users) {

      let user = await database.collection('User').doc(users[i]).get();

      let userData = user.data();

      if (userData.chats) {

        let chats = [...userData.chats];

        for (let e in chats) {

          if (chats[e].chatId === chatData.chatId) {

            chats[e].lastMessage = body;
            chats[e].lastMessageDate = now;
          }
        };

        await database.collection('User').doc(users[i]).update({
          chats
        })
      }
    }
  }
}
