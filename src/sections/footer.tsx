import Facebook from "../icons/facebook";
import Whatsapp from "../icons/whatsapp";

export default function Footer() {
  return (
    <footer className="py-10 bg-primary text-white border-t border-white/20">
      <div className="mx-auto container flex items-center justify-between">
        <div className="inline-flex items-center justify-center gap-2">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Whatsapp />
          </a>
        </div>
        <p>Copyright &copy; 2025 | All Rights Reserved</p>
      </div>
    </footer>
  );
}
