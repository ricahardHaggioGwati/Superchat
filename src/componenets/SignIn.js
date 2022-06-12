const SignIn = (props) => {
    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    
    return (
        <button onClick={SignInWithGoogle}>Sign In with Google</button>
    )
}

export default SignIn