import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, Briefcase, TrendingUp, Newspaper } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface ServicesPanelProps {
  className?: string;
}

const ServicesPanel = ({ className = "" }: ServicesPanelProps) => {
  const services: ServiceItem[] = [
    {
      id: "email-marketing",
      title: "Email Marketing",
      description:
        "Strategic email campaigns designed to nurture leads and drive conversions with personalized messaging that resonates with your target audience.",
      icon: <Mail className="h-6 w-6 text-primary" />,
      benefits: [
        "Targeted audience segmentation",
        "A/B testing for optimal performance",
        "Conversion-focused copywriting",
        "Detailed analytics and reporting",
      ],
    },
    {
      id: "personalized-outbound",
      title: "Personalized Outbound",
      description:
        "Highly customized outreach strategies that cut through the noise and connect with decision-makers through relevant, value-driven communication.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      benefits: [
        "Research-backed prospect targeting",
        "Custom messaging frameworks",
        "Multi-touch engagement sequences",
        "Continuous optimization based on response data",
      ],
    },
    {
      id: "sdr-services",
      title: "SDR Services",
      description:
        "Comprehensive sales development representation that combines email outreach and phone follow-up to qualify leads and book meetings with potential clients.",
      icon: <Phone className="h-6 w-6 text-primary" />,
      benefits: [
        "Dedicated sales development representatives",
        "Integrated email and phone strategies",
        "Meeting scheduling and qualification",
        "CRM integration and pipeline management",
      ],
    },
    {
      id: "vc-funding",
      title: "VC Funding",
      description:
        "Strategic outreach to venture capital firms and investors, helping startups connect with the right funding partners to fuel their growth.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      benefits: [
        "Investor targeting and research",
        "Pitch deck optimization",
        "Warm introductions to relevant VCs",
        "Follow-up management and tracking",
      ],
    },
    {
      id: "newsletter",
      title: "Newsletter",
      description:
        "Engaging newsletter creation and management that builds authority, nurtures relationships, and keeps your brand top-of-mind with prospects and customers.",
      icon: <Newspaper className="h-6 w-6 text-primary" />,
      benefits: [
        "Content strategy development",
        "Regular publishing schedule",
        "Subscriber growth tactics",
        "Performance analytics and optimization",
      ],
    },
  ];

  return (
    <section
      className={`content-section bg-[#111] py-20 px-6 md:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specialized outbound strategies designed to generate qualified leads
            and drive revenue growth for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={service.id}
                  className="border border-gray-700/60 rounded-2xl overflow-hidden bg-[#1a1a1a]/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 mb-4"
                >
                  <AccordionTrigger className="px-8 py-6 hover:bg-[#2a2a2a]/50 transition-all">
                    <div className="flex items-center text-left">
                      <div className="bg-primary/10 p-4 rounded-xl mr-6">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <h4 className="font-semibold text-white mb-4 text-lg">
                        Key Benefits:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-3 mt-1">•</span>
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesPanel;
