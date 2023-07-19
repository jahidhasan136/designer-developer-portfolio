import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <Header></Header>
      <body>{children}</body>
      <Footer></Footer>
    </html>
  )
}
