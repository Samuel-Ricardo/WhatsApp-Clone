import firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore'

import firebase_config from './firebase_config';

const firebaseapp = firebase.initializeApp(firebase_config)
const database = firebase.firestore()

export default {
  facebookLoginPopup: async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider)

    return result;
  },

  addUser: async (user) => {
    await database.collection("User").doc(user.id).set({

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
    })

  }
}
