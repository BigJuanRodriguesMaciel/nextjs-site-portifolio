import { Box } from "@mui/material"
import Head from 'next/head'
import  TitleDescribe  from "../pages/components/default/title-describe"
import MenuNavLinks from "./components/default/menu-nav"

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Rodrigues Maciel | FrontEnd Web Developer</title>
      </Head>
      <Box className="c-center" sx={{ height: '92.5vh' }}>
        <div>
          <TitleDescribe 
            title="Juan Maciel" 
            describe={{
              start: "I'm a passionate",
              highlight: "Front-Web Developer",
              end: "from Brazil"
            }}
          />
          <Box style={{width: 550}}>
            <MenuNavLinks/>
          </Box>
        </div>
      </Box>
    </>
  )
}
