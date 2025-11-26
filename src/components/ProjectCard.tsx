import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: "data-science" | "frontend";
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-lift glass-card">
      {image && (
        <div className="h-48 overflow-hidden bg-muted">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
