import { useEffect, useState } from "react";
import Envelope from "../icons/envelope";
import Facebook from "../icons/facebook";
import WhatsApp from "../icons/whatsapp";

const links = [
  {
    icon: Facebook,
    href: "#",
  },
  {
    icon: WhatsApp,
    href: "#",
  },
  {
    icon: Envelope,
    href: "#",
  },
];

export default function Socials() {
  const [state, setState] = useState(true);

  const listenToScroll = () => {
    let footerHeight = document.querySelector("footer")?.offsetHeight || 0;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollPosition = window.scrollY + window.innerHeight;
    let height = scrollHeight - footerHeight;
    if (scrollPosition >= height) {
      setState(false);
    } else {
      setState(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  if (!state) return null;
  return (
    <div className="fixed z-10 bottom-7 right-5 flex flex-col items-center gap-2.5">
      {links.map((link, key) => (
        <a
          href={link.href}
          key={key}
          className="inline-block p-2 bg-accent text-black rounded-full shadow-xl shadow-primary/40 transition-colors hover:bg-white"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}
