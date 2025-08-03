import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  onSubmit?: (data: FormValues) => void;
  title?: string;
  description?: string;
  submitButtonText?: string;
}

const LeadCaptureForm = ({
  onSubmit = () => {},
  title = "Get in touch",
  description = "Ready to scale your outbound efforts? Fill out the form below and we'll get back to you within 24 hours.",
  submitButtonText = "Submit",
}: LeadCaptureFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const handleSubmit = (data: FormValues) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#111]">
      <Card className="border border-gray-700 shadow-xl bg-[#1a1a1a]/90 backdrop-blur-sm rounded-3xl">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold text-white">
            {title}
          </CardTitle>
          <CardDescription className="text-lg text-gray-300 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200 font-semibold">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="h-12 rounded-xl border-gray-600 bg-[#2a2a2a] text-white focus:border-[#ff5a00] focus:ring-[#ff5a00]/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200 font-semibold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        className="h-12 rounded-xl border-gray-600 bg-[#2a2a2a] text-white focus:border-[#ff5a00] focus:ring-[#ff5a00]/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200 font-semibold">
                      Company
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company"
                        className="h-12 rounded-xl border-gray-600 bg-[#2a2a2a] text-white focus:border-[#ff5a00] focus:ring-[#ff5a00]/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200 font-semibold">
                      Message (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your outbound needs"
                        className="min-h-[120px] rounded-xl border-gray-600 bg-[#2a2a2a] text-white focus:border-[#ff5a00] focus:ring-[#ff5a00]/20 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      Share any specific challenges or goals you have.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-12 bg-[#ff5a00] hover:bg-[#e14a00] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {submitButtonText}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-400 pb-8">
          We respect your privacy and will never share your information.
        </CardFooter>
      </Card>
    </div>
  );
};

export default LeadCaptureForm;
