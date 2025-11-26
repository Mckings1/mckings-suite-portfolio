import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  credentialUrl?: string;
}

export function CertificationCard({ title, issuer, date, logo, credentialUrl }: CertificationCardProps) {
  return (
    <Card className="hover-lift glass-card">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-16 w-16 flex items-center justify-center bg-muted rounded-lg">
          <img src={logo} alt={issuer} className="h-12 w-12 object-contain" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{issuer}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{date}</span>
          {credentialUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={credentialUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Credential
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
