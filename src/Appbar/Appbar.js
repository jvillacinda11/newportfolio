import {
  Navbar,
  NavItem,
  Nav,
  NavLink,
  NavbarBrand
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './AppBar.css'


const AppBar = () => {

return(
  <Navbar color= 'light' light expand= 'md' className='navbarmargin'>
    <Link to='/' className='link'>
        <NavbarBrand>Jose Villacinda</NavbarBrand>
    </Link>
    <Nav navbar>
      <NavItem>
        <Link to='/Contact' className='link'>
        <NavLink> Contact</NavLink>
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
)

}
export default AppBar