"use client";

import * as z from "zod";
import axios from "axios";

import { Form, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }),
});

function CreatePage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
            <div>
                <h1 className="text-2xl">Name your course</h1>
            </div>
            <p className="text-sm text-slate-600">
                What would you like to name your course? Don&apos;t worry, you
                can change this late
            </p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 mt-8"
                >

                </form>
            </Form>
        </div>
    );
}
export default CreatePage;
