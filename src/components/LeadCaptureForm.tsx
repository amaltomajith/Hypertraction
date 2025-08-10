import React, { useState } from "react";
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
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

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
  googleScriptUrl?: string;
}

const LeadCaptureForm = ({
  onSubmit = () => {},
  title = "Get in touch",
  description = "",
  submitButtonText = "Submit",
  googleScriptUrl = "",
}: LeadCaptureFormProps) => {
  // Debug logging for environment variable
  console.log("Google Script URL received:", googleScriptUrl);
  console.log(
    "Environment variable VITE_GOOGLE_SCRIPT_URL:",
    import.meta.env.VITE_GOOGLE_SCRIPT_URL,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const handleSubmit = async (data: FormValues) => {
    if (!googleScriptUrl) {
      // Fallback to custom onSubmit if no Google Script URL provided
      onSubmit(data);
      form.reset();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Prepare form data for Google Apps Script
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("company", data.company);
      formData.append("message", data.message || "");
      formData.append("timestamp", new Date().toISOString());
      formData.append("source", "hypertraction-website");

      // Submit to Google Apps Script
      const response = await fetch(googleScriptUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Apps Script
      });

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      setSubmitStatus("success");
      form.reset();
      onSubmit(data); // Call custom onSubmit if provided

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Failed to submit form. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#111]">
      <Card className="border border-gray-700 shadow-xl bg-[#1a1a1a]/90 backdrop-blur-sm rounded-3xl">
        <CardHeader className="text-center pb-8">
          {title && (
            <CardTitle className="text-3xl font-bold text-white">
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription className="text-lg text-gray-300 leading-relaxed">
              {description}
            </CardDescription>
          )}

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-green-900/30 border border-green-700 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-green-300 font-medium">
                Thank you! We'll get back to you within 24 hours.
              </span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-red-900/30 border border-red-700 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <span className="text-red-300 font-medium">{errorMessage}</span>
            </div>
          )}
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
                disabled={isSubmitting || submitStatus === "success"}
                className="w-full h-12 bg-[#ff5a00] hover:bg-[#e14a00] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Submitted!
                  </>
                ) : (
                  submitButtonText
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-sm text-gray-400 pb-8 space-y-2">
          <p>We respect your privacy and will never share your information.</p>
          {googleScriptUrl ? (
            <p className="text-xs text-gray-500">
              ✓ Secured with SPF, DMARC, and DKIM email authentication
            </p>
          ) : (
            <div className="text-xs text-red-400 space-y-1">
              <p>⚠ Google Apps Script URL not configured</p>
              <p className="text-xs text-gray-500">
                Debug: URL = "{googleScriptUrl || "empty"}"
              </p>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default LeadCaptureForm;
