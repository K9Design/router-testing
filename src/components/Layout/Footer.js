import { NavLink } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='Footer' >
      <h2>All rights (even yours) reserved Department of Safety</h2>
      <p>Any errors on this page is the fault of hackers, who will be procecuted!</p>
      <p>Made by <NavLink to="Johnny">Johnny</NavLink> (age 8)</p>
    </div>
  )
}

export default Footer;