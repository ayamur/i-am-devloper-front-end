// stylesheets
import logo from '../../assets/logo.jpg'
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'



interface LandingProps {
  user: User | null;
}



const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className='landtextlogo'>
      <h1>Welcome Software Engineers, Creators, Coders, Programmers and Tech Language Translators!</h1><br /> <h1>WE ARE DEVLOPERS!!!</h1>
      <img src={logo} alt='facepalm' id='landlogo' />
    </main>
  )
}



export default Landing