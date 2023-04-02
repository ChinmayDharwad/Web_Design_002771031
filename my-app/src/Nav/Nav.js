import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Job Portal
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/jobs">Jobs</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}