import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <div className='Nav'>
      <ul className='Nav-ul'>
        <li className='Nav-li'><NavLink to="Home">Home</NavLink></li>
        <li className='Nav-li'><NavLink to="Misdemeanors">Misdemeanors</NavLink></li>
        <li className='Nav-li'><NavLink to="Confess">Confess to us</NavLink></li>
      </ul>
    </div>

  )
}

export default Nav