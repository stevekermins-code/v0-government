"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function PresidentPage() {
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
                <span className="text-sm font-medium text-gold">47th President of the United States</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
                Dylan Wong
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                A visionary leader committed to fiscal responsibility, efficient government, and putting America first. Dylan Wong brings a fresh perspective to the highest office in the land.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/platform">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-bold px-8">
                    View Platform
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-YSg22v1WpG2e4RukvFp11EHXwqlQzV.jpeg"
                  alt="Dylan Wong - 47th President"
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
              {'"'}Vote Wong, Not Wrong. Together, we will build an America that works for everyone — through fiscal discipline, efficient government, and unwavering commitment to our founding principles.{'"'}
            </blockquote>
            <p className="text-gold font-bold">— Dylan Wong</p>
          </motion.div>
        </div>
      </section>
      
      {/* Biography Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">About the President</h2>
            <div className="w-24 h-1 bg-gold" />
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold text-gold mb-4">Background</h3>
              <p className="text-muted-foreground">
                Dylan Wong emerged as a fresh voice in American politics, championing conservative values while bringing innovative solutions to longstanding problems. His commitment to fiscal responsibility and efficient governance has resonated with voters across the nation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold text-gold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                President Wong envisions an America where government works efficiently for its citizens, where hard work is rewarded with fair taxation, and where the national debt no longer burdens future generations. His pragmatic approach prioritizes results over rhetoric.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold text-gold mb-4">Leadership Style</h3>
              <p className="text-muted-foreground">
                Known for his direct communication and bold decision-making, President Wong leads by example. He believes in accountability at every level of government and has pledged to hold Congress responsible for balanced budgets through his groundbreaking proposed amendment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Achievements */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Campaign Promises</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Balance the federal budget",
              "Reduce taxes for all Americans",
              "Streamline immigration processes",
              "Hold Congress accountable",
              "Cut wasteful spending",
              "Advance American space exploration",
            ].map((promise, index) => (
              <motion.div
                key={promise}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-primary-foreground/5 p-4 rounded-lg border border-primary-foreground/10"
              >
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <Star className="h-4 w-4 text-background" />
                </div>
                <p className="font-medium">{promise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
