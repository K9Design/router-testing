import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () =>
  <>
    <main className='MainWrapper'>
      <div className='MainPage'>
        <Header />
        <div className='OutletPages'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  </>

export default MainLayout