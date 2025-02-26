import Facebook from "../icons/facebook";
import WhatsApp from "../icons/whatsapp";

export default function Footer() {
  return (
    <footer className="px-5 py-10 bg-primary text-white border-t border-white/20">
      <div className="mx-auto container flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="inline-flex items-center justify-center gap-2">
          <a href="#">
            <Facebook className="size-6" />
          </a>
          <a href="#">
            <WhatsApp className="size-6" />
          </a>
        </div>
        <p>Copyright &copy; 2025 | All Rights Reserved</p>
      </div>
    </footer>
  );
}
