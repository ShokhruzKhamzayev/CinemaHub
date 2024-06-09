import React from 'react'

type PageProps = {
  params: {
    slug: string
  }
}

export default function SpecificMovie({ params: { slug } }: PageProps) {
  return (
    <div className='container'>SpecificMovie {slug}</div>
  )
}
