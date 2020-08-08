import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAVJCCqx5ghSnYUISE2prssjkcIOe8B8uk",
    authDomain: "devtter-cd96e.firebaseapp.com",
    databaseURL: "https://devtter-cd96e.firebaseio.com",
    projectId: "devtter-cd96e",
    storageBucket: "devtter-cd96e.appspot.com",
    messagingSenderId: "54600243062",
    appId: "1:54600243062:web:35149c5e2eac18ac684c57",
    measurementId: "G-6RPXX5MXJT"
  };

  firebase.initializeApp(firebaseConfig)

  export const firebaseLogin = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
  }