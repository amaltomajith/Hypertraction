import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface ResultStat {
  label: string;
  value: string;
  subtext?: string;
  progress?: number;
}

interface ResultsShowcaseProps {
  title?: string;
  subtitle?: string;
  stats?: ResultStat[];
}

const ResultsShowcase = ({
  title = "Client Success Metrics",
  subtitle = "Real results from our outbound systems",
  stats = [
    {
      label: "Average Revenue Growth",
      value: "147%",
      subtext: "Year over year",
      progress: 85,
    },
    {
      label: "Lead Response Rate",
      value: "32%",
      subtext: "Industry avg: 8%",
      progress: 75,
    },
    {
      label: "Meetings Booked",
      value: "1,200+",
      subtext: "Last 12 months",
      progress: 90,
    },
    {
      label: "ROI on Outbound",
      value: "4.3x",
      subtext: "Average client return",
      progress: 80,
    },
  ],
}: ResultsShowcaseProps) => {
  return (
    <section className="content-section w-full py-20 px-6 md:px-8 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full border border-gray-700/60 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-5xl font-bold text-primary">
                      {stat.value}
                    </span>
                    {stat.subtext && (
                      <span className="text-sm text-gray-400 mb-2 font-medium">
                        {stat.subtext}
                      </span>
                    )}
                  </div>
                  {stat.progress !== undefined && (
                    <div className="mt-6">
                      <Progress
                        value={stat.progress}
                        className="h-3 bg-gray-800"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-gray-400 italic font-medium">
            *Results based on average performance across client portfolio
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
