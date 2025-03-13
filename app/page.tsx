import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Twitter, Code, Cpu, Globe, Terminal, ExternalLink } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-white/10 p-4 sticky top-0 bg-black/80 backdrop-blur-sm z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-glow">D.U.H</div>
          <nav className="hidden md:flex space-x-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                {item}
              </Link>
            ))}
          </nav>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
            Resume
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section with Particles */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[calc(100vh-200px)] relative hero-section overflow-hidden">
          <div id="particles-js" className="absolute inset-0 z-0"></div>
          <div className="space-y-6 max-w-xl z-10 relative">
            <div className="inline-block px-3 py-1 border border-purple-400 text-purple-400 text-sm animated-border">
              Hello, my name is
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-glow">Daniyal Umer Haral</h1>
            <h2 className="text-2xl md:text-4xl text-white/70">Software / AI Engineer</h2>
            <p className="text-white/60 leading-relaxed">
              I build intelligent systems and elegant software solutions. Specializing in AI applications and scalable
              software architecture.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-purple-400 text-black hover:bg-purple-500">Get in touch</Button>
              <Button variant="outline" className="border-white/20 hover:border-white/40">
                View projects
              </Button>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-purple-400 p-2 bg-black/50 z-10 border-glow">
            <div className="absolute inset-0 bg-purple-400/10"></div>
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-white/20"></div>
            <Image
              src="/daniyal-transparent.png?height=320&width=320"
              alt="Daniyal Umer Haral"
              width={320}
              height={320}
              className="mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="grid md:grid-cols-2 gap-12 items-center py-16 rounded-lg animated-gradient-1 section-transition mx-[-2rem] px-[2rem]"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight border-b border-purple-400 pb-2 inline-block">
              <span className="text-purple-400">01.</span> About Me
            </h2>
            <div className="space-y-4 text-white/80">
            <p>
              I&apos;m a software engineer with a focus on artificial intelligence and machine learning solutions. My
              journey in tech began with a fascination for how computers could be taught to solve complex problems.
            </p>
            <p>
              With experience across various domains including natural language processing, computer vision, and
              full-stack development, I bring a versatile skill set to every project.
            </p>
            <p>
              I believe in building technology that&apos;s not just intelligent, but also ethical, accessible, and designed
              with human needs at its core.
            </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/10 p-6 bg-black/30 space-y-2 hover:border-purple-400 transition-all duration-300">
              <Terminal className="text-purple-400" />
              <h3 className="font-bold">Problem Solver</h3>
              <p className="text-sm text-white/60">Tackling complex challenges with elegant solutions</p>
            </div>
            <div className="border border-white/10 p-6 bg-black/30 space-y-2 hover:border-purple-400 transition-all duration-300">
              <Cpu className="text-purple-400" />
              <h3 className="font-bold">AI Specialist</h3>
              <p className="text-sm text-white/60">Building intelligent systems that learn and adapt</p>
            </div>
            <div className="border border-white/10 p-6 bg-black/30 space-y-2 hover:border-purple-400 transition-all duration-300">
              <Code className="text-purple-400" />
              <h3 className="font-bold">Clean Coder</h3>
              <p className="text-sm text-white/60">Writing maintainable, efficient, and readable code</p>
            </div>
            <div className="border border-white/10 p-6 bg-black/30 space-y-2 hover:border-purple-400 transition-all duration-300">
              <Globe className="text-purple-400" />
              <h3 className="font-bold">Tech Explorer</h3>
              <p className="text-sm text-white/60">Continuously learning and adopting new technologies</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12 py-16 rounded-lg animated-gradient-2 section-transition mx-[-2rem] px-[2rem]">
          <h2 className="text-3xl font-bold tracking-tight border-b border-purple-400 pb-2 inline-block">
            <span className="text-purple-400">02.</span> Skills & Technologies
          </h2>

          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8 bg-transparent">
              <TabsTrigger
                value="languages"
                className="data-[state=active]:bg-purple-400 data-[state=active]:text-black"
              >
                Languages
              </TabsTrigger>
              <TabsTrigger
                value="frameworks"
                className="data-[state=active]:bg-purple-400 data-[state=active]:text-black"
              >
                Frameworks
              </TabsTrigger>
              <TabsTrigger value="ai-ml" className="data-[state=active]:bg-purple-400 data-[state=active]:text-black">
                AI/ML
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-purple-400 data-[state=active]:text-black">
                Tools
              </TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL", "Go", "Rust"].map((skill) => (
                  <div
                    key={skill}
                    className="border border-white/10 p-4 text-center hover:border-purple-400 transition-colors hover:transform hover:scale-105 duration-300 bg-black/30"
                  >
                    <div className="text-lg font-bold">{skill}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["React", "Next.js", "Node.js", "Django", "Flask", "Express", "TensorFlow", "PyTorch"].map((skill) => (
                  <div
                    key={skill}
                    className="border border-white/10 p-4 text-center hover:border-purple-400 transition-colors hover:transform hover:scale-105 duration-300 bg-black/30"
                  >
                    <div className="text-lg font-bold">{skill}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai-ml" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "NLP",
                  "Computer Vision",
                  "Reinforcement Learning",
                  "Data Science",
                  "Neural Networks",
                  "LLMs",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="border border-white/10 p-4 text-center hover:border-purple-400 transition-colors hover:transform hover:scale-105 duration-300 bg-black/30"
                  >
                    <div className="text-lg font-bold">{skill}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Git", "Docker", "AWS", "GCP", "Azure", "Kubernetes", "CI/CD", "Linux"].map((skill) => (
                  <div
                    key={skill}
                    className="border border-white/10 p-4 text-center hover:border-purple-400 transition-colors hover:transform hover:scale-105 duration-300 bg-black/30"
                  >
                    <div className="text-lg font-bold">{skill}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12 py-16 rounded-lg animated-gradient-3 section-transition mx-[-2rem] px-[2rem]">
          <h2 className="text-3xl font-bold tracking-tight border-b border-purple-400 pb-2 inline-block">
            <span className="text-purple-400">03.</span> Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Recommendation Engine",
                description:
                  "Built a scalable recommendation system using collaborative filtering and deep learning to provide personalized content suggestions.",
                tech: ["Python", "TensorFlow", "AWS", "MongoDB"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Natural Language Processing API",
                description:
                  "Developed a REST API for text analysis, sentiment detection, and entity recognition with high throughput and low latency.",
                tech: ["Python", "Flask", "spaCy", "Docker"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Real-time Data Visualization Dashboard",
                description:
                  "Created an interactive dashboard for monitoring and visualizing complex data streams with customizable views and alerts.",
                tech: ["React", "D3.js", "Node.js", "WebSockets"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Computer Vision for Quality Control",
                description:
                  "Implemented a computer vision system for automated quality control in manufacturing, reducing defects by 35%.",
                tech: ["Python", "OpenCV", "PyTorch", "Raspberry Pi"],
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-black/30 border border-white/10 overflow-hidden group hover:border-purple-400 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-purple-400/20 group-hover:bg-purple-400/10 transition-colors z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex space-x-2">
                      <Link href="#" className="p-2 border border-white/10 hover:border-purple-400 transition-colors">
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link href="#" className="p-2 border border-white/10 hover:border-purple-400 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-white/20 hover:border-purple-400 hover:text-purple-400">
              View All Projects <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12 py-16 rounded-lg animated-gradient-4 section-transition mx-[-2rem] px-[2rem]">
          <h2 className="text-3xl font-bold tracking-tight border-b border-purple-400 pb-2 inline-block">
            <span className="text-purple-400">04.</span> Work Experience
          </h2>

          <div className="space-y-8">
            {[
              {
                role: "Senior AI Engineer",
                company: "TechInnovate Solutions",
                period: "2021 - Present",
                description:
                  "Leading the development of AI-powered solutions for enterprise clients. Architecting and implementing machine learning systems that drive business value.",
                achievements: [
                  "Developed a natural language processing pipeline that improved customer service efficiency by 40%",
                  "Led a team of 5 engineers in building a computer vision system for retail analytics",
                  "Implemented MLOps practices that reduced model deployment time by 60%",
                ],
              },
              {
                role: "Software Engineer",
                company: "DataDriven Inc.",
                period: "2018 - 2021",
                description:
                  "Worked on full-stack development of data-intensive applications. Focused on building scalable backend systems and intuitive user interfaces.",
                achievements: [
                  "Built a real-time analytics dashboard used by over 500 enterprise customers",
                  "Optimized database queries resulting in 70% faster application performance",
                  "Contributed to open-source libraries for data visualization",
                ],
              },
              {
                role: "Machine Learning Intern",
                company: "AI Research Lab",
                period: "2017 - 2018",
                description:
                  "Researched and implemented machine learning algorithms for various applications. Collaborated with senior researchers on cutting-edge AI projects.",
                achievements: [
                  "Published a paper on efficient deep learning models for edge devices",
                  "Developed a prototype for emotion recognition from speech",
                  "Created educational materials on machine learning fundamentals",
                ],
              },
            ].map((job, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[200px_1fr] gap-6 border-l-2 border-white/10 pl-6 relative group hover:border-l-purple-400 transition-colors duration-300"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/20 group-hover:bg-purple-400 transition-colors"></div>
                <div>
                  <div className="text-purple-400 font-mono">{job.period}</div>
                  <div className="text-white/60">{job.company}</div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-white/80">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-400 mr-2">▹</span>
                        <span className="text-white/60">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="space-y-8 w-full max-w-4xl mx-auto text-center py-16 rounded-lg animated-gradient-1 section-transition px-4"
        >
          <h2 className="text-3xl font-bold tracking-tight border-b border-purple-400 pb-2 inline-block">
            <span className="text-purple-400">05.</span> Get In Touch
          </h2>

          <p className="text-white/70">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a question, a project idea, or
            just want to say hello, feel free to reach out!
          </p>

          <div className="flex justify-center space-x-6">
            <Link
              href="mailto:contact@daniyalumerharal.com"
              className="p-3 border border-white/10 hover:border-purple-400 hover:text-purple-400 transition-colors hover:transform hover:scale-110 duration-300 bg-black/30"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="p-3 border border-white/10 hover:border-purple-400 hover:text-purple-400 transition-colors hover:transform hover:scale-110 duration-300 bg-black/30"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="p-3 border border-white/10 hover:border-purple-400 hover:text-purple-400 transition-colors hover:transform hover:scale-110 duration-300 bg-black/30"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="p-3 border border-white/10 hover:border-purple-400 hover:text-purple-400 transition-colors hover:transform hover:scale-110 duration-300 bg-black/30"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>

          <Button className="bg-purple-400 text-black hover:bg-purple-500 mt-4 border-glow">Send Message</Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-white/40 text-sm">
        <div className="container mx-auto">
          <p>Designed & Built by Daniyal Umer Haral</p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>

      {/* Retro cursor effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <div className="cursor-dot hidden md:block absolute w-1 h-6 bg-purple-400"></div>
      </div>
    </div>
  )
}

