'use client'
import {  useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { Facebook, Instagram, Twitter,  ArrowRight,User,Calendar,Clock } from "lucide-react"
import Link from "next/link"

const page = () => {
    const blogPosts = [
  {
    id: 1,
    li:'/b1',
    title: " Nutrition and Gut Health",
    excerpt:
      "Heal Your Gut, Heal Your Life: A Beginner's Guide to Better Digestion",
    content: "Mindful eating is about being present with your food and paying attention to the experience of eating...",
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Ekta Singh",
    category: "Gut Health",
    image: "/gut.png?height=400&width=600&text=Mindful+Eating",
    featured: true,
    tags: ["mindfulness", "eating habits", "wellness"],
  },
  {
    id: 2,
    li:'/b2',
    title: "Women&apos;s health and hormones",
    excerpt:
      "More Muscle, Less Menopause Mess: Why Strength Training Is Your Best Ally.",
    content:
      "Intuitive eating is a revolutionary approach to food and eating that honors your body's natural wisdom...",
    date: "April 28, 2023",
    readTime: "6 min read",
author: "Ekta Singh",
    category: "Women's Health",
    image: "/w.jpg?height=400&width=600&text=Intuitive+Eating",
    featured: true,
    tags: ["intuitive eating", "diet culture", "body positivity"],
  },
  {
    id: 3,
    li:'/b3',
    title: "Fitness and Health",
    excerpt:
      "Strong Over Skinny: Why Muscle Mass Matters More Than You Think.",
    content:
      "Breakfast doesn't have to be complicated or follow strict rules. These nourishing ideas will fuel your morning...",
    date: "April 10, 2023",
    readTime: "5 min read",
    author: "Ekta Singh",
    category: "Fitness",
    image: "/fit.jpg?height=400&width=600&text=Breakfast+Ideas",
    featured: false,
    tags: ["recipes", "breakfast", "nutrition"],
  },
  {
    id: 4,
    li:'/b4',
    title: " Mind-Body Connection",
    excerpt:
      "Cravings, Cortisol & Comfort Food: Understanding Emotional Eating.",
    content: "Diet culture is pervasive in our society, influencing how we think about food, bodies, and health...",
    date: "March 22, 2023",
    readTime: "10 min read",
    author: "Ekta Singh",
    category: "Connection",
    image: "/mind.png?height=400&width=600&text=Diet+Culture",
    featured: false,
    tags: ["diet culture", "body image", "mental health"],
  },
  {
    id: 5,
    li:'/b5',
    title: " Sustainable Fat Loss and Lifestyle",
    excerpt:
      "The Truth About Fat Loss After 40: Why It's Not Just About Calories.",
    content:
      "Our bodies have sophisticated systems for regulating hunger and satiety. Understanding these mechanisms...",
    date: "March 8, 2023",
    readTime: "7 min read",
author: "Ekta Singh",
    category: "Fat Loss",
    image: "/fat.avif?height=400&width=600&text=Hunger+Cues",
    featured: false,
    tags: ["nutrition science", "hunger cues", "biology"],
  },
  
]

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black-950 text-amber-50">
      <BackgroundDecoration />

      <header className="container mx-auto px-4 py-6 grid grid-cols-2 relative z-10">
        <div className="w-64 transition-transform duration-300 hover:scale-105">
          <Link href="/">
            <Image
              src="/logo.jpg?height=100&width=260"
              alt="Kara Lydon Nutrition"
              width={100}
              height={40}
              className="object-cover rounded-full"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6 mt-2  items-center">
          <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700 text-2xl font-extrabold transition-colors duration-300"> 
            Home
          </Link>
          <Link href="/about" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-2xl font-extrabold transition-colors duration-300"> 
            About
          </Link>
          <Link href="/blogs" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-2xl font-extrabold transition-colors duration-300">
            Blog
          </Link>
          </nav>


       
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="py-10 bg-gradient-to-b from-black-950 via-black-900 to-black-950 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              
                <TextReveal>
                    <h1 className="animate-gold-shine text-5xl md:text-6xl font-bold mb-7 inline-block">
                        The Blogs
                    </h1>
                </TextReveal>
              <TextReveal className="text-amber-100 text-lg max-w-2xl mx-auto" delay={0.5}>
                Discover evidence-based insights on intuitive eating, mindful nutrition, and cultivating a peaceful
                relationship with food and your body.
              </TextReveal>
            </div>
          </div>
          <ColorfulDivider position="bottom" />
        </section>

        {/* Featured Posts */}
        <AnimatedSection className="py-20 bg-black-950 relative">
          <div className="container mx-auto px-4">
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-light text-gradient-gold mb-12 text-center">
                Featured Articles
              </h2>
            </TextReveal>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {blogPosts.map((post, index) => (
                <TextReveal key={post.id} delay={index * 0.2}>
                  <Card className="border border-gold-500/30 bg-black-900 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
                    <div className="relative h-64 overflow-hidden rounded-2xl">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110  group-hover:brightness-75 opacity-65"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold-500 text-black-950 text-sm  font-bold rounded-full">
                          FEATURED
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full mb-2">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-amber-400 text-sm mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-gradient-gold mb-3 group-hover:text-gradient-gold-amber transition-colors duration-300">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-amber-100 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-amber-300 text-sm">
                          
                          {post.author}
                        </div>
                        <Link
                          href={`${post.li}`}
                          className="text-gold-500 hover:text-gold-400 font-medium inline-flex items-center group"
                        >
                          <span className="group-hover:tracking-wider transition-all duration-300">Read More</span>
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TextReveal>
              ))}
            </div>
          </div>
          <ColorfulDivider position="bottom" />
        </AnimatedSection>

        {/* Categories Filter */}
        
        
      </main>

      <footer className="bg-black-900 py-16 relative z-10 border-t border-[#bfa14a]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-44">
            <div>
              <h3 className="text-xl font-medium" style={{ color: "#bfa14a" }}>About</h3>
              <p className="text-amber-100 mb-4 text-xl">
                Ekta Singh Nutrition is dedicated to helping you find peace with food and your body through intuitive
                eating and a non-diet approach.
              </p>
              <div className="flex space-x-3">
                <Link href="#" aria-label="Facebook" className="social-icon-link">
                  <Facebook className="h-8 w-8 text-[#bfa14a] hover:text-yellow-700 transition-all duration-300 hover:scale-125" />
                </Link>
                <Link href="https://www.instagram.com/thrivinwithektaa/" aria-label="Instagram" className="social-icon-link">
                  <Instagram className="h-8 w-8 text-[#bfa14a] hover:text-yellow-700 transition-all duration-300 hover:scale-125" />
                </Link>
                
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium" style={{ color: "#7a6938" }}>Popular Posts</h3>
              <ul className="space-y-4">
                {[
                  { title: "Nutrition and Gut health", href: "/b1", color: "#bfa14a", image: "/gut.png?height=100&width=100" },
                  { title: "Women's Health", href: "/b2", color: "#968045", image: "/w.jpg?height=100&width=100" },
                  { title: "Fitness and Health", href: "/b3", color: "#bfa14a", image: "/fit.jpg?height=100&width=100" },
                ].map((post, index) => (
                  <li key={index}>
                    <Link
                      href={post.href}
                      className="transition-colors duration-300 flex items-start group"
                      style={{ color: post.color }}
                    >
                      <div className="w-16 h-16 relative flex-shrink-0 mr-3 overflow-hidden rounded-md border border-[#bfa14a]/20">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt="Blog post thumbnail"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                      </div>
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 group-hover:tracking-wider">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gradient-gold mb-4">Contact</h3>
              <p className="text-amber-100 mb-2 font-bold text-lg">Email: ekta@thrivin.in</p>
              <p className="text-amber-100 mb-2 font-bold text-lg flex items-center justify-start">
                         <span><Image src="/call.webp" width={30} height={30}   alt='wp'/>
</span>    <span className="ml-3">+91 9810307409</span>          
                      </p>
              
            </div>

          </div>
          <div className="mt-12 pt-8 border-t border-[#bfa14a]/20 text-center">
            <p className="animate-gold-shine text-lg font-bold" style={{ color: "#bfa14a" }}>
              &copy; {new Date().getFullYear()} Thrivin Nutrition. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page
function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}
function TextReveal({ children, className = "", threshold = 0.5, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
function BackgroundDecoration() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const particlesArray = []
    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30))

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15

        // Gold color palette
        const colors = [
          `rgba(255, 182, 30, ${Math.random() * 0.15})`, // Gold
          `rgba(245, 158, 11, ${Math.random() * 0.15})`, // Amber
          `rgba(217, 119, 6, ${Math.random() * 0.15})`, // Dark Amber
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines
      connectParticles()

      requestAnimationFrame(animate)
    }

    const connectParticles = () => {
      const maxDistance = 150

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance

            // Gold gradient for connections
            const colors = [
              `rgba(255, 182, 30, ${opacity * 0.05})`, // Gold
              `rgba(245, 158, 11, ${opacity * 0.05})`, // Amber
              `rgba(217, 119, 6, ${opacity * 0.05})`, // Dark Amber
            ]
            const colorIndex = (a + b) % 3

            ctx.strokeStyle = colors[colorIndex]
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.3 }} />
}
function ScrambleText({ text, className = "", duration = 1500, delay = 0, scrambleSpeed = 50 }) {
  const [displayText, setDisplayText] = useState("")
  const intervalRef = useRef(null)
  const finalTextRef = useRef(text)
  const iterationsRef = useRef(0)
  const startTimeRef = useRef(null)

  useEffect(() => {
    finalTextRef.current = text

    const timeout = setTimeout(() => {
      startTimeRef.current = Date.now()

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current
        const progress = Math.min(elapsed / duration, 1)

        // Determine how many characters should be finalized
        const finalizedLength = Math.floor(text.length * progress)

        // Create the new display text
        let newText = ""
        for (let i = 0; i < text.length; i++) {
          // If this position should be finalized, use the actual character
          if (i < finalizedLength) {
            newText += text[i]
          }
          // Otherwise use a random character, but preserve spaces
          else if (text[i] === " ") {
            newText += " "
          } else {
            newText += chars[Math.floor(Math.random() * chars.length)]
          }
        }

        setDisplayText(newText)
        iterationsRef.current += 1

        // If we've reached the end, clear the interval
        if (progress >= 1) {
          clearInterval(intervalRef.current)
          setDisplayText(text)
        }
      }, scrambleSpeed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, duration, delay, scrambleSpeed])

  return <span className={className}>{displayText || text}</span>
}

function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    />
  )
}
Card.displayName = "Card"

function CardHeader({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}
CardHeader.displayName = "CardHeader"

function CardTitle({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}
CardTitle.displayName = "CardTitle"
function CardDescription({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
function CardContent({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
}
CardContent.displayName = "CardContent"

function CardFooter({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}
CardFooter.displayName = "CardFooter"
function ColorfulDivider({ position = "bottom" }) {
  const isTop = position === "top"

  return (
    <div
      className={`absolute ${isTop ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden leading-0 ${isTop ? "transform rotate-180" : ""}`}
    >
      <motion.svg
        className="relative block w-full h-12 md:h-16"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="fill-current text-gray-900"
        ></path>
      </motion.svg>
    </div>
  )
}