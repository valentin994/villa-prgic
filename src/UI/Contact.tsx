import { useInView } from "react-intersection-observer";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [ref, inView] = useInView();
  return (
    <section className="px-2 mx-1 min-h-screen flex flex-col pt-8 rounded-[40px] mb-4">
      <div
        ref={ref}
        className={`bg-gray-50 py-6 mb-2 rounded-[40px] px-8 mx-auto max-w-screen-md transform transition-all duration-300 ease-in-out ${inView ? "opacity-100" : "delay-300 opacity-20 translate-y-10"}`}
      >
        <h2 className="mb-4 text-4xl tracking-tight text-center text-blue-500 font-bold">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Interested in booking our accomodation, send us a message and check
          when it's free.
        </p>
        <form action="#" className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="john.doe@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-50 rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
      <p className="font-bold px-4 pt-4 text-center text-gray-600 sm:text-xl">
        We'll try to answer ass soon as possible, you can also contact us on
        facebook, mobile or whatsapp
      </p>
      <div className="flex justify-center px-8 pb-4">
        <a target="_blank" rel="noreferrer" href="https://wa.me/00385958203771">
          <FontAwesomeIcon
            className="text-3xl p-2 text-blue-500"
            icon={faWhatsapp}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/villaprgic"
        >
          <FontAwesomeIcon
            className="text-3xl p-2 text-blue-500"
            icon={faFacebook}
          />
        </a>
      </div>
      <div className="mb-8">
        <iframe
          title="Villa Prgic on the map"
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.33288389299!2d16.00102337624065!3d43.49539076262299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133517bf5dacedd5%3A0x56b213f83599aa72!2sApartmani%20Prgi%C4%87!5e0!3m2!1shr!2shr!4v1744375535033!5m2!1shr!2shr"
          style={{ border: "none" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
