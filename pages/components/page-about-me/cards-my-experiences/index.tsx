import { Grid } from "@mui/material"
import { datasAboutExperiences } from "../../../datasInArrayToMap/datasAboutExperiences"
import CardData from "../../default/cards/card-data"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function CardsMyExperiences() {
  return (
    <section>
        <Grid container spacing={3}>
            {
                datasAboutExperiences.map((item, index) => {
                    return (
                        <Grid key={index} item md={3} xs={12}>
                            <CardData icon={<InsertEmoticonIcon/>} quantity={item.value} label={item.label}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    </section>
  )
}