import { fetchSpecificMovie } from '@/app/api'
import React from 'react'

type PageProps = {
  params: {
    slug: number
  }
}

export default async function SpecificMovie({ params: { slug } }: PageProps) {
  const { data } = await fetchSpecificMovie(slug)
  return (
    <div className='container'>{JSON.stringify(data)}</div>
  )
}
