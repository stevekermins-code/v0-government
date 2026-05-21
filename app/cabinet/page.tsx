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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHW9hEPyUVYdq5YT8_W7Y4Sj58XPmKP74xWXJce-Urp4CyJA",
  },
  {
    department: "Department of Commerce",
    name: "Dana White",
    title: "Secretary of Commerce",
    description: "Successful business leader with experience in global entertainment and commerce expansion.",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/230112122817-dana-white-121022.jpg?c=16x9&q=w_800,c_fill",
  },
  {
    department: "Department of War",
    name: "Pete Hegseth",
    title: "Secretary of War",
    description: "Distinguished military leader with decades of strategic experience protecting American interests.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pete_Hegseth_Official_Portrait.jpg",
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
    name: "Doctor Mike",
    title: "Secretary of HHS",
    description: "Popular physician and health educator committed to accessible healthcare for all Americans.",
    image: "https://www.statnews.com/wp-content/uploads/2025/10/R52_6644-645x645.jpg",
  },
  {
    department: "Department of Homeland Security",
    name: "Marco Rubio",
    title: "Secretary of Homeland Security",
    description: "Experienced senator with strong background in national security and immigration policy.",
    image: "https://static01.nyt.com/images/2025/01/17/multimedia/00dc-rubio-mktz/00dc-rubio-mktz-mediumSquareAt3X.jpg",
  },
  {
    department: "Department of Housing and Urban Development",
    name: "Maurie Byall",
    title: "Secretary of HUD",
    description: "Community leader dedicated to expanding housing opportunities for American families.",
    image: "https://st.hzcdn.com/simgs/d063ebf6020a907c_3-9502/_.jpg",
  },
  {
    department: "Department of the Interior",
    name: "Luke Nichols",
    title: "Secretary of the Interior",
    description: "Outdoor Boys YouTube creator committed to responsible management of America natural resources.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQAlWtWw-T04Ykp0egcro8jqo86-njVu9K8q-p1vQZ5qRzSyz",
  },
  {
    department: "Department of Justice",
    name: "Christian Bale",
    title: "Attorney General",
    description: "Dedicated to equal justice under law and protecting the constitutional rights of all Americans.",
    image: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    department: "Department of Labor",
    name: "Alan Ritchson",
    title: "Secretary of Labor",
    description: "Champion of American workers, dedicated to job growth and fair labor practices.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Alan_Ritchson_Photo_Op_GalaxyCon_Richmond_2022.jpg/960px-Alan_Ritchson_Photo_Op_GalaxyCon_Richmond_2022.jpg",
  },
  {
    department: "Department of State",
    name: "Ron DeSantis",
    title: "Secretary of State",
    description: "Seasoned leader with extensive experience in government and foreign policy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSNghQAlg1kHJ4XHjOGgvnZzGveAgtLxoHQ&s",
  },
  {
    department: "Department of Transportation",
    name: "Elon Musk",
    title: "Secretary of Transportation",
    description: "Visionary innovator revolutionizing transportation with cutting-edge technology and infrastructure solutions.",
    image: "https://image.cnbcfm.com/api/v1/image/107293744-1693398435735-elon.jpg?v=1738327797",
  },
  {
    department: "Department of the Treasury",
    name: "Ben Shapiro",
    title: "Secretary of the Treasury",
    description: "Financial expert committed to fiscal responsibility and economic growth for all Americans.",
    image: "https://m.media-amazon.com/images/M/MV5BZjIwNDkzMmUtMWJiMy00ZWRjLTgwNDYtMGZkMWE0NjU1Nzc3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    department: "Department of Veterans Affairs",
    name: "Shawn Ryan",
    title: "Secretary of Veterans Affairs",
    description: "Former special operations veteran dedicated to serving those who served our nation.",
    image: "https://m.media-amazon.com/images/M/MV5BM2EwODk5NjQtOTZkZS00NzJjLWE5MDYtNGZkYWIxZDhkYTNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
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
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">The Wong Administration</span>
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
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-gold/50 transition-colors group"
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
                  <p className="text-gold text-sm font-medium mb-1">{member.department}</p>
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
