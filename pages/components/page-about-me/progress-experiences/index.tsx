import { Grid } from "@mui/material";
import { datasAboutSkills } from "../../../datasInArrayToMap/datasAboutSkills";
import PageTitle from "../../default/page-title";
import ProgressLine from "../../default/progress-line";

export default function ProgressExperiences() {
  return (
    <>
      <section  style={{marginTop: 50}}>
        <PageTitle overTitle="Skills"/>
        <div id="progress">
          <Grid container spacing={2} style={{marginTop: 0}}>
            {
              datasAboutSkills.map((item, index) => {
                return(
                  <Grid key={index} item md={6}>
                    <ProgressLine label={item.label} progress={item.value}/>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </section>
    </>
  )
}