import ArrowRight from "../icons/arrow-right";

export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="hero relative h-full">
        <div className="absolute inset-0 bg-linear-to-r from-40% from-primary to-primary/50"></div>
        <div className="relative z-10 mx-auto container h-full flex items-center">
          <div className="max-w-4xl w-full">
            <img
              src="/logo.webp"
              alt="proshield construction ltd"
              className="h-30"
            />
            <h1 className="mt-10 font-bold text-8xl text-white uppercase">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="mt-4 text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              tempora eius? Rem corporis quam id nobis labore quo nesciunt et
              ipsa. Officia, tempore amet ad illum ipsum voluptatem id
              recusandae.
            </p>
            <a
              href="#contact"
              className="group mt-6 px-5 py-3 bg-accent text-black inline-flex items-center justify-center overflow-hidden gap-1.5 cursor-pointer"
            >
              <span className="relative font-medium text-xl uppercase z-10">
                get in touch
              </span>
              <span className="relative p-1 before:absolute before:z-0 before:inset-0 before:bg-white before:rounded-full before:scale-[20] before:transition-transform before:ease-linear group-hover:before:scale-100">
                <ArrowRight className="relative z-10" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
