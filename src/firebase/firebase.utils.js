// ther eis no need to add the varible value to the auth and data base bcz they automaticlay attached to it
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyCzLp1t75igpJZgKZJB2vLYn-1XbM3F930',
  authDomain: 'crwn-app-f3d27.firebaseapp.com',
  projectId: 'crwn-app-f3d27',
  storageBucket: 'crwn-app-f3d27.appspot.com',
  messagingSenderId: '497978817147',
  appId: '1:497978817147:web:6058af8ca0535d95f440de',
  //   measurementId: '${config.measurementId}',
}

firebase.initializeApp(config)

// adding auth into the app file so that the app will awaire that the data is logined
export const auth = firebase.auth()
export const firestore = firebase.firestore()

// google authantication,we may add fb,twiter provider also
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

//add the popup that takes the class of provider,here we get only the
// add this in sign in page
export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export fire base we have the hole libaray
export default firebase
