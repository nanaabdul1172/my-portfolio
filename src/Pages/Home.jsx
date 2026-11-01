import Header from '../Components/Header'
import HomeCardOne from '../Components/HomeCardOne'
import HomeCardTwo from '../Components/HomeCardTwo'
import Footer from '../Components/Footer'
import Background from '../assets/landscape4.jpg'


export default function Home() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Header />
      <HomeCardOne/>
      <HomeCardTwo/>
      <Footer/>
    </div>
    </div>
  )
}
