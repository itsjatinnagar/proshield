import Envelope from "../icons/envelope";
import Location from "../icons/location";
import Phone from "../icons/phone";

export default function Contact() {
  return (
    <section className="py-20 bg-primary text-white" id="contact">
      <div className="mx-auto container">
        <h2 className="font-medium text-accent text-center">Contact Us</h2>
        <p className="font-bold text-2xl text-center">
          Let us know how we can help.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-center justify-start gap-4">
              <Location className="size-10" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">Visit Us</h3>
                <a href="#" className="underline">
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <Phone className="size-10" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">Call Us</h3>
                <p>4165007966</p>
                <p>9057822255</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <Envelope className="size-10" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">Mail Us</h3>
                <a
                  href="mailto:proshieldconstruction1@gmail.com"
                  className="underline"
                >
                  proshieldconstruction1@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <form
              className="space-y-2"
              action="https://formsubmit.co/6389d1ff90150c60ce4e0dedb6484b41"
              method="POST"
            >
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First Name"
                  className="block px-3 h-10 w-full border-2 border-white/20 focus-visible:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                  className="block px-3 h-10 w-full border-2 border-white/20 focus-visible:outline-none focus:border-accent"
                />
              </div>
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="block px-3 h-10 w-full border-2 border-white/20 focus-visible:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Phone Number"
                  className="block px-3 h-10 w-full border-2 border-white/20 focus-visible:outline-none focus:border-accent"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="block px-3 py-3 w-full border-2 border-white/20 focus-visible:outline-none resize-none focus:border-accent"
              />
              <button
                type="submit"
                className="w-full px-5 py-3 bg-white transition-colors hover:bg-accent text-black cursor-pointer"
              >
                <span className="font-medium text-xl uppercase">submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
