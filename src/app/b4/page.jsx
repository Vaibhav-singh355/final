'use client'
import {  useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { Facebook, Instagram, Twitter,  ArrowRight,User,Calendar,Clock } from "lucide-react"
import Link from "next/link"

const page = () => {
    const blogPost = {
  id: 1,
  title: " Mind-Body Connection",
  excerpt: "Cravings, Cortisol & Comfort Food: Understanding Emotional Eating.",
  content: `
    The mind and body are deeply interconnected, with each influencing the other in powerful ways. Thoughts, emotions, and mental states can have a direct impact on physical health, while the condition of the body can affect mood, focus, and overall mental well-being. Stress, for example, can lead to physical symptoms like headaches, fatigue, or digestive issues, while regular physical activity and practices like meditation or deep breathing can calm the mind and reduce anxiety. Nurturing both mental and physical health through mindfulness, movement, proper nutrition, and rest creates a balanced state where the mind and body work together for optimal health and resilience. `,
  date: "May 15, 2023",
  readTime: "8 min read",
  author: "Kara Lydon",
  category: "Mindful Eating",
  image: "/mind.png?height=600&width=1200&text=Mindful+Eating+Hero",
  tags: ["mindfulness", "eating habits", "wellness", "nutrition", "self-care"],
  likes: 127,
  comments: 23,
}
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black-950 text-amber-50">
      <BackgroundDecoration />

      <header className="container mx-auto px-4 md:px-6 py-4 md:py-2 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 relative z-10">
        <div className="w-20 md:w-64 transition-transform duration-300  flex-shrink-0 hidden md:block">
          <Link href="/">
            <Image
              src="/logo.png?height=100&width=260"
              alt="Kara Lydon Nutrition"
              width={140}
              height={70}
              className="object-cover rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6 items-center ">
          <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-2xl font-extrabold transition-colors duration-300 block"> 
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
        {/* Breadcrumb */}
        <section className="py-6 bg-black-900 border-b border-gold-500/20">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gold-500 hover:text-gold-400 transition-colors duration-300">
                Home
              </Link>
              <span className="text-amber-400">/</span>
              <Link href="/blogs" className="text-gold-500 hover:text-gold-400 transition-colors duration-300">
                Blog
              </Link>
              <span className="text-amber-400">/</span>
              <span className="text-amber-100">{blogPost.title}</span>
            </nav>
          </div>
        </section>
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden ">
          {/* Darker, more faded overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black-900/95 via-black-950/90 to-black-900/95 z-10"></div>
          <Image
            src={blogPost.image || "/gut.png"}
            alt={blogPost.title}
            fill
            className="object-cover scale-105 blur-[1px] brightness-75 opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-950/90 via-black-950/60 to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 right-0 z-30 p-8 md:p-16">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <span className="inline-block px-3 py-1 bg-gold-500 text-black-950 text-sm font-medium rounded-full mb-4">
                  {blogPost.category}
                </span>
                <TextReveal>
                  <h1 className="animate-gold-shine text-3xl md:text-5xl font-bold mb-4 block">
                    {blogPost.title}
                  </h1>
                </TextReveal>
                <p className="text-amber-100 text-lg mb-6 max-w-2xl">{blogPost.excerpt}</p>
                <div className="flex items-center space-x-6 text-amber-300">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {blogPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blogPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {blogPost.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <AnimatedSection className="py-20 bg-black-950 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <TextReveal>
                    <div
                      className="prose prose-lg prose-invert prose-gold max-w-none">
                        
                        <div className="text-amber-300 mb-8 text-lg">
                            <span className="flex items-center space-x-2">
                                {blogPost.content}
                                </span>
                                </div>
                                </div>

                  </TextReveal>

                  {/* Tags */}
                  <TextReveal delay={0.3}>
                    <div className="mt-12 pt-8 border-t border-gold-500/20">
                      <h3 className="text-lg font-medium text-gradient-gold mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {blogPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gold-500/10 text-gold-400 text-sm rounded-full border border-gold-500/20 hover:bg-gold-500/20 transition-colors duration-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TextReveal>

                  {/* Social Share */}
                  
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    {/* Author Bio */}
                    <TextReveal delay={0.2}>
                      <Card className="border border-gold-500/30 bg-black-900">
                        <CardContent className="p-6">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-full border-2 border-gold-500">
                              <Image
                                src="/front..jpg?height=80&width=80&text=Kara"
                                alt="Kara Lydon"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-medium text-gradient-gold mb-2">Ekta Singh</h3>
                            <p className="text-amber-100 text-sm mb-4">
                              Registered Dietitian Nutritionist and Intuitive Eating Counselor
                            </p>
                            <Link
                              href="/about"
                              className="inline-flex items-center px-4 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-950 transition-all duration-300 rounded-full text-sm group"
                            >
                              <span className="group-hover:tracking-wider transition-all duration-300">Learn More</span>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </TextReveal>

                    {/* Table of Contents */}
                      </div>
                </div>
              </div>
            </div>
          </div>
          <ColorfulDivider position="bottom" />
        </AnimatedSection>

        {/* Related Posts */}
        <AnimatedSection className="py-20 bg-gradient-to-b from-black-950 via-black-900 to-black-950 relative">
          <div className="container mx-auto px-4">


            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-gold-500/20">
             
              <Link
                href="/blogs"
                className="px-6 py-3 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-black-950 transition-all duration-300 rounded-full group"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">Back to Blog</span>
              </Link>
             
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-black-900 py-16 relative z-10 border-t border-[#bfa14a]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-44">
            <div>
              <h3 className="text-xl font-medium" style={{ color: "#bfa14a" }}>About</h3>
              <p className="text-amber-100 mb-4 text-xl">
                Thrivin Nutrition is dedicated to helping you find peace with food and your body through intuitive
                eating and a non-diet approach.
              </p>
              <div className="flex space-x-3">
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