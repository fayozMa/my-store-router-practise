import {useLogin} from '../hooks/useLogin'
function Login() {
  const {signUpWithGoogle} = useLogin()
  return (
    <div className='min-h-screen grid place-items-center'>
      <button onClick={signUpWithGoogle} className='btn btn-primary'>Google</button>
    </div>
  )
}

export default Login