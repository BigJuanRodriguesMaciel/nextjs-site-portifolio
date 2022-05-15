import { Box, Link } from '@mui/material'
// import router from 'next/router'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from "next/router"
import { menuNavLinks, socialMidiasLinks } from '../emuns/menu-nav-links';

interface Props {
  choice?: Number
}

export default function MenuNavLinks({choice = 2}:Props) {
  const router = useRouter()
  const compareStrings = (elements:Array<string>) => {
    return !elements[0].localeCompare(elements[1])
  }
  const getClass = (el:String) => {
    const itemToCompare = el.toLowerCase()
    // if(el.toLocaleLowerCase() == 'home') return 'menu-after-active'
    return compareStrings([`${itemToCompare}`, router.asPath.replace(/[^\w\s]/gi, '')]) ? 'menu-after-active' : ''
  }
  return (
    <div id="menuNavLinks">
      <div>
        <Box sx={{ my: 4 }}>
          <ul>
            {
              menuNavLinks.map((item, index) => {
                return (
                  <li key={`menuNavLinks-${index}`}>
                    <Link className={`position-relative ${getClass(item)}`} href={`/${index == 0 ? '' : item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </Box>
        {
          choice == 1 || choice == 2 &&
          <ul id="social-midia">
            {
              socialMidiasLinks.map((item, index) => {
                return (
                  <li key={`social-midia-${index}`} className="j-c-center">
                    <Link className="j-c-center" href={`/${item.toLowerCase()}`}>{
                      index == 0 ? <LinkedInIcon/> :
                      index == 1 ? <InstagramIcon/> :
                      <GitHubIcon/>
                    }</Link>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>
    </div>
  )
}