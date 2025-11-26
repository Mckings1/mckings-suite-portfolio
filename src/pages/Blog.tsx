import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn the patterns and practices I use to build maintainable and scalable React applications.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Introduction to Neural Networks for Beginners",
    excerpt: "A beginner-friendly guide to understanding how neural networks work and how to build your first model.",
    date: "2024-03-10",
    readTime: "12 min read",
    category: "Data Science",
  },
  {
    id: 3,
    title: "My Journey from Frontend to AI Engineering",
    excerpt: "How I transitioned from building user interfaces to developing intelligent systems.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Career",
  },
  {
    id: 4,
    title: "Azure ML: Getting Started with Cloud Machine Learning",
    excerpt: "A practical guide to deploying your first machine learning model on Azure ML.",
    date: "2024-02-28",
    readTime: "10 min read",
    category: "AI/ML",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on web development, data science, and AI.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="glass-card hover-lift">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More articles coming soon. Subscribe to stay updated!
          </p>
        </div>
      </div>
    </div>
  );
}
