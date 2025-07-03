import { Outlet } from 'react-router-dom'
import Header from '../components/top-navs'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Publiclayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="responsive-main">
  <Outlet />
</main>

      <Footer />
    </>
  )
}

export default Publiclayout
