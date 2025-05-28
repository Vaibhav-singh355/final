"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, ArrowLeft } from "lucide-react"
import {  useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AthleticPerformancePlanPage() {
  const planDetails = {
    title: "Athletic Performance Nutrition",
    duration: "10 weeks",
    price: "₹18,000",
    description:
      "A specialized nutrition program designed to optimize athletic performance, enhance recovery, and support your training goals through strategic fueling, nutrient timing, and personalized supplementation.",
    image: "/images/services/athletic-performance.jpg",
    color: "gold",
    popular: false,
    features: [
      "Comprehensive performance nutrition assessment",
      "Personalized meal plans aligned with training cycles",
      "Pre/post-workout nutrition protocols",
      "Strategic nutrient timing for optimal performance",
      "Body composition analysis and monitoring",
      "Sport-specific supplementation recommendations",
      "Hydration strategies for training and competition",
      "Recovery nutrition protocols",
    ],
    includes: [
      {
        title: "Initial Performance Assessment",
        description:
          "90-minute comprehensive evaluation of your training regimen, nutrition habits, and performance goals to create your personalized plan.",
      },
      {
        title: "Weekly Follow-ups",
        description:
          "30-minute weekly sessions to track progress, adjust nutrition based on training phases, and optimize performance.",
      },
      {
        title: "Training-Synchronized Nutrition Plans",
        description:
          "Custom nutrition plans that align with your training cycles, including different protocols for heavy training days, recovery days, and competition.",
      },
      {
        title: "Performance Supplement Protocol",
        description:
          "Evidence-based supplement recommendations to enhance performance, recovery, and adaptation to training.",
      },
      {
        title: "Recipe Collection",
        description:
          "Over 50 athlete-focused recipes designed to fuel performance while being practical for busy training schedules.",
      },
      {
        title: "Body Composition Tracking",
        description:
          "Regular assessments to monitor changes in body composition and ensure nutrition supports your performance goals.",
      },
    ],
    idealFor: [
      "Competitive athletes looking to optimize performance",
      "Recreational athletes training for specific events",
      "Fitness enthusiasts wanting to improve body composition",
      "CrossFit, strength training, and endurance athletes",
      "Team sport players seeking a competitive edge",
      "Anyone looking to enhance recovery between training sessions",
    ],
    testimonials: [
      {
        quote:
          "Ekta's Athletic Performance plan helped me shave 15 minutes off my marathon time. The nutrition timing strategies made a huge difference in my energy levels during long runs.",
        name: "Vikram S.",
        location: "Pune",
        image: "/images/testimonials/client-1.jpg",
      },
      {
        quote:
          "As a competitive CrossFit athlete, I needed nutrition that could keep up with my training. This program helped me recover faster and perform better in competitions.",
        name: "Arjun M.",
        location: "Hyderabad",
        image: "/images/testimonials/client-2.jpg",
      },
    ],
    faqs: [
      {
        question: "Will this plan help me lose weight while maintaining performance?",
        answer:
          "Yes, if that's your goal. The plan can be designed to create a slight caloric deficit while ensuring you have adequate energy for training and recovery, leading to fat loss while maintaining or even improving performance.",
      },
      {
        question: "Do I need to track macros or calories on this program?",
        answer:
          "Some level of tracking is recommended initially to ensure you're meeting your performance nutrition needs, but we focus on developing intuitive eating skills that work within your athletic context for long-term sustainability.",
      },
      {
        question: "How quickly will I notice performance improvements?",
        answer:
          "Many athletes report improved energy levels and recovery within 1-2 weeks. More significant performance gains typically emerge within 3-6 weeks as your body adapts to the optimized nutrition approach.",
      },
      {
        question: "Can this plan accommodate plant-based athletes?",
        answer:
          "The program can be fully customized for vegetarian, vegan, or plant-based athletes, ensuring all performance nutrition needs are met through appropriate food choices and supplementation if needed.",
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black-950 text-amber-50">
      <BackgroundDecoration />

      <main className="flex-1 relative z-10">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <TextReveal delay={0.1}>
                <Link
                  href="/nutrition-plans"
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
                      <span className="text-amber-300 mr-4">{planDetails.duration}</span>
                      <span className="text-gold-500 text-3xl font-bold">{planDetails.price}</span>
                    </div>
                  </TextReveal>
                  <TextReveal delay={0.3} className="text-amber-100 mb-8 text-lg leading-relaxed">
                    {planDetails.description}
                  </TextReveal>
                  <TextReveal delay={0.4}>
                    <Link
                      href="/contact?plan=athletic-performance"
                      className="inline-flex items-center px-8 py-4 bg-gold-500 text-black-950 hover:bg-gold-600 transition-all duration-300 rounded-full group font-medium text-lg"
                    >
                      <span className="group-hover:tracking-wider transition-all duration-300">Book This Plan</span>
                      <ArrowRight className="ml-2 h-5 w-5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
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
                  <h2 className="text-gradient-gold-amber text-3xl font-light mb-8">
                    <ScrambleText text="What's Included" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="grid md:grid-cols-2 gap-6">
                  {planDetails.includes.map((item, index) => (
                    <TextReveal key={index} delay={0.3 + index * 0.1}>
                      <div className="bg-black-900 border border-gold-500/20 p-6 rounded-lg shadow-inner hover:border-gold-500/40 transition-all duration-300 h-full">
                        <h3 className="text-gold-500 text-xl font-medium mb-3">{item.title}</h3>
                        <p className="text-amber-100">{item.description}</p>
                      </div>
                    </TextReveal>
                  ))}
                </div>
              </AnimatedSection>

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

              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-gold-amber text-3xl font-light mb-8">
                    <ScrambleText text="Ideal For" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="bg-black-900 border border-gold-500/20 p-8 rounded-lg shadow-inner">
                  <div className="grid md:grid-cols-2 gap-4">
                    {planDetails.idealFor.map((item, index) => (
                      <TextReveal key={index} delay={0.3 + index * 0.05}>
                        <div className="flex items-start">
                          <span className="text-gold-500 mr-3">•</span>
                          <span className="text-amber-100">{item}</span>
                        </div>
                      </TextReveal>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-amber-gold text-3xl font-light mb-8">
                    <ScrambleText text="Client Success Stories" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="grid md:grid-cols-2 gap-8">
                  {planDetails.testimonials.map((testimonial, index) => (
                    <TextReveal key={index} delay={0.3 + index * 0.1}>
                      <div className="bg-black-900 border border-gold-500/20 p-6 rounded-lg shadow-inner hover:border-gold-500/40 transition-all duration-300">
                        <div className="flex items-start mb-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500/30 mr-4 flex-shrink-0">
                            <Image
                              src={testimonial.image || "/placeholder.svg?height=100&width=100"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-gold-500 font-medium">{testimonial.name}</h3>
                            <p className="text-amber-300 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                        <p className="text-amber-100 italic">"{testimonial.quote}"</p>
                      </div>
                    </TextReveal>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-gold-amber text-3xl font-light mb-8">
                    <ScrambleText text="Frequently Asked Questions" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="space-y-6">
                  {planDetails.faqs.map((faq, index) => (
                    <TextReveal key={index} delay={0.3 + index * 0.1}>
                      <div className="bg-black-900 border border-gold-500/20 p-6 rounded-lg shadow-inner hover:border-gold-500/40 transition-all duration-300">
                        <h3 className="text-gold-500 text-lg font-medium mb-3">{faq.question}</h3>
                        <p className="text-amber-100">{faq.answer}</p>
                      </div>
                    </TextReveal>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-black-900 border border-gold-500/20 p-8 md:p-12 rounded-lg shadow-inner mb-16">
                <div className="text-center">
                  <TextReveal delay={0.2}>
                    <h2 className="text-gradient-gold-amber text-3xl font-light mb-4">
                      <ScrambleText text="Ready to Elevate Your Athletic Performance?" duration={1500} />
                    </h2>
                  </TextReveal>
                  <TextReveal delay={0.3} className="text-amber-100 mb-8 max-w-3xl mx-auto">
                    Take your training and performance to the next level with nutrition strategies designed specifically
                    for athletes. Book your spot in the Athletic Performance Nutrition program today.
                  </TextReveal>
                  <TextReveal delay={0.4}>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link
                        href="/contact?plan=athletic-performance"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-black-950 hover:bg-gold-600 transition-all duration-300 rounded-full group font-medium"
                      >
                        <span className="group-hover:tracking-wider transition-all duration-300">Book This Plan</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black-950 transition-all duration-300 rounded-full group font-medium"
                      >
                        <span className="group-hover:tracking-wider transition-all duration-300">
                          Schedule Free Consultation
                        </span>
                      </Link>
                    </div>
                  </TextReveal>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <TextReveal delay={0.2}>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/nutrition-plans/womens-health"
                      className="inline-flex items-center text-amber-400 hover:text-amber-300 group"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4 transform translate-x-0 group-hover:-translate-x-1 transition-transform duration-300" />
                      <span>Women's Hormonal Balance Plan</span>
                    </Link>
                    <Link
                      href="/nutrition-plans/weight-management"
                      className="inline-flex items-center text-amber-400 hover:text-amber-300 group"
                    >
                      <span>Sustainable Weight Management</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </TextReveal>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
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