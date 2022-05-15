import Head from 'next/head'
import { Grid } from "@mui/material"
import Gap from "./components/default/gap";
import PageTitle from './components/default/page-title';
import SectionShowSummary from "./components/page-sumary/section-show-summary";
import { datasResume } from './datasInArrayToMap/datasResume'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Masonry } from '@mui/lab';


export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <main id="page-resume">
        <Gap>
          <>
          <PageTitle title="check my resume"/>
            <Masonry
              columns={{ xs: 1, lg:2 }}
              defaultHeight={450}
              defaultColumns={2}
              defaultSpacing={0}
            >
              {
                datasResume.map((item, index) => {
                  return(
                    <Grid key={index} item md={6}>
                        <SectionShowSummary title={item.title} content={item.datasResume} />
                    </Grid>
                  )
                })
              }
            </Masonry>
          </>
        </Gap>
      </main>
    </>
  )
}