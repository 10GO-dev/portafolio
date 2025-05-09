"use client";

import { useRef } from "react";
import { ModeToggle } from "@/src/components/mode-toggle";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Separator } from "@/src/components/ui/separator";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useInView, useSpring } from "framer-motion";
import { HeroBackground } from "@/src/components/hero-background";
import { MobileMenu } from "@/src/components/mobile-menu";
import { ProjectCard } from "@/src/components/project-card";
import { SkillBadge } from "@/src/components/skill-badge";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const experienceInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
  });
  const educationInView = useInView(educationRef, {
    once: true,
    margin: "-100px",
  });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <header className="container mx-auto py-6 px-4 flex justify-between items-center sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b">
        <motion.h1
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          10GO.dev
        </motion.h1>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            {[
              { name: "About", href: "#about" },
              { name: "Experience", href: "#experience" },
              { name: "Education", href: "#education" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <ModeToggle />
          </motion.div>
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <MobileMenu />
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-32">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center flex-start text-center space-y-12 py-8 overflow-hidden">
          <HeroBackground />
          <div className="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden mb-8 border-4 border-primary">
            <img
              src="https://avatars.githubusercontent.com/u/60454093?v=4"
              alt="Diego De Jesús Peralta"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="relative z-10 flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Diego De Jesús Peralta
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Developer
            </motion.h2>
            <motion.p
              className="max-w-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Passionate software developer with expertise in C#, Python, and
              JavaScript. Certified Microsoft Azure AI Engineer Associate.
            </motion.p>
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300"
                size="lg"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Link href="https://github.com/10GO-dev" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <Link href="#about">
                <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center items-start p-1">
                  <motion.div
                    className="w-1 h-2 bg-primary rounded-full"
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="scroll-mt-20"
          ref={aboutRef}
          variants={fadeIn}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              About Me
            </h2>
            <Separator className="bg-gradient-to-r from-primary to-purple-500/50" />
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Passionate software developer with nearly two years of experience
              creating innovative software solutions. Proficient in multiple
              programming languages including C#, Python, and JavaScript.
              Experienced working with both SQL and NoSQL databases. Recently
              acquired the Microsoft AI-102 Azure AI Engineer Associate
              certification and ready to design and implement AI solutions on
              the Azure platform.
            </p>
            <motion.div
              className="flex flex-wrap gap-4 mt-6"
              variants={container}
              initial="hidden"
              animate={aboutInView ? "show" : "hidden"}
            >
              <motion.div className="flex items-center gap-2" variants={item}>
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-primary/5"
                >
                  English
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Professional
                </span>
              </motion.div>
              <motion.div className="flex items-center gap-2" variants={item}>
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-primary/5"
                >
                  Spanish
                </Badge>
                <span className="text-sm text-muted-foreground">Native</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="scroll-mt-20"
          ref={experienceRef}
          variants={fadeIn}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Professional Experience
            </h2>
            <Separator className="bg-gradient-to-r from-primary to-purple-500/50" />
            <motion.div
              className="grid gap-6"
              variants={container}
              initial="hidden"
              animate={experienceInView ? "show" : "hidden"}
            >
              <motion.div variants={item}>
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>Full Stack Developer</CardTitle>
                        <CardDescription>Grupo Ramos</CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-primary/5"
                      >
                        2024 - Present
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Working as a Full Stack Developer, contributing to the
                      development and maintenance of enterprise applications.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>Software Developer</CardTitle>
                        <CardDescription>
                          Teleimagen Satelital S.A.
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-primary/5"
                      >
                        2022 - 2024
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Developed an automated provisioning system for network
                      devices, improving operational efficiency and reducing
                      manual configuration errors.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>Technical Support Intern</CardTitle>
                        <CardDescription>
                          Instituto Nacional de Tránsito y Transporte Terrestre
                          (INTRANT)
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-primary/5"
                      >
                        2020 - 2021
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Provided technical support by diagnosing and resolving
                      hardware/software issues and offering training to users.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="scroll-mt-20"
          ref={educationRef}
          variants={fadeIn}
          initial="hidden"
          animate={educationInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Education
            </h2>
            <Separator className="bg-gradient-to-r from-primary to-purple-500/50" />
            <motion.div
              className="grid gap-6"
              variants={container}
              initial="hidden"
              animate={educationInView ? "show" : "hidden"}
            >
              <motion.div variants={item}>
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>Software Development Technologist</CardTitle>
                        <CardDescription>
                          Instituto Tecnológico de las Américas (ITLA)
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-primary/5"
                      >
                        2020 - 2023
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>
                          Computer Applications Development and Administration
                          Technician
                        </CardTitle>
                        <CardDescription>
                          Politécnico María de la Altagracia (POMAVID)
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-primary/5"
                      >
                        2016 - 2020
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="scroll-mt-20"
          ref={projectsRef}
          variants={fadeIn}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Featured Projects
            </h2>
            <Separator className="bg-gradient-to-r from-primary to-purple-500/50" />
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={container}
              initial="hidden"
              animate={projectsInView ? "show" : "hidden"}
            >
              <motion.div variants={item}>
                <ProjectCard
                  title="Network Provisioning System"
                  description="Automated system for configuring and provisioning network devices, reducing manual errors and improving efficiency."
                  tags={["C#", ".NET", "Azure", "DevOps"]}
                  image="/placeholder.svg?height=200&width=400"
                />
              </motion.div>
              <motion.div variants={item}>
                <ProjectCard
                  title="AI-Powered Analytics Dashboard"
                  description="Dashboard leveraging Azure AI services to provide insights and analytics for business data."
                  tags={["Python", "Azure AI", "React", "Node.js"]}
                  image="/placeholder.svg?height=200&width=400"
                />
              </motion.div>
              <motion.div variants={item}>
                <ProjectCard
                  title="Inventory Management System"
                  description="Full-stack application for tracking and managing inventory with real-time updates."
                  tags={["JavaScript", "MongoDB", "Express", "React"]}
                  image="/placeholder.svg?height=200&width=400"
                />
              </motion.div>
              <motion.div variants={item}>
                <ProjectCard
                  title="Mobile Fitness Tracker"
                  description="Cross-platform mobile application for tracking fitness activities and progress."
                  tags={["Flutter", "Firebase", "Kotlin", "Swift"]}
                  image="/placeholder.svg?height=200&width=400"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills & Certifications Section */}
        <motion.section
          id="skills"
          className="scroll-mt-20"
          ref={skillsRef}
          // variants={fadeIn}
          // initial="hidden"
          // animate={skillsInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Skills & Certifications
            </h2>
            <Separator className="bg-gradient-to-r from-primary to-purple-500/50" />

            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2">
                <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="technical" className="mt-6">
                <motion.div
                  className="flex flex-wrap gap-3"
                  // variants={container}
                  // initial="hidden"
                  // animate={skillsInView ? "show" : "hidden"}
                >
                  {[
                    "C#",
                    ".NET",
                    "Python",
                    "JavaScript",
                    "Node.js",
                    "React.js",
                    "Vue.js",
                    "SQL",
                    "MySQL",
                    "MongoDB",
                    "Azure",
                    "DevOps",
                    "Docker",
                    "Linux",
                    "Ionic",
                    "Flutter",
                    "Kotlin",
                    "Data Analytics",
                  ].map((skill, index) => (
                    <motion.div key={skill} variants={item} custom={index}>
                      <SkillBadge name={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="soft" className="mt-6">
                <motion.div
                  className="flex flex-wrap gap-3"
                  // variants={container}
                  // initial="hidden"
                  // animate={skillsInView ? "show" : "hidden"}
                >
                  {[
                    "Problem Solving",
                    "Team Work",
                    "Adaptability",
                    "Communication",
                    "Critical Thinking",
                    "Time Management",
                    "Leadership",
                  ].map((skill, index) => (
                    <motion.div key={skill} variants={item} custom={index}>
                      <SkillBadge name={skill} variant="soft" />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <motion.div
                className="grid gap-4"
                variants={container}
                initial="hidden"
                animate={skillsInView ? "show" : "hidden"}
              >
                <motion.div variants={item}>
                  <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <CardHeader>
                      <CardTitle className="text-base">
                        AI-102: Azure AI Engineer Associate
                      </CardTitle>
                      <CardDescription>Microsoft (2024)</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
                <motion.div variants={item}>
                  <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <CardHeader>
                      <CardTitle className="text-base">
                        Scrum Foundation Professional Certification
                      </CardTitle>
                      <CardDescription>Scrum.org (2023)</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="scroll-mt-20"
          ref={contactRef}
          variants={fadeIn}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Contact
            </h2>
            <Separator className="bg-gradient-to-r from-primary to-purple-500/50" />
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              animate={contactInView ? "show" : "hidden"}
            >
              <motion.div variants={item}>
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <a
                        href="mailto:Diegoperalta0929@gmail.com"
                        className="hover:underline hover:text-primary transition-colors"
                      >
                        Diegoperalta0929@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <a
                        href="tel:+18293890262"
                        className="hover:underline hover:text-primary transition-colors"
                      >
                        +1 (829) 389-0262
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Github className="h-5 w-5" />
                      </div>
                      <a
                        href="https://github.com/10GO-dev"
                        target="_blank"
                        rel=""
                        className="hover:underline hover:text-primary transition-colors"
                      >
                        github.com/10GO-dev
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <a
                        href="https://www.linkedin.com/in/10go-dev"
                        target="_blank"
                        rel=""
                        className="hover:underline hover:text-primary transition-colors"
                      >
                        linkedin.com/in/10go-dev
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader>
                    <CardTitle>Professional References</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium">Angel Miguel Fernández</h4>
                      <p className="text-sm text-muted-foreground">
                        Software Engineer
                      </p>
                      <p className="text-sm">+1 (809) 654-5785</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Marcial Pichardo</h4>
                      <p className="text-sm text-muted-foreground">
                        Systems Engineer
                      </p>
                      <p className="text-sm">+1 (809) 877-5672</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t py-6 md:py-10 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Diego De Jesús Peralta. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/10GO-dev"
              target="_blank"
              rel=""
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/10go-dev"
              target="_blank"
              rel=""
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.div>
            </Link>
            <Link href="mailto:Diegoperalta0929@gmail.com">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
