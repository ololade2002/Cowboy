import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Lease a Cowboy',
    description: 'Electric Bike For Urban Riders',
  }

export default function LeasingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        
        {children}
      </section>
    )
  }