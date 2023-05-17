import FooterComponent from './footer/footer'
import NavBarComponent from './navbar/navbar'

export default function Layout({ children }) {
  return (
    <>
      <NavBarComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  )
}
