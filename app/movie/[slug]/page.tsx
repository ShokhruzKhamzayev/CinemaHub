import { fetchSpecificMovie } from '@/app/api'
import NotFound from '@/app/not-found'
import React from 'react'

type PageProps = {
  params: {
    slug: number
  }
}

export default async function SpecificMovie({ params: { slug } }: PageProps) {
  const { data, status } = await fetchSpecificMovie(slug)
  if (status === 404) {
    return <NotFound />
  }
  return (
    <div className='container'>{JSON.stringify(data)}</div>
  )
}
