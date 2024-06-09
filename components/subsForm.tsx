'use client'

import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "./ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"

const schema = z.object({
    email: z.string().email({ 'message': "Invalid email..." }).min(6).max(50)
})

type formSchema = z.infer<typeof schema>

export default function SubsForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<formSchema>({ defaultValues: { email: '' }, resolver: zodResolver(schema) })
    const onSubmit = (data: formSchema) => {
        console.log(data)
        reset()
        toast.success('....')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
                <input className="outline-none px-[15px] py-[10px] rounded-[10px]" type="text" {...register('email')} />
                <Button>{
                    isSubmitting ? '...' : <ArrowRightIcon />
                }</Button>
            </div>
            {errors.email && <p className="text-red-500 font-bold text-center">{errors.email.message}</p>}
        </form>
    )
}
