"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function VicePresidentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <Star className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-gold">Vice President of the United States</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
                Ethan Landrigan
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                A trusted partner in leadership, Vice President Ethan Landrigan brings experience, dedication, and a shared vision for a stronger America to the Wong administration.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/cabinet">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-bold px-8">
                    Meet the Cabinet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-4 border-gold shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-lHZwgHNoUD51le4bmbXxXz7Oj8XrT4.jpeg"
                  alt="Ethan Landrigan - Vice President"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="h-12 w-12 text-gold mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-medium text-foreground italic mb-6">
              {'"'}Standing alongside President Wong, we will restore fiscal sanity to Washington and ensure that government truly serves the people.{'"'}
            </blockquote>
            <p className="text-gold font-bold">— Ethan Landrigan</p>
          </motion.div>
        </div>
      </section>
      
      {/* Role Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">About the Vice President</h2>
            <div className="w-24 h-1 bg-gold" />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-gold mb-4">Role in Administration</h3>
                <p className="text-muted-foreground">
                  Vice President Landrigan serves as President Wong&apos;s closest advisor and partner in governance. He presides over the Senate, casts tie-breaking votes, and leads key initiatives in the administration&apos;s agenda for fiscal reform.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-gold mb-4">Key Responsibilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>President of the Senate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>Leader of Budget Reform Task Force</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>Chair of National Space Council</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>Immigration Policy Coordinator</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold text-gold mb-4">Partnership with President Wong</h3>
              <p className="text-muted-foreground mb-6">
                The Wong-Landrigan ticket represents a new generation of conservative leadership. Together, they share a commitment to:
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminating wasteful government spending",
                  "Reducing the regulatory burden on American businesses",
                  "Securing our borders while reforming legal immigration",
                  "Protecting constitutional liberties",
                  "Ensuring Congressional accountability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="h-3 w-3 text-gold" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
