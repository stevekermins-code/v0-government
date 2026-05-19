"use client";

import { motion } from "framer-motion";
import { 
  DollarSign, 
  Leaf, 
  Globe, 
  Shield, 
  Rocket, 
  Users, 
  Building2, 
  Landmark, 
  Heart,
  Scale
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const platformItems = [
  {
    icon: DollarSign,
    title: "The Budget & Spending",
    position: "Less Spending",
    description: "We believe in fiscal responsibility. The federal government must learn to live within its means, just like American families do. We will cut wasteful spending, eliminate redundant programs, and ensure every taxpayer dollar is spent wisely.",
    priority: "high",
  },
  {
    icon: Leaf,
    title: "The Environment",
    position: "Balanced Approach",
    description: "Environmental stewardship through innovation, not regulation. We support market-based solutions and American energy independence while protecting our natural resources for future generations.",
    priority: "medium",
  },
  {
    icon: Globe,
    title: "Foreign Policy",
    position: "America First",
    description: "Strong American leadership on the world stage. We will rebuild our alliances, stand firm against adversaries, and ensure American interests are protected in every international engagement.",
    priority: "high",
  },
  {
    icon: Shield,
    title: "Gun Rights",
    position: "Second Amendment",
    description: "The Second Amendment is a fundamental right. We will protect law-abiding citizens&apos; rights to keep and bear arms while supporting mental health initiatives and school safety measures.",
    priority: "high",
  },
  {
    icon: Rocket,
    title: "Space Race",
    position: "Legitimate Moon Landing",
    description: "America will lead humanity&apos;s expansion into space. We support NASA&apos;s continued exploration and private sector innovation. The moon landing was real, and we will return to establish a permanent presence.",
    priority: "medium",
  },
  {
    icon: Users,
    title: "Immigration",
    position: "Efficient & Legal",
    description: "Make the legal immigration process more efficient while maintaining strong border security. We welcome those who come legally while enforcing laws against illegal entry.",
    priority: "high",
  },
  {
    icon: Building2,
    title: "Military & Defense",
    position: "Peace Through Strength",
    description: "A strong military is the foundation of peace. We will rebuild and modernize our armed forces, support our veterans, and maintain America&apos;s position as the world&apos;s preeminent military power.",
    priority: "high",
  },
  {
    icon: Landmark,
    title: "National Debt",
    position: "Reduction",
    description: "The national debt is a threat to our children&apos;s future. We will implement a comprehensive plan to reduce the debt through spending cuts and economic growth, not tax increases.",
    priority: "high",
  },
  {
    icon: Heart,
    title: "Social Security",
    position: "Reform",
    description: "Social Security needs fundamental reform to remain solvent. We will explore market-based solutions and give younger workers more control over their retirement savings.",
    priority: "medium",
  },
  {
    icon: Scale,
    title: "Taxes",
    position: "Reduce for Everyone",
    description: "Lower taxes for all Americans. We believe you know how to spend your money better than the government does. Tax cuts will spur economic growth and job creation.",
    priority: "high",
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Our Platform
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Wong Administration&apos;s positions on the issues that matter most to America. Clear, principled, and focused on results.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Philosophy of Government</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We believe the role of government should be limited and focused. The federal government exists to protect our borders, enforce contracts, maintain a strong national defense, and preserve individual liberty. Beyond these core functions, power should rest with the states and the people. Government works best when it stays out of the way of hardworking Americans.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Platform Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {platformItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-gold/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      {item.priority === "high" && (
                        <span className="text-xs font-medium bg-gold/10 text-gold px-2 py-1 rounded">
                          Priority
                        </span>
                      )}
                    </div>
                    <p className="text-gold font-medium mb-2">{item.position}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
