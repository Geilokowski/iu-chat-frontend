import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

const SignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    googleAuthProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
    const auth = getAuth();

    const signInWithGoogle = () => {
        // This should handle error
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user;
                if(!user) return;

                user.getIdToken().then((tkn)=>{
                    // set access token in session storage
                    sessionStorage.setItem("access-token", tkn);
                    sessionStorage.setItem("username", user.displayName);

                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                })

                console.log(user);
            });
    }

    return(<button onClick={signInWithGoogle}>Sign in with Google</button>);
}

export default SignIn;