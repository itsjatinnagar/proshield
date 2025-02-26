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
  return (
    <div className="fixed z-10 bottom-7 right-5 flex flex-col items-center gap-2.5">
      {links.map((link, key) => (
        <a
          href={link.href}
          key={key}
          className="inline-block p-2 bg-accent text-black rounded-full transition-colors hover:bg-white focus:bg-white"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}
