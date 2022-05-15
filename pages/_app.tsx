import { AppProps } from "next/app"
import "../src/assets/styles/main.scss"
import Header from "./components/default/header"
import Footer from "./components/default/footer"
import { useRouter } from "next/router"
import { dontShowHeaderAndFooter } from "./components/default/emuns/dontShowHeaderAndFooter"
import { Container } from "@mui/material"

function MyApp({ Component, pageProps }:AppProps) {

  const router = useRouter()

  const showHeaderAndFooter = () => {
    return !(dontShowHeaderAndFooter.indexOf(router.asPath) > -1)
  }

  return (
    <>
      {showHeaderAndFooter() && <Header/>}
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
      {/* {showHeaderAndFooter() && <Footer/>} */}
    </>
    )
}

export default MyApp
