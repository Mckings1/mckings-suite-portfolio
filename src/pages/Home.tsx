import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, Code, Database, Trophy, Target, Zap } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                <Code className="h-4 w-4" />
                <span>Building | Automating | Analyzing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                mein name ist <span className="gradient-text">McKings</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground mb-8 min-h-[80px]">
                <span>I'm a </span>
                <TypeAnimation
                  sequence={[
                    "Front-End Engineer",
                    2000,
                    "AI Automation Engineer",
                    2000,
                    "Data Scientist",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="gradient-text font-semibold"
                  repeat={Infinity}
                />
              </div>
              
              <p className="text-muted-foreground mb-12 animate-fade-in">
                I transform complex data into predictive insights, repetitive tasks into intelligent AI-driven automation, and ideas into elegant, high-performance web applications — bridging AI engineering, data science, and modern frontend development.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in">
                <Button size="lg" asChild className="hover-lift">
                  <NavLink to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-lift">
                  <NavLink to="/about">About Me</NavLink>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Gradient Border Circle */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 animate-fade-in" style={{background: 'linear-gradient(135deg, hsl(220 13% 35%), hsl(220 13% 50%), hsl(220 13% 40%))'}}>
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <img 
                      src="/imgimg.jpg" 
                      alt="McKings Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-scale-in">
                  <Trophy className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-bold text-lg">4+ years</div>
                    <div className="text-xs opacity-90">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-lg text-center hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">4+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-lg hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automation & Front-End</h3>
              <p className="text-muted-foreground mb-4">
                Creating responsive applications with React and TypeScript. Clean code, intuitive interfaces. Includes automation to streamline workflows and boost productivity.
              </p>
              <Button variant="link" className="p-0" asChild>
                <NavLink to="/projects?filter=frontend">
                  View Frontend Projects <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
            
            <div className="glass-card p-8 rounded-lg hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3"> Data Science/AI Engineer</h3>
              <p className="text-muted-foreground mb-4">
                Python-driven analysis of complex datasets to extract actionable insights. Data visualization, predictive modeling and ML models. Includes AI integration for intelligent automation. 
              </p>
              <Button variant="link" className="p-0" asChild>
                <NavLink to="/projects?filter=data-science">
                  View Data Science Projects <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hi!
          </p>
          <Button size="lg" asChild className="hover-lift">
            <a href="mailto:alabioluwasegun8@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
