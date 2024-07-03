import { fetchSpecificMovie } from '@/app/api'
import NotFound from '@/app/not-found'
import { Metadata } from 'next'
import React from 'react'

type PageProps = {
  params: {
    slug: number
  }
}

export async function generateMetadata({ params: { slug } }: PageProps): Promise<Metadata> {
  const { data } = await fetchSpecificMovie(slug)
  return {
    title: data.title,
    description: data.overview
  }
}

export default async function SpecificMovie({ params: { slug } }: PageProps) {
  const { data } = await fetchSpecificMovie(slug)
  return (
    <div className='container'>{JSON.stringify(data)}</div>
  )
}
