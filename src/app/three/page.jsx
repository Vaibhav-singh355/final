"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, ArrowLeft,Facebook,Instagram } from "lucide-react"
import {  useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AthleticPerformancePlanPage() {
  const planDetails = {
    title: "Jumpstart Your Transformation",
    duration: "3-Months Program",
    price: "₹18,000",
    description:
      "Perfect for those ready to take their first step toward a healthier lifestyle, this 12-week plan helps build strong foundations for fat loss, energy improvement, better gut health, and sustainable habits. Over the course of three months, you’ll receive a fully personalized nutrition plan designed around your routine, preferences, and fitness level. Weekly or biweekly check-ins ensure steady progress, while expert guidance supports mindful eating, improved recovery, and better food relationships. This is ideal for those seeking structure, accountability, and real results without overwhelm.",
    image: "/images/services/athletic-performance.jpg",
    color: "gold",
    popular: false,
    features: [
      "Strong foundations for fat loss, energy improvement, better gut health, and sustainable habits. ",
      "fully personalized nutrition plan designed around your routine, preferences, and fitness level.",
      "Weekly or biweekly check-ins ensure steady progress,",
      "expert guidance supports mindful eating, improved recovery, and better food relationships",
      "This is ideal for those seeking structure, accountability, and real results without overwhelm.",
      
      "Recovery nutrition protocols",
    ],
  }
   const cont = () => {
    window.scrollTo({
      top: document.getElementById("contact").offsetTop,
      behavior: "smooth",
    })}
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black-950 text-amber-50">
      <BackgroundDecoration />

      <main className="flex-1 relative z-10">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <TextReveal delay={0.1}>
                <Link
                  href="/"
                
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 group"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transform translate-x-0 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Back to All Plans</span>
                </Link>
              </TextReveal>

              <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
                <div>
                  <TextReveal>
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-4">
                      {planDetails.title}
                    </h1>
                  </TextReveal>
                  <TextReveal delay={0.2}>
                    <div className="flex items-center mb-6">
                      <span className="text-amber-300 mr-4 text-xl">{planDetails.duration}</span>
                      
                    </div>
                  </TextReveal>
                  <TextReveal delay={0.3} className="text-amber-100 mb-8 text-lg leading-relaxed">
                    {planDetails.description}
                  </TextReveal>
                  <TextReveal delay={0.4}>
                    <button
                      onClick={cont}
                      
                      className="inline-flex items-center px-8 py-4 bg-gold-500 text-black-950 hover:bg-gold-600 transition-all duration-300 rounded-full group font-medium text-lg"
                    >
                      <span className="group-hover:tracking-wider transition-all duration-300">Book This Plan</span>
                      <ArrowRight className="ml-2 h-5 w-5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </TextReveal>
                </div>
                <TextReveal delay={0.3}>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-gold-500/30">
                    <Image
                      src={planDetails.image || "/placeholder.svg?height=600&width=800"}
                      alt={planDetails.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-transparent to-transparent opacity-60"></div>
                  </div>
                </TextReveal>
              </div>

              
              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-amber-gold text-3xl font-light mb-8">
                    <ScrambleText text="Program Features" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="bg-black-900 border border-gold-500/20 p-8 rounded-lg shadow-inner">
                  <div className="grid md:grid-cols-2 gap-4">
                    {planDetails.features.map((feature, index) => (
                      <TextReveal key={index} delay={0.3 + index * 0.05}>
                        <div className="flex items-start">
                          <Check className="text-gold-500 mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                          <span className="text-amber-100">{feature}</span>
                        </div>
                      </TextReveal>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

            

              
            </div>
          </div>
        </section>
      </main>
      <section id="contact" className="relative">
          <AnimatedSection className="py-20 bg-gradient-to-b from-black-950 via-black-900 to-black-950 relative">
            <div className="container mx-auto px-4" >
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                  Contact Us
                </h2>
                <div className="max-w-2xl mx-auto text-center mb-8">
                  <p className="text-amber-100 mb-4 text-lg">
                    Have questions or want to learn more about our services? We&apos;re here to help!
                  </p>
                  <p className="text-amber-100 mb-6 text-lg">
                    Reach out to us via email or follow us on social media for the latest updates and tips.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  <a
    href={`https://wa.me/9810307409?text=hello`}
    target="_blank"
    className="whatsapp-link relative"
    rel="noreferrer noopener"
    style={{ width: "100%" }}
  >
    <button className="w-full sm:w-auto bg-gradient-to-r from-[#bfa14a] to-[#968045] hover:from-[#968045] hover:to-[#7a6938] text-black-950 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group flex items-center justify-center">
      <span className="mr-2 group-hover:tracking-wider transition-all text-black duration-300">
        Chat on WhatsApp
      </span>
      <span>
        <Image src="/WhatsApp.svg.png" width={26} height={26} alt="wp" />
      </span>
    </button>
  </a>
  <a href="tel:+919810307409" style={{ width: "100%" }}>
    <button className="w-full sm:w-auto bg-gradient-to-r from-[#bfa14a] to-[#968045] hover:from-[#968045] hover:to-[#7a6938] text-black-950 flex items-center rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group justify-center">
      <span className="mr-2 group-hover:tracking-wider transition-all text-black duration-300">
        Call Us
      </span>
      <span>
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
    </button>
  </a>
</div>



                </div>
              </TextReveal>


            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
      

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