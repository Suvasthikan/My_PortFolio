import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-2xl space-y-6 text-center">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a responsible and dedicated undergraduate pursuing B.Sc. (Hons) in Information Technology at the University of Moratuwa.
              With a strong passion for challenges, I constantly seek new opportunities and embrace innovative ideas.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.8)] hover:scale-105 transition duration-300 ease-in-out"
              >
                Get In Touch
              </a>

              <a
                href="/Suvasthikan.N_SE_CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary 
               hover:bg-primary/10 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.8)] 
               hover:scale-105 transition duration-300 ease-in-out"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
