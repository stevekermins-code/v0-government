"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const cabinetMembers = [
  {
    department: "Department of Agriculture",
    name: "John C. May",
    title: "Secretary of Agriculture",
    description: "CEO of John Deere, bringing extensive agricultural industry expertise to modernize American farming.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Commerce",
    name: "Dana White",
    title: "Secretary of Commerce",
    description: "Successful business leader with experience in global entertainment and commerce expansion.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Defense",
    name: "General James Mitchell",
    title: "Secretary of Defense",
    description: "Distinguished military leader with decades of strategic experience protecting American interests.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Energy",
    name: "Mark Lenfesty",
    title: "Secretary of Energy",
    description: "Renowned physics educator bringing scientific expertise to American energy policy.",
    image: "https://bloximages.chicago2.vip.townnews.com/journalgazette.net/content/tncms/assets/v3/editorial/c/6b/c6b0d910-df93-11ed-b890-fb91f38d5c6b/644160727b15b.image.jpg",
  },
  {
    department: "Department of Health and Human Services",
    name: "Dr. Mike Varshavski",
    title: "Secretary of HHS",
    description: "Popular physician and health educator committed to accessible healthcare for all Americans.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Homeland Security",
    name: "Marco Rubio",
    title: "Secretary of Homeland Security",
    description: "Experienced senator with strong background in national security and immigration policy.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Housing and Urban Development",
    name: "Robert Byalls Sr.",
    title: "Secretary of HUD",
    description: "Community leader dedicated to expanding housing opportunities for American families.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    department: "Department of the Interior",
    name: "Sarah Thompson",
    title: "Secretary of the Interior",
    description: "Environmental steward committed to responsible management of America&apos;s natural resources.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Justice",
    name: "Christian Bale",
    title: "Attorney General",
    description: "Dedicated to equal justice under law and protecting the constitutional rights of all Americans.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Labor",
    name: "Alan Ritchson",
    title: "Secretary of Labor",
    description: "Champion of American workers, dedicated to job growth and fair labor practices.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop",
  },
  {
    department: "Department of State",
    name: "Victoria Chen",
    title: "Secretary of State",
    description: "Seasoned diplomat with extensive experience in international relations and foreign policy.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Transportation",
    name: "Elon Musk",
    title: "Secretary of Transportation",
    description: "Visionary innovator revolutionizing transportation with cutting-edge technology and infrastructure solutions.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
  },
  {
    department: "Department of the Treasury",
    name: "Michael Sterling",
    title: "Secretary of the Treasury",
    description: "Financial expert committed to fiscal responsibility and economic growth for all Americans.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Veterans Affairs",
    name: "Shawn Ryan",
    title: "Secretary of Veterans Affairs",
    description: "Former special operations veteran dedicated to serving those who served our nation.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop",
  },
  {
    department: "Department of Education",
    name: "Dr. Jennifer Adams",
    title: "Secretary of Education",
    description: "Education reformer focused on empowering parents and improving student outcomes nationwide.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
  },
];

export default function CabinetPage() {
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
            <div className="inline-flex items-center gap-2 bg-navy/10 border border-navy/30 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-navy" />
              <span className="text-sm font-medium text-navy">The Wong Administration</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              The Cabinet
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              President Wong has assembled a team of exceptional leaders from diverse backgrounds, united by a commitment to serving the American people with excellence and integrity.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Cabinet Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cabinetMembers.map((member, index) => (
              <motion.div
                key={member.department}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-navy/50 transition-colors group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-navy text-sm font-medium mb-1">{member.department}</p>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{member.title}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
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
