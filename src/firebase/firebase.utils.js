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
// here we have the function that work for the fire base system
// here we add the user auth data that we get from the user auth libarary (from auth console), aand 2nd parameter is the  additional data(mite be a signUp data) here
// if there is no function so it will returns the null and exist from this function
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(` users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  // console.log(snapShot)

  // here we check that data is present or not so we display the name,email from our user auth
  // add the date to check that when we may make that document, new Date tells us the curent date that make it
  //   we add the set method to the userref and add the value by using (set method) and usee spread oprator for all the aditional value
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  // here we return the user ref to work extra with it
  // in the data base we get our data
  return userRef
}

// add shop data to the fire base
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}
// to map the snapshot data in the shop compnent
export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id.toLowerCase(),
      title,
      items,
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
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
