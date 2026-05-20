"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Flag, Shield, Users } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image - Statue of Liberty */}
        <div className="absolute inset-0">
          {/* Using img tag to preserve GIF animation */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design.gif-ZQmW3GTLGDHNq5mII3673Os93rHCLB.jpeg"
            alt="Statue of Liberty at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <Star className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-gold">Republican Party</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
                Vote <span className="text-gold">Wong</span>,<br />
                Not Wrong.
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                A new era of American leadership. Dylan Wong for President 2028 — bringing fiscal responsibility, efficient government, and prosperity to every American.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/platform">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-bold px-8">
                    Our Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/president">
                  <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                    Meet Dylan Wong
                  </Button>
                </Link>
              </div>
              
              {/* Campaign slogan */}
              <div className="mt-12 p-6 bg-card border border-border rounded-lg">
                <p className="text-lg font-medium text-foreground italic">
                  {'"'}What&apos;s Wong with you?{'"'}
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Campaign Slogan 2028</p>
              </div>
            </motion.div>
            
            {/* Right content - President image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col"
            >
              {/* Image container */}
              <div className="relative aspect-[4/5] rounded-t-lg overflow-hidden border-4 border-b-0 border-gold shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-YSg22v1WpG2e4RukvFp11EHXwqlQzV.jpeg"
                  alt="Dylan Wong - 47th President of the United States"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Name and title box below image */}
              <div className="bg-card border-4 border-t-0 border-gold rounded-b-lg p-6 flex items-center gap-4">
                {/* Animated signature GIF on the left */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29-EnQc2WqHgDhm2HKAhVNFAVPajCirMS.gif"
                  alt="Dylan Wong signature"
                  className="h-16 w-32 object-contain"
                />
                {/* Name and title on the right */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">Dylan Wong</h2>
                  <p className="text-gold font-medium">47th President of the United States</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Priorities Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Key Priorities</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Fiscal Responsibility",
                description: "Balanced budgets and reduced national debt through smart spending cuts.",
              },
              {
                icon: Flag,
                title: "Efficient Immigration",
                description: "Streamlined legal immigration while securing our borders.",
              },
              {
                icon: Users,
                title: "Tax Relief",
                description: "Reduced taxes for all Americans to boost economic growth.",
              },
              {
                icon: Star,
                title: "Space Exploration",
                description: "Advancing America&apos;s leadership in the final frontier.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* President */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/president" className="block">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-border group-hover:border-gold transition-colors">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-YSg22v1WpG2e4RukvFp11EHXwqlQzV.jpeg"
                    alt="Dylan Wong"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-gold text-sm font-medium mb-1">47th President</p>
                    <h3 className="text-2xl font-bold text-foreground">Dylan Wong</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Vice President */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/vice-president" className="block">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-border group-hover:border-gold transition-colors">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-lHZwgHNoUD51le4bmbXxXz7Oj8XrT4.jpeg"
                    alt="Ethan Landrigan"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-gold text-sm font-medium mb-1">Vice President</p>
                    <h3 className="text-2xl font-bold text-foreground">Ethan Landrigan</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Be part of history. Support Dylan Wong&apos;s campaign for a stronger, more prosperous America.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-bold px-8">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/strategy">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  View Strategy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
