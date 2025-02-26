import Envelope from "../icons/envelope";
import Location from "../icons/location";
import Phone from "../icons/phone";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-14 bg-primary text-white lg:py-20">
      <div className="mx-auto container text-center">
        <h2 className="font-medium text-accent">Contact Us</h2>
        <p className="font-bold text-2xl">Let us know how we can help you.</p>
        <div className="mt-6 flex flex-col gap-10 md:flex-row lg:mt-10">
          <div className="flex-1/2 space-y-8 text-left">
            <div className="flex items-center justify-start gap-4">
              <Location className="size-10" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">Visit Us</h3>
                <a
                  href="#"
                  className="text-white/85 underline transition-all hover:no-underline hover:text-white"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              <Phone className="size-10" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">Visit Us</h3>
                <p className="text-white/85">4165007966</p>
                <p className="text-white/85">9057822255</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              <Envelope className="size-10" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">Mail Us</h3>
                <a
                  href="#"
                  className="text-white/85 underline transition-all hover:no-underline hover:text-white"
                >
                  proshieldconstruction1@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form className="flex-1/2 space-y-4">
            <div className="flex flex-col gap-3 xl:flex-row">
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                className="block px-3 h-10 w-full border-2 border-white/20 focus-visible:outline-none focus:border-accent"
              />
              <input
                type="text"
                name="last-name"
                placeholder="Last Name"
                className="block px-3 h-10 w-full border-2 border-white/20 focus-visible:outline-none focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-3 xl:flex-row">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="block px-3 h-10 w-full border-2 border-white/20 focus-visible:outline-none focus:border-accent"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="block px-3 h-10 w-full border-2 border-white/20 focus-visible:outline-none focus:border-accent"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="block px-3 py-3 h-20 w-full border-2 border-white/20 focus-visible:outline-none resize-none focus:border-accent"
            />
            <button
              type="submit"
              className="w-full px-5 py-3 bg-white transition-colors hover:bg-accent text-black cursor-pointer"
            >
              <span className="text-xl uppercase">submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
