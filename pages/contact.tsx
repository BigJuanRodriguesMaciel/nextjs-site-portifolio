import Head from 'next/head'
import React from 'react'
import { Grid } from "@mui/material"
import CardContact from './components/default/cards/card-contact'
import Gap from './components/default/gap'
import PageTitle from './components/default/page-title'
import { datasContact } from './datasInArrayToMap/datasContact'
import FormContact from './components/default/forms/form-contact'

export default function Contact() {
  return (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <main id="page-about">
            <Gap>
                <>
                    <PageTitle title="My Works"/>
                    <Grid container spacing={2}>
                        {
                            datasContact.map((item, index) => {
                                return(
                                    <Grid key={index} item md={6}>
                                        <CardContact key={index} type={item.type} title={item.title} link={{
                                            icon: item.link.icon,
                                            to: item.link.to,
                                            label: item.link.label,
                                        }}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <FormContact/>
                </>
            </Gap>
        </main>
    </>
  )
}   