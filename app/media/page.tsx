"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Tv, Radio, Newspaper, Users, ExternalLink } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const mediaOutlets = [
  {
    name: "Joe Rogan Experience",
    type: "Podcast",
    icon: Radio,
    description: "Long-form conversation reaching millions of engaged listeners across demographics. Perfect for discussing nuanced policy positions and personal story.",
    reach: "11M+ listeners per episode",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/220128092452-joe-rogan-jordan-peterson-podcast-spotify.jpg?c=16x9&q=w_1280,c_fill",
  },
  {
    name: "Fox News",
    type: "Television",
    icon: Tv,
    description: "America most-watched cable news network, reaching conservative and independent voters who align with our fiscal responsibility message.",
    reach: "3M+ prime time viewers",
    image: "https://static.foxnews.com/static/orion/styles/img/fox-news/og/og-fox-news.png",
  },
  {
    name: "Daily Wire",
    type: "Digital Media",
    icon: Newspaper,
    description: "Fast-growing digital platform with strong engagement among young conservatives. Ideal for short-form content and rapid news cycle response.",
    reach: "50M+ monthly views",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
  },
];

const interestGroups = [
  {
    name: "National Rifle Association (NRA)",
    reason: "Our strong Second Amendment stance and opposition to gun control aligns perfectly with NRA members priorities.",
    members: "5M+ members",
  },
  {
    name: "Americans for Tax Reform",
    reason: "Our commitment to reducing taxes for all Americans and signing the Taxpayer Protection Pledge resonates with their mission.",
    members: "60,000+ pledged elected officials",
  },
  {
    name: "National Federation of Independent Business",
    reason: "Small business owners will benefit from our tax cuts and reduced regulations, making NFIB a natural ally.",
    members: "300,000+ small businesses",
  },
  {
    name: "Heritage Foundation",
    reason: "Our conservative policy positions on fiscal responsibility, limited government, and constitutional originalism align with Heritage mission.",
    members: "500,000+ supporters",
  },
];

export default function MediaPage() {
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
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <Tv className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">Campaign Communications</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Media & Interest Groups
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic approach to reaching voters through diverse media channels and building coalitions with aligned organizations.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Media Strategy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Tv className="h-8 w-8 text-gold" />
              <h2 className="text-3xl font-bold text-foreground">Media Exposure Strategy</h2>
            </div>
            <p className="text-muted-foreground max-w-3xl">
              We have identified key media outlets across different formats to maximize our reach and deliver our message to targeted voter groups.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mediaOutlets.map((outlet, index) => (
              <motion.div
                key={outlet.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-gold/50 transition-colors group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-background px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <outlet.icon className="h-4 w-4" />
                    {outlet.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{outlet.name}</h3>
                  <p className="text-gold text-sm font-medium mb-3">{outlet.reach}</p>
                  <p className="text-muted-foreground">{outlet.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Interest Groups */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-gold" />
              <h2 className="text-3xl font-bold text-foreground">Interest Group Support</h2>
            </div>
            <p className="text-muted-foreground max-w-3xl">
              Organizations whose missions align with our policy positions and who we expect will support our campaign.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {interestGroups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-gold/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{group.name}</h3>
                  <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">{group.members}</span>
                </div>
                <p className="text-muted-foreground">{group.reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Press Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Press Inquiries</h2>
            <p className="text-primary-foreground/80 mb-8">
              Members of the media seeking interviews, statements, or additional information about the Wong 2028 campaign should contact our communications team.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold text-background px-6 py-3 rounded-lg font-bold">
              <ExternalLink className="h-5 w-5" />
              press@wong2028.com
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
