import './globals.css'
import type { Metadata } from 'next'
import {Roboto, Quicksand,Raleway,Montserrat} from 'next/font/google'

const sand = Quicksand({
  weight:['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-sand'
})

const monsterrat = Montserrat({
  weight:['200','300','400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-mont'
})

const roboto = Roboto({
 weight:['300','400','500','700','900'],
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-roboto'
})

const rale = Raleway({
  weight: ['200','300','400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-raleway',
  
})


export const metadata: Metadata = {
  title: 'Cowboy - Electric Bike',
  description: 'Electric Bike For Urban Riders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rale.variable} ${sand.variable} ${roboto.variable} ${monsterrat.variable}`} >
      {children}
      </body>
    </html>
  )
}

