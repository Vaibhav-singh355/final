'use client'
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react"
import Link from "next/link"

const page = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black-950 text-amber-50">
      <BackgroundDecoration />

      <header className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <div className="w-20 md:w-64 transition-transform duration-300  flex-shrink-0  md:block">
          <Link href="/">
            <Image
              src="/logo.png?height=100&width=260"
              alt="Kara Lydon Nutrition"
              width={100}
              height={40}
              className="object-cover rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
              priority
            />
          </Link>
        </div>

       </header>

      <main className="flex-1 relative z-10">
        <section className="py-12 md:py-10">
          <div className="container mx-auto px-2">
            <div className="w-full mx-auto px-4 md:px-10 lg:px-16">
              <div className="text-center mb-12">
                <TextReveal>
                  <h2 className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                    About Ekta
                  </h2>
                </TextReveal>

              </div>

              <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative overflow-hidden rounded-lg shadow-xl border border-gold-500/20">
                  <Image
                    src="/abt.jpg?height=600&width=600"
                    alt="Kara Lydon"
                    width={800}
                    height={600}
                    className="rounded-lg transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-900/30 via-amber-900/20 to-gold-900/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.3}>

                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.4}>
                    Welcome! Before I guide you on your journey to better health, I’d love to share the story behind mine—a journey shaped by discipline, self-discovery, and a deep passion for wellness.

                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.5}>
                    I wasn’t always a fitness enthusiast. Growing up, I was a dedicated student with little interest in sports. My heart belonged to music, dance, and the world of fashion and glamour, which led me to participate in numerous ramp shows and beauty pageants. These experiences made me conscious of my appearance and nudged me toward clean eating and a healthy lifestyle early on. What began as a desire to simply look good soon evolved into a realization that mindful habits could elevate every aspect of my life. During my corporate years, music was my emotional anchor, and dance—particularly jazz and salsa—kept me physically active and mentally refreshed. My love for nature and sunrise walks eventually unfolded into a deeper understanding: that movement, nutrition, sleep, and self-discipline are the true pillars of well-being.

                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                    At 29, I stepped into a gym for the first time—completely unfamiliar with the equipment and unsure of where to begin. With the support of a personal trainer, I committed to two disciplined hours every day. My transformation was not just physical—it was empowering. The visible strength, energy, and confidence I gained became a driving force, and before long, fitness turned into my greatest passion. In 2013, I proudly won the title of “Strongest Girl in the Gym” at Fitness First, along with awards worth ₹1 lakh. This milestone fueled my curiosity to dive deeper into the science of health and performance.
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                    An eternal student at heart, I pursued a Personal Training Certification from the American Council on Exercise (ACE), followed by multiple specializations including Strong by Zumba, Yoga, and the Reebok Fitness program. I found myself immersed in studying the powerful connection between food, movement, and mindset. Slowly, my lifestyle transformed: clean eating, proper hydration, circadian-aligned routines, mindful meditation, and gratitude became my daily rhythm. Through consistent practice and purpose, I discovered that true health is not just the absence of illness—it is a radiant state of vitality, joy, resilience, and inner harmony.
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                    My passion for food and its profound impact on our bodies led me to further pursue certification as a Sports and Clinical Nutritionist, with an advanced focus on gut health. Why gut health? Because it is the command center of overall wellness—impacting digestion, immunity, mood, and inflammation. Supporting our gut through mindful nutrition and lifestyle practices empowers the body to flourish from within.
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                    Today, after more than 15 years of living this journey, I am proud to lead by example—not just as a wellness coach, but as a mother to a 19-year-old daughter, with a metabolic age of 20. This transformation is rooted in consistency, knowledge, and self-love. I have had the privilege of guiding countless individuals toward better health, and my mission is to extend this impact to a larger community—helping people reconnect with their bodies, heal from within, and build a life rooted in strength, balance, and vibrant health.
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                   Let’s begin this journey together—toward a healthier, happier you. </TextReveal>
                </div>
              </AnimatedSection>

              
              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-gold-amber text-3xl font-light mb-8">
                    <ScrambleText text="Certificates and Acheivements" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Fitness First Certification",
                      issuer: "ACE Approved",
                      year: "2016",
                      image: "/c1.jpg",
                      description:
                        "Advanced certification of wining strength category in Fitness First",
                    },
                    {
                      title: "Fitness First Certification",
                      issuer: "Zumba Fitness",
                      year: "2013",
                      image: "/c2.jpg",
                      description: "First prize at Bosuball Challenge ",
                    },
                    
                  ].map((cert, index) => (
                    <TextReveal key={index} delay={0.3 + index * 0.1}>
                      <div className="bg-black-900 border border-gold-500/20 p-6 rounded-lg shadow-inner hover:border-gold-500/40 transition-all duration-300 group">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.title}
                            width={200}
                            height={200}
                            className="w-full h-90 object-fit transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gold-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-gold-500 font-medium mb-2 group-hover:text-amber-400 transition-colors duration-300">
                          {cert.title}
                        </h3>
                       
                        <p className="text-amber-500 text-sm mb-3">{cert.year}</p>
                        <p className="text-amber-100 text-sm leading-relaxed">{cert.description}</p>
                      </div>
                    </TextReveal>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-gold-amber text-3xl font-light mb-6">
                    <ScrambleText text="How do I work closely -WITH YOU , FOR YOU" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="bg-black-900 border border-gold-500/20 p-8 rounded-lg shadow-inner">
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed font-bold" delay={0.3}>
                    Gut microbiome plays a pivotal role in health and disease. At THRIVIN, I aim to cultivate a healthier individual by focusing on this Gut MICROBIOME

                    MICROBIOME is the central point for preventing, treating and protecting against various health issues. With this approach I work very closely with individuals to :

                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.4}>
                    1.	ASSESS :
                    Assess your current diet, lifestyle and health conditions through a proper blood work to identify factors that may be impacting your gut microbiome

                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.5}>
                    2.	EDUCATE :
                    Educate you about the importance of a balanced gut microbiome and how dietary choices can influence gut health gut microbiome


                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.5}>
                    3.	PERSONALISED DIET PLANS :
                    I Provide you personalized nutrition recommendations tailored to your unique needs and goals. This may involve creating meal plans, suggesting dietary changes and recommending supplements to support gut health if need be.


                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.5}>
                    4.	MONITORING AND SUPPORT :
                    I monitor your progress and provide ongoing support and guidance to help you implement dietary changes and improve your gut microbiome. This includes regular check ups, adjustments to nutrition plans and troubleshooting any challenges


                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.5}>
                    5.	COLLABORATION :
                    Collaborate with other health care professional;s such as doctors, gastroenterologists, dietitions to ensure comprehensive care for your digestive issues or gut related conditions




                  </TextReveal>

                </div>
              </AnimatedSection>
<AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-gold-amber text-3xl font-light mb-6">
                    <ScrambleText text="My Philosophy" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="bg-black-900 border border-gold-500/20 p-8 rounded-lg shadow-inner">
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.3}>
                    I believe that true health encompasses physical, mental, and emotional wellbeing. My approach to
                    nutrition is rooted in the principles of intuitive eating, which encourages tuning into your body&apos;s
                    natural hunger and fullness cues, making peace with all foods, and finding joy in eating.
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.4}>
                    I reject diet culture and weight-centric approaches to health. Instead, I focus on helping clients
                    develop sustainable habits that support their overall wellbeing without restriction or rules.
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.5}>
                    My goal is to help you cultivate a peaceful relationship with food and your body so you can live a
                    full, nourished life free from food worry and body preoccupation.
                  </TextReveal>
                </div>
              </AnimatedSection>

              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-amber-gold text-3xl font-light mb-6">
                    <ScrambleText text="Credentials" duration={1500} />
                  </h2>
                </TextReveal>
                <ul className="space-y-4 text-amber-100">
                  {[
                    { text: "Registered Dietitian Nutritionist (RDN)", color: "gold" },
                    { text: "Licensed Dietitian Nutritionist (LDN)", color: "amber" },
                    { text: "Certified Intuitive Eating Counselor", color: "gold" },
                    
                    { text: "Master of Science in Nutrition", color: "gold" },
                  ].map((credential, index) => (
                    <TextReveal key={index} delay={0.3 + index * 0.1}>
                      <li className="flex items-start">
                        <span
                          className={`text-${credential.color}-500 mr-2 transform transition-transform duration-300 hover:scale-110`}
                        >
                          •
                        </span>
                        <span className="group-hover:tracking-wider transition-all duration-300">
                          {credential.text}
                        </span>
                      </li>
                    </TextReveal>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection className="text-center">

              </AnimatedSection>
            </div>
          </div>
        </section>
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

