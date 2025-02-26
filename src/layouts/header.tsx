import Socials from "../components/socials";
import ArrowRight from "../icons/arrow-right";

export default function Header() {
  return (
    <header className="relative w-full px-5 hero">
      <div className="absolute z-0 inset-0 bg-primary md:bg-transparent md:bg-linear-to-r from-50% from-primary to-primary/50"></div>
      <div className="relative z-10 mx-auto container h-full flex items-center">
        <div className="max-w-80 w-full text-white sm:max-w-96 xl:max-w-156 2xl:max-w-4xl">
          <img
            src="/logo.webp"
            alt="proshield construction ltd"
            className="h-30"
          />
          <h1 className="mt-10 font-bold text-2xl uppercase sm:text-3xl xl:text-5xl 2xl:text-7xl">
            free roof inspections and estimates
          </h1>
          <p className="mt-4 text-base sm:text-lg xl:text-xl 2xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            tempora eius? Rem corporis quam id nobis labore quo nesciunt et
            ipsa. Officia, tempore amet ad illum ipsum voluptatem id recusandae.
          </p>
          <Button />
        </div>
      </div>
      <Socials />
    </header>
  );
}

function Button() {
  return (
    <a
      role="button"
      href="#contact"
      className="mt-6 inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-accent text-black transition-colors cursor-pointer hover:bg-white"
    >
      <span className="text-xl uppercase">get in touch</span>
      <ArrowRight className="size-5" />
    </a>
  );
}
