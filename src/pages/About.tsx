import { useState } from "react";
import { GraduationCap, Briefcase, Target, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LovableAnalyticsDashboard from "@/components/LovableAnalyticsDashboard"; // Make sure this file exists

export default function About() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <>
      {/* Floating Analytics Button */}
      <button
        onClick={() => setShowAnalytics(true)}
        className="fixed top-24 right-4 z-50 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 font-semibold text-sm"
      >
        <BarChart3 size={20} />
        Analytics
      </button>

      {/* Full Lovable-style Dashboard Modal */}
      {showAnalytics && (
        <LovableAnalyticsDashboard onClose={() => setShowAnalytics(false)} />
      )}

      {/* Main About Content */}
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              From building interfaces to automating systems and analyzing data
            </p>
          </div>

          {/* Story Section */}
          <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
            <Card className="glass-card p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started out building React applications and quickly realized I loved solving 
                problems through code. That led me to the Meta Front-End Developer certification 
                and several production apps under my belt.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Then came the pivot—repetitive tasks annoyed me, so I learned Python automation. 
                Data science followed naturally. Got certified through IBM and Microsoft programs, 
                started building ML pipelines and automation workflows that actually save time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now I split my time between front-end projects, automation scripts, and data analysis. 
                Currently pursuing an MSc in Data Science because there's always more to learn. 
                PhD might be next—we'll see where the work takes me.
              </p>
            </Card>
          </div>

          {/* Journey Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-card hover-lift">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  5+ years building production-ready web applications and AI solutions for various clients and projects.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Professional certifications from IBM, Microsoft, and Meta. Currently pursuing MSc in Data Science.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Future Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pursuing PhD in AI/ML to contribute to research while building innovative AI-powered applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <Card className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-primary">Front-End Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js", "Redux", "HTML/CSS"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-primary">Data Science & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Azure ML", "NLP"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-primary">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Azure", "Firebase", "Supabase", "Jupyter", "VS Code"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}