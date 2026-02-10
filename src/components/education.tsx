import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="pt-8 pb-4 sm:pt-12 sm:pb-6">
      <h2 className="text-xl font-semibold tracking-wide sm:text-2xl">Education</h2>

      <div className="border border-border bg-card my-4 sm:my-6">
        <div className="flex items-start gap-3 p-4 sm:gap-4 sm:p-6">
          <div className="flex-shrink-0">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              B.Tech in Computer Science
            </h3>
            <div className="text-xs text-muted-foreground sm:text-sm">
              Guru Gobind Singh Indraprastha University
            </div>
            <div className="text-xs text-muted-foreground sm:text-sm">
              2016 &mdash; 2020
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
