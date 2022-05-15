import { AppProps } from "next/app"
import "../src/assets/styles/main.scss"
import Header from "./components/default/header"
import Footer from "./components/default/footer"
import { useRouter } from "next/router"
import { dontShowHeaderAndFooter } from "./components/default/emuns/dontShowHeaderAndFooter"
import { Container } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import MenuMobile from "./components/default/menuMobile"
import { useState } from "react"

function MyApp({ Component, pageProps }:AppProps) {

  const router = useRouter()

  const showHeaderAndFooter = () => {
    return !(dontShowHeaderAndFooter.indexOf(router.asPath) > -1)
  }

  const [activeMenu, setActiveMenu] = useState(false)

  const activeMenuMobile = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <>
      {showHeaderAndFooter() && <Header/>}
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
        <MenuIcon style={{zIndex:10}} onClick={activeMenuMobile} id="hamburguer-icon" className="cursor-pointer"/>
        {
          activeMenu && <MenuMobile/>
        }
      {/* {showHeaderAndFooter() && <Footer/>} */}
    </>
    )
}

export default MyApp
