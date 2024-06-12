type PageProps = {
    searchParams: {
        q: string
    }
}

export default function SearchResults({ searchParams: { q } }: PageProps) {
    return (
        <div>Your search is {q}</div>
    )
}
