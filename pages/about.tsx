import React from 'react'
import Head from 'next/head'
import Gap from './components/default/gap'
import LearnMoreAboutMe from './components/page-about-me/learn-more-about-me'
import CardsMyExperiences from './components/page-about-me/cards-my-experiences'
import ProgressExperiences from './components/page-about-me/progress-experiences'
import TestimonialsEffectCards from './components/page-about-me/testimonials/effect-cards'

export default function About() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <main id="page-about">
        <Gap>
          <>
            <LearnMoreAboutMe/>
            <CardsMyExperiences/>
            <ProgressExperiences/>
            <TestimonialsEffectCards/>
          </>
        </Gap>
      </main>
    </>
  )
}