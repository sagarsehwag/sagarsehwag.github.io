import { Mail, Linkedin, Github, Phone } from "lucide-react";

const socials = [
  {
    name: "Email",
    linkTitle: "isagarsehwag@gmail.com",
    href: "mailto:isagarsehwag@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    linkTitle: "linkedin.com/in/sagarsehwag",
    href: "https://linkedin.com/in/sagarsehwag",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    linkTitle: "github.com/sagarsehwag",
    href: "https://github.com/sagarsehwag",
    icon: Github,
  },
  {
    name: "Phone",
    linkTitle: "+91 8800343531",
    href: "tel:+918800343531",
    icon: Phone,
  },
];

export function Socials() {
  return (
    <section className="pt-8 pb-4 sm:pt-12 sm:pb-6">
      <h2 className="text-xl font-semibold tracking-wide sm:text-2xl">Socials</h2>
      <ul className="grid grid-cols-1 gap-3 my-4 sm:grid-cols-2 sm:gap-4">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border bg-card p-3 sm:p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <social.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{social.name}</h3>
                  <p className="truncate text-xs text-muted-foreground">{social.linkTitle}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
