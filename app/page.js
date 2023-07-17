import Banner from './component/Banner/Banner'
import Services from './component/Services/Services'
import About from './component/About/About'
import WorkingProcess from './component/WorkingProcess/WorkingProcess'
import Footer from './component/Footer/Footer'

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <WorkingProcess></WorkingProcess>
      <Footer></Footer>
    </>
  )
}
