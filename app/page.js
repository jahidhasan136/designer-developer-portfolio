import Image from 'next/image'
import Banner from './component/Banner/Banner'
import Services from './component/Services/Services'
import About from './component/About/About'

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <About></About>
    </>
  )
}
