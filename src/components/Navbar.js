import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import Avatar from "./Avatar"

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">AMAZINO FITNESS</Link>
        </li>

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && (
          <>
            <div className="btn" style={{marginRight:'2rem'}}>
              <li ><Link to="/allUsers">All Gym Members</Link></li>
            </div>

            <li><Avatar name={user.displayName} src={user.photoURL} /></li>

            <li style={{marginLeft:'2rem'}}>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
