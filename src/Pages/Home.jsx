import Header from '../Components/Header'
import HomeCardOne from '../Components/HomeCardOne'
import HomeCardTwo from '../Components/HomeCardTwo'
import Footer from '../Components/Footer


export default function Home() {
  return (
    <div>
        <div style={{ backgroundImage: `url('/pinkbg.jfif')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Header />
      <HomeCardOne/>
      <HomeCardTwo/>
      <Footer/>
    </div>
    </div>
  )
}
