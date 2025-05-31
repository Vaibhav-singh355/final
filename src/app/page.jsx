"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { Facebook, Instagram, Twitter, ArrowRight, QuoteIcon } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Home() {
  const featuredRef = useRef(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const handleScrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" })
    setMobileNavOpen(false)
  }
  const abt = () => {
    window.scrollTo({
      top: document.getElementById("about").offsetTop,
      behavior: "smooth",
    })
    setMobileNavOpen(false)
  }
  const service = () => {
    window.scrollTo({
      top: document.getElementById("service").offsetTop,
      behavior: "smooth",
    })
    setMobileNavOpen(false)
  }
  const cont = () => {
    window.scrollTo({
      top: document.getElementById("contact").offsetTop,
      behavior: "smooth",
    })
    setMobileNavOpen(false)
  }
  const blog = () => {
    window.scrollTo({
      top: document.getElementById("blog").offsetTop,
      behavior: "smooth",
    })
    setMobileNavOpen(false)
  }
  const recepi = () => {
    window.scrollTo({
      top: document.getElementById("rep").offsetTop,
      behavior: "smooth",
    })
    setMobileNavOpen(false)
  }
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileNavOpen])



  return (
   <div className="flex min-h-screen flex-col overflow-hidden bg-black-950 text-amber-50">
      <BackgroundDecoration />

      {/* Header */}
      <header className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 relative z-10">
        <div className="w-20 md:w-64 transition-transform duration-300  flex-shrink-0 hidden md:block">
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
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8 md:mr-12  ">
          <button onClick={abt} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700 text-xl font-extrabold tracking-wide relative group py-2 block">
            About
          </button>
          <button onClick={service} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700 text-xl font-extrabold tracking-wide relative group py-2 block">
            Featured Services
          </button>
          <button onClick={blog} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700 text-xl font-extrabold tracking-wide relative group py-2 block">
            Blog
          </button>
          <button onClick={cont} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700 text-xl font-extrabold tracking-wide relative group py-2 block">
            Contact
          </button>
        </nav>
        {/* Desktop Social */}
       
        {/* Mobile Hamburger */}
        <div className="flex justify-between items-center md:hidden w-full ">
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
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#bfa14a]"
            onClick={() => setMobileNavOpen((v) => !v)}
            aria-label="Open navigation"
          >
            <svg width="32" height="32" fill="none" stroke="#bfa14a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="10" x2="26" y2="10" />
              <line x1="6" y1="16" x2="26" y2="16" />
              <line x1="6" y1="22" x2="26" y2="22" />
            </svg>
          </button>
          
        </div>
        {/* Mobile Nav Drawer */}
         {mobileNavOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close navigation"
            />
            {/* Drawer */}
            <div className="relative bg-black-950 rounded-b-xl shadow-2xl w-full max-w-md mx-auto pt-8 pb-10 px-6 flex flex-col items-start z-10 animate-slide-in-top"
                 style={{ marginTop: 0 }}>
              <button
                className="absolute top-4 right-4 text-4xl text-[#bfa14a] focus:outline-none"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close navigation"
              >
                &times;
              </button>
              <nav className="grid grid-cols-4 space-y-4 w-full mt-8">
                <button onClick={abt} className="w-full py-3 text-sm text-[#bfa14a] font-bold rounded hover:bg-black-900 transition">About</button>
                <button onClick={service} className="w-full py-3 text-sm text-[#bfa14a] font-bold rounded hover:bg-black-900 transition">Featured Services</button>
                <button onClick={blog} className="w-full py-3 text-sm text-[#bfa14a] font-bold rounded hover:bg-black-900 transition">Blog</button>
                
                <button onClick={cont} className="w-full py-3 text-sm text-[#bfa14a] font-bold rounded hover:bg-black-900 transition">Contact</button>
              </nav>
              
            </div>
            <style jsx global>{`
      .animate-slide-in {
        animation: slideInDrawer 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      }
      @keyframes slideInDrawer {
        from { transform: translateY(40px) scale(0.98); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
      }
    `}</style>
  </div>
          
        )}
      </header>

      {/* Home Section */}
      <main className="flex-1 relative z-10">
        <section className="relative h-[40vh] md:h-[85vh] w-full overflow-hidden opacity-90" id="home">
          <div className="absolute inset-0 bg-gradient-to-r from-black-900/80 via-black-950/70 to-black-900/80 z-0"></div>
          <Image
            src="/ektabg.jpg?height=1200&width=2000"
            alt="Kara Lydon in kitchen"
            fill
            className=" object-fill py-10   scale-105 animate-slow-zoom opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-950/90"></div>
          <div className="absolute bottom-12 left-4 md:bottom-32 md:left-32  md:w-1/2 w-[500] z-10 px-2 md:px-0">
            <div className="overflow-hidden mb-2">
              <AnimatedHeading
                text="Balanced Living "
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide font-serif leading-tight drop-shadow-sm"
                initialDelay={0.3}
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedHeading
                text="Through Personalized Nutrition.."
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-extrabold tracking-wide leading-tight drop-shadow-sm block"
                delay={1000}
                duration={2000}
              />
            </div>
            <div className="mt-6 md:mt-8 overflow-hidden">
              <div className="animate-slide-up" style={{ animationDelay: "0.9s" }}>
                <button onClick={cont} className="bg-gradient-to-r from-[#bfa14a] to-[#968045] hover:from-[#968045] hover:to-[#7a6938] text-black-950 rounded-full px-6 md:px-8 py-4 md:py-6 text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group flex items-center justify-center">
                  <span className="mr-2 group-hover:tracking-wider transition-all text-lg md:text-2xl font-bold text-black duration-300">
                    Start Your Journey
                  </span>
                  <span>
                    <ArrowRight className="ml-2 h-6 md:h-8 w-6 md:w-8 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 hidden md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={handleScrollToFeatured}
              className="bg-[#bfa14a] hover:bg-[#968045] text-black-950 px-4 md:px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base md:text-lg"
              aria-label="Scroll to Featured Services"
            >
              ↓ Scroll Down
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black-950 to-transparent"></div>
        </section>
        <section id="about" className="relative">
          <AnimatedSection className="py-20 bg-black-950 relative" ref={featuredRef} >
            <div className="container mx-auto px-4" >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] mb-6">
                  <TextReveal>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                      Nourish Your Body, Mind, and Soul
                    </h2>
                  </TextReveal>
                </h2>
                <TextReveal className="text-amber-100 mb-8 leading-relaxed text-lg" delay={0.5}>
                  Hi, I’m Ekta Singh—a passionate holistic dietitian and health expert dedicated to transforming lives through mindful nutrition and sustainable lifestyle choices. I empowers individuals to achieve optimal health by addressing physical activities,diets and habbits.Through my platform, Nurture Yourself, I offers personalized diet and daily hobbies inspiring people  to embrace clean eating and active living for lasting vitality.. My mission is to empower you with the knowledge and tools you need to take control of your health. 
                </TextReveal>
                <div className="flex justify-center">
                  <Link
                    href="/about"
                    className="group inline-flex items-center px-8 py-3 border-2 border-[#bfa14a] hover:bg-[#bfa14a] hover:text-black transition-all duration-300 rounded-full overflow-hidden relative"
                  >
                    <span className="relative z-10 group-hover:tracking-wider hover:text-black  transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938]">
                      LEARN MORE
                    </span>
                    <span className="absolute inset-0 bg-[#bfa14a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                  </Link>
                </div>
              </div>
            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
        <section id="service" className="relative">
          <AnimatedSection className="py-20 bg-gradient-to-b from-black-950 via-black-900 to-black-950 relative">
            <div className="container mx-auto px-4" >
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                  Featured Services
                </h2>
              </TextReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "3-Month Program",
                    description: "Jumpstart Your Transformation with a 3-Month Nutrition Program.",
                    link: "/three",
                    linkText: "Learn More",
                    image: "/n1.webp?height=400&width=600",
                    gradient: "from-[#968045] to-[#bfa14a]",
                    delay: 0.2,
                  },
                  {
                    title: "6-Month Program",
                    description: " Deep, Sustainable Change with a 6-Month Nutrition Program.",
                    link: "/six",
                    linkText: "Learn More",
                    image: "/f.jpg?height=400&width=600",
                    gradient: "from-[#968045] to-[#bfa14a]",
                    delay: 0.4,
                  },
                  {
                    title: "12-Month Program",
                    description: "Long-Term Lifestyle Rebuild with a 12-Month Nutrition Program.",
                    link: "/twelve",
                    linkText: "Learn more",
                    image: "/gut.jpg?height=400&width=600",
                    gradient: "from-[#968045] to-[#bfa14a]",
                    delay: 0.6,
                  },
                ].map((service, index) => (
                  <TextReveal key={index} delay={service.delay}>
                    <div className="group">
                      <Card className="border border-[#bfa14a]/30 bg-black-900 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                          ></div>

                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-medium text-[#7a6938] mb-2 group-hover:text-[#bfa14a] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-[#968045] mb-4">{service.description}</p>
                           <Link href={service.link} className="text-[#bfa14a] hover:text-[#968045] font-medium inline-flex items-center group">
                           <h3 className="text-xl font-medium text-[#7a6938] mb-2 group-hover:text-[#bfa14a] transition-colors duration-300">
                            {service.linkText}
                          </h3></Link>
                        </CardContent>
                      </Card>
                    </div>
                  </TextReveal>
                ))}
              </div>
            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
         <section id="instagram" className="relative">
          <AnimatedSection className="py-20 bg-black-950 relative">
            <div className="container mx-auto px-4">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-4 text-center">
                  Follow Our Journey
                </h2>
                <p className="text-amber-100 text-center mb-12 text-lg">
                  Get daily nutrition tips, healthy recipes, and wellness inspiration on Instagram
                </p>
              </TextReveal>

             
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
  {[
    {
      id: 1,
      image: "/i1.jpg",
      caption: "Eat Well. Live Fully. Thrive Holistically. 🥣✨",
      link:"https://www.instagram.com/p/DKLqUBlyowf/"
    },
    {
      id: 2,
      image: "/i2.jpg",
      caption: "Animal protein and Plant protein 🌈🥗",
      link:"https://www.instagram.com/p/DIsSgo7SvUx/?img_index=1"
    },
    {
      id: 3,
      image: "/i3.jpg",
      caption: "Transform from the Inside Out.",
      link:"https://www.instagram.com/p/DHbMHb0yfeh/"
    },
    {
      id: 4,
      image: "/i4.jpg",
      caption: "10 Fitness Hacks 💪⚡",
      link:"https://www.instagram.com/p/DH45A_Tyvya/"
    },
    
  ].map((post) => (
    <TextReveal key={post.id} delay={post.delay}>
      <Link href={post.link} >
      <div className="group bg-black-900 rounded-xl overflow-hidden border border-[#bfa14a]/30 hover:border-[#bfa14a]/70 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
        <div className="relative aspect-square w-full  h-[500] sm:h-72 md:h-90 lg:h-[600] overflow-hidden">
          
          <Image
            src={post.image || "/placeholder.svg?height=300&width=400"}
            alt={`Instagram post ${post.id}`}
            fill
            className="object-fit transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex-1 flex flex-col justify-between p-4">
          <div>
            <p className="text-xs text-amber-100 mb-2 line-clamp-2 min-h-[2.5em]">{post.caption}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            
          </div>
        </div>
      </div>
      </Link>
    </TextReveal>
  ))}
