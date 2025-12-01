import PageTransition from '@/common/PageTransition'
import Timeline from '@/components/Work'
import React from 'react'

function page() {
  return (
    <>
      <PageTransition />
      <main>
      <Timeline/>
    </main>
    </>
  )
}

export default page
