import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_xwx3bow",
        "template_1nj4s8i",
        form.current,
        "sWx3iXf0UkTdRclaG"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message. Try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a vision or a challenge to tackle? I’d love to hear about it.
          I’m open to creative collaborations that push boundaries and deliver real value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Contact Info */}
          <div className="space-y-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:suvasthikan20@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    suvasthikan20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+94766739537"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 76 673 9537
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Colombo, Sri Lanka.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center md:text-left">Connect With Me</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                {[
                  { icon: <Linkedin />, url: "https://www.linkedin.com/in/suvasthikan-niththijanantham-974037232/" },
                  { icon: <Github />, url: "https://github.com/Suvasthikan" },
                  { icon: <Facebook />, url: "https://www.facebook.com/suvasthikan.niththijanantham" },
                  { icon: <Instagram />, url: "https://www.instagram.com/suvasthikan/" },
                ].map(({ icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Message Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-card p-8 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Type your name..."
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="reply_to"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Enter your email address..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Place your thoughts here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
