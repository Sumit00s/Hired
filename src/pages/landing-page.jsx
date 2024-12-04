import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader,CardTitle,CardContent } from "@/components/ui/card"
import { Carousel,CarouselContent,  CarouselItem,} from "@/components/ui/carousel"
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion"
import Autoplay from "embla-carousel-autoplay"
import companies from '../data/companies.json'
import faq from '../data/faq.json'

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-15 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='sm:text-6xl lg:text-8xl flex flex-col items-center justify-center gradient-title text-4xl font-extrabold tracking-tighter py-4'>Find Your Dream Job {" "} <span className='flex items-center gap-2 sm:gap-6'>and get {" "}<img className='h-14 sm:h-24 lg:h-32' src="./logo.png" alt="logo" /></span></h1>
        <p className='text-gray-400 font-semibold sm:mt-4 text-xs sm:text-xl'>Explore thousands of job listings tailored to your skills or find the perfect candidate</p>
      </section>

      <div className='flex gap-6 justify-center'>
        {/* Buttons */}
        <Link to='/jobs'><Button variant="blue" size='xl'>Find Jobs</Button></Link>
        <Link to='/post-job'><Button variant="destructive" size='xl'>Post Jobs</Button></Link>
      </div>

      {/* carousel */}
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-11/12 py-10 mx-auto">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {
            companies.map(({name,id,path})=>{
              return <CarouselItem key={id} className="basis-1/3 lg:basis-1/6"><img className='h-9 sm:h-14 object-contain' src={path} alt={name} /></CarouselItem>
            })
          }
        </CarouselContent>
      </Carousel>


      {/* banner */}
      <img src="./banner.jpeg" alt="banner" className='w-11/12 mx-auto'/>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto'>

          <Card>
            <CardHeader>
              <CardTitle>For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Search and apply for jobs, track applications, and more.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post jobs, manage applications, and find the best candidates.
            </CardContent>
          </Card>

      </section>

      {/* Accordian */}
      <Accordion type="single" collapsible className="w-11/12 mx-auto">
        {
          faq.map(({question,answer},index)=>{
            return <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                  </AccordionItem>
          })
        }
      </Accordion>

    </main>
  )
}

export default LandingPage