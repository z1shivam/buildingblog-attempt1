"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoSearch } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  query: z.string().min(1, {
    message: "Searchbox is empty.",
  }),
});

export function SearchBox() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-3 flex w-full">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Search adventures..." {...field} className="bg-white h-12 dark:bg-slate-800 dark:border-2 dark:border-slate-600 placeholder:text-base"/>
              </FormControl>
             
            </FormItem>
          )}
        />
        <Button type="submit" variant={"default"} size={"icon"} className="bg-emerald-800 h-12 w-14 dark:bg-emerald-900 hover:bg-emerald-800 dark:hover:bg-emerald-900"><IoSearch className="h-6 w-6 dark:text-yellow-50"/></Button>
      </form>
    </Form>
  );
}
