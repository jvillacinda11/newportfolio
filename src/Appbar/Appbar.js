import {
  Navbar,
  NavItem,
  Nav,
  NavLink,
  NavbarBrand
} from 'reactstrap'
import {Link} from 'react-router-dom'
import './AppBar.css'

const AppBar = () => {

return(
  <Navbar color= 'light' light expand= 'md' className='navbarmargin'>
    <Link to='/'>
        <NavbarBrand>Jose Villacinda</NavbarBrand>
    </Link>
    <Nav>
      <NavItem>
        <Link to='/Contact'>
        <NavLink> Contact</NavLink>
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
)

}
export default AppBar