import React, { useState } from 'react'
import { Fade, Grid, Grow } from "@mui/material"
import CardRecipeReview from '../cards/card-recipe-review'
import PageTitle from '../page-title'
import { Masonry } from '@mui/lab'

type Props = {
    projects: [
       {
            function: String,
            links:{
                logoLink: String,
                linkOfProject: String,
            },
            name: String,
            showText: String,
            longText: String
       } 
    ]
}

export default function ProjectsWorked({projects}: any) {
    return (
        <section style={{marginTop: 50}} className="d-flex j-c-center j-c-c-center">
            <Masonry
                columns={{lg:4, xs:1}}
                defaultHeight={450}
                defaultColumns={2}
                defaultSpacing={2}
            >
                {
                projects?.map((item, index) => {
                    return (
                        <Grow in={true}>
                            <Grid key={index} item md={3} className="d-flex j-c-center j-c-c-center">
                                <CardRecipeReview functions={item.function} name={item.name} links={item.links} shortText={item.showText} longText={item.longText} projectColor={""}/>
                            </Grid>
                        </Grow>
                    )
                })
                }
            </Masonry>
        </section>
    )
}