</div>

              {/* Instagram CTA */}
              <div className="text-center">
                <TextReveal delay={0.7}>
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-3 mb-4">
                      <Instagram className="h-8 w-8 text-[#bfa14a]" />
                      <span className="text-[#bfa14a] font-medium text-lg">thrivinwithektaa</span>
                    </div>
                  </div>
                  <Link
                    href="https://www.instagram.com/thrivinwithektaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-8 py-3 border-2 border-[#bfa14a] text-[#bfa14a] hover:bg-[#bfa14a] hover:text-black transition-all duration-300 rounded-full overflow-hidden relative"
                  >
                    <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative z-10 group-hover:tracking-wider hover:text-black bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] transition-all duration-300">
                      FOLLOW US ON INSTAGRAM
                    </span>
                    <span className="absolute inset-0 bg-[#bfa14a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                  </Link>
                </TextReveal>
              </div>
            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
       
        <section id="blog" className="relative">
          <AnimatedSection className="py-20 bg-black-950 relative">
            <div className="container mx-auto px-4">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                  Latest from the Blog
                </h2>
              </TextReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Nutrition and Gut health ",
                    date: "May 15, 2023",
                    link: "/b1",
                    excerpt:
                      " Heal Your Gut, Heal Your Life: A Beginner&apos;s Guide to Better Digestion.",
                    image: "/gut.png?height=500&width=800&text=Blog+Post+1",
                    color: "#bfa14a",
                    delay: 0.2,
                  },
                  {
                    title: "Women's health and hormones ",
                    date: "April 28, 2023",
                    link: "/b2",
                    excerpt:
                      "Discover if you&apos;re ready to leave dieting behind and embrace a more peaceful relationship with food.",
                    image: "/w.jpg?height=500&width=800&text=Blog+Post+2",
                    color: "#968045",
                    delay: 0.4,
                  },
                  {
                    title: "Fitness and health ",
                    date: "April 10, 2023",
                    link: "/b3",
                    excerpt:
                      "Start your day with these satisfying, delicious breakfast recipes that will keep you energized.",
                    image: "/fit.jpg?height=500&width=800&text=Blog+Post+3",
                    color: "#bfa14a",
                    delay: 0.6,
                  },

                ].map((post, index) => (
                  <TextReveal key={index} delay={post.delay}>
                    <div className="group">
                      <div className="mb-4 h-64 relative overflow-hidden rounded-lg shadow-md border border-[#bfa14a]/20">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#bfa14a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                      </div>
                      <h3
                        className="text-xl font-medium text-[#7a6938] mb-2 group-hover:text-[#bfa14a] transition-colors duration-300"
                      >
                        <Link href="/blog/post-1">{post.title}</Link>
                      </h3>
                      <Link
                        href={post.link}
                        className="text-[#bfa14a] hover:text-[#968045] font-medium inline-flex items-center group"
                      >
                        <span className="group-hover:tracking-wider transition-all duration-300">Read More</span>
                        <span className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </TextReveal>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/blogs"
                  className="group inline-flex items-center px-8 py-3 border-2 border-[#bfa14a] text-[#bfa14a] hover:bg-[#bfa14a] hover:text-black transition-all duration-300 rounded-full overflow-hidden relative"
                >
                  <span className="relative z-10 group-hover:tracking-wider hover:text-black bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] transition-all duration-300">
                    VIEW ALL POSTS
                  </span>
                  <span className="absolute inset-0 bg-[#bfa14a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                </Link>
              </div>
            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
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
function AnimatedHeading({ text, className = "", staggerDelay = 0.025, initialDelay = 0 }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <h2 className={className}>{text}</h2>
  }

  return (
    <h2 className={className}>
      {text.split("").map((letter, index) => (
        <AnimatedLetter key={index} delay={initialDelay + index * staggerDelay}>
          {letter === " " ? "\u00A0" : letter}
        </AnimatedLetter>
      ))}
    </h2>
  )
}
function AnimatedLetter({ children, delay = 0,  className = "" }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
    >
      {children}
    </motion.span>
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
function AnimatedText({ text, className = "", delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        className={className}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {text}
      </motion.h1>
    </div>
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
          className="fill-current text-gray-950 dark:text-gray-800"
        ></path>
      </motion.svg>
    </div>
  )
}
function TestimonialCard({ quote, name, title, imageSrc }) {
  return (
    <Card className="border-green-100 shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <QuoteIcon className="h-8 w-8 text-green-200" />
          <p className="text-gray-700 italic">{quote}</p>
          <div className="flex items-center space-x-4 pt-4">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full" />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
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