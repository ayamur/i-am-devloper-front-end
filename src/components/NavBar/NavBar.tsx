// npm modules
import { NavLink } from 'react-router-dom'

// assets
import logo from '../../assets/logo.jpg'

// types
import { User } from '../../types/models'



interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}



const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props

  return (
    <nav>
      <div className='navlogobtns'>
        <NavLink to='/posts'><button className='navbtns'>
          <img src={logo} alt='facepalm' id='navlogo' /></button>
        </NavLink>
        {user ?
          <ul>
            <NavLink to='/posts'><button className='navbtns'>The Posts!</button></NavLink>
            <NavLink to='/postpost'><button className='navbtns'>Create A Post!</button></NavLink>
            <NavLink to='/change-password'><button className='navbtns'>Change Password</button></NavLink>
            <NavLink to='' onClick={handleLogout}><button className='navbtns'>Log Out!</button></NavLink>
            <p>Welcome! {user.name}!</p>
          </ul>
          :
          <ul>
            <NavLink to='/login'><button className='landbtns'>Log In!</button></NavLink>
            <NavLink to='/signup'><button className='landbtns'>Sign Up!</button></NavLink>
          </ul>
        }
      </div>
    </nav>
  )
}



export default NavBar












{/* commented out for future icebox implementation */ }
{/* <li><NavLink to='/profiles'>Profiles</NavLink></li>  */ }