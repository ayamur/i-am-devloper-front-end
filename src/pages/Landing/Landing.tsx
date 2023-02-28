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
    <main className={styles.container}>
      <h1>PlaceHolder <br/> Words</h1>
      <img src={logo} alt="facepalm" />
    </main>
  )
}

export default Landing
