import { Grid } from "@mui/material"
import { datasAboutMe } from "../../../datasInArrayToMap/datasAboutMe"
import PageTitle from "../../default/page-title"
import Image from 'next/image'
import image from "../../../../src/assets/me/me.jpeg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function LearnMoreAboutMe() {
  return (
    <section>
        <PageTitle title="learn more about me"/>
        <Grid container spacing={2}>
            <Grid item md={4}>
            <Image
                src={image}
                alt="Picture of the author"
                width={500}
                height={500}
            />
            </Grid>
            <Grid item md={8}>
            <div id="arrows-about-me">
                <div>
                <h2 className="sub-big-title f-w-500 color-main-highlight">FrontEnd Web Developer | techLead</h2> 
                <p style={{padding: '10px 0 15px 0'}}>Lorem Ipsum</p>
                </div>
                <Grid container>
                <>
                    {
                    datasAboutMe.map((item) => {
                        return(
                        <Grid key={item.label} item md={6} className="d-flex" style={{marginBottom: '25px'}}>
                            <ArrowForwardIosIcon className="icon" style={{margin: '3px 5px 0 0'}}/>
                            <h3 className="f-w-400"><strong className="f-w-700">{item.label}: </strong> {item.value}</h3>
                        </Grid>
                        )
                    })
                    }
                </>
                </Grid>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            </div>
        </Grid>
        </Grid>
    </section>
  )
}