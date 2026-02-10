import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="pt-12 pb-6">
      <h2 className="text-2xl font-semibold tracking-wide">Education</h2>

      <div className="border border-border bg-card my-6">
        <div className="flex items-start gap-4 p-6">
          <div className="flex-shrink-0">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-foreground">
              B.Tech in Computer Science
            </h3>
            <div className="text-sm text-muted-foreground">
              Guru Gobind Singh Indraprastha University
            </div>
            <div className="text-sm text-muted-foreground">
              2016 &mdash; 2020
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
