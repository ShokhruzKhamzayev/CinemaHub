'use client'

import { useForm } from "react-hook-form"
import { Button } from "./button"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

const schema = z.object({
    query: z.string().min(4).max(30)
})

type formSchema = z.infer<typeof schema>

export default function SearchInput({ setClicked }: { setClicked: Function }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<formSchema>({ defaultValues: { query: '' }, resolver: zodResolver(schema) })

    const router = useRouter()
    const onSubmit = (data: formSchema) => {
        router.push(`/search?q=${data.query}`)
        reset()
        close
        setClicked(false)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('query')} />
            {errors.query && <p className="font-bold text-red-500">{errors.query.message}</p>}
            <Button><ArrowRightIcon /></Button>
        </form>
    )
}
