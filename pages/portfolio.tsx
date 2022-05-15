import { Button, Card, Chip, Divider } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Gap from './components/default/gap'
import PageTitle from './components/default/page-title'
import ProjectsWorked from './components/default/projets-worked'
import { datasProjects } from './datasInArrayToMap/datasProjects'

export default function Portfolio() {
  const [projects, setProjects] = useState(datasProjects)
  const [functionSelected, setFunctionSelected] = useState("all")
  const buttons = [
    {title: "All",value: "all"},
    {title: "As Techlead",value: "techlead"},
    {title: "As Developer",value: "developer"},
    {title: "Web Sites",value: "websites"},
    {title: "Systems",value: "systems"},
  ]
  const getProjects = () => {
    setProjects([])
    setTimeout(() => {
      const filter = functionSelected == 'all' ? datasProjects : datasProjects.filter(item => item.function == functionSelected)
    setProjects(filter)
    }, 100);
  }
  useEffect(() => {
    getProjects()
  }, [functionSelected])
  
  return (
    <section>
      <Head>
        <title>Portfólio</title>
      </Head>
      <main id="page-portifolio">
        <Gap>
          <>
            <PageTitle title="My Works"/>
            <div id="filter">
              <div className="d-flex j-c-center j-c-c-center">
                {
                  buttons.map((item, index) => {
                    return(
                      <>
                        <Divider/>
                        <Button variant="outlined" onClick={() => {
                          setFunctionSelected(item.value)
                        }} sx={{ m: 1 }} className={`outlined ${functionSelected == item.value && 'active-button-with-background'}`}>{item.title}</Button>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <ProjectsWorked projects={projects}/>
          </>
        </Gap>
      </main>
    </section>
  )
}