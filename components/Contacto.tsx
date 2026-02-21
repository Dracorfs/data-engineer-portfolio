import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { redesData } from '../data/redesData';
import { contactoData } from '../data/contactoData';
import { toast } from "react-toastify";

interface FormValues {
  [key: string]: string;
}

interface FormElement extends HTMLFormElement {
  email: HTMLInputElement;
  mensaje: HTMLTextAreaElement;
}

const Contacto = () => {
  const form = useRef<FormElement>(null);
  const [formError, setFormError] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({});

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!form.current) return;

    const { email, mensaje } = form.current;
    if (!email.value || !mensaje.value) {
      setFormError(true);
      return;
    }

    emailjs.sendForm('service_1n4md0r', 'template_wzrsakf', form.current, '5Jb2xVlkRNAwR_TI1')
      .then(() => {
        toast.success("Message sent successfully!", {
          theme: "colored"
        });

        setFormValues({});
        form.current?.reset();
        setFormError(false);
      })
      .catch((error) => {
        toast.error("Error sending message. Please try again.");
        console.log(error.text);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id='contact' className="py-20 bg-bg-light">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000000' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="section-container relative z-10">
        {/* Section title with gradient */}
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/12 via-accent/8 to-primary/12 rounded-lg blur-2xl -z-10" />
          <div>
            <h2 className="section-title text-4xl md:text-5xl relative">
              Get In Touch
            </h2>
            <p className="text-text-secondary text-center md:text-left mt-3 text-base md:text-lg">
              Interested in data, BI or analytics projects? Let's talk.
            </p>
          </div>
        </div>

        {/* Contact content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="space-y-6">
            {formError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium">
                  Please complete all fields before submitting.
                </p>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Hidden name field - for email template compatibility */}
              <input
                type="hidden"
                id="nombre"
                name="nombre"
                value="Portfolio Visitor"
              />

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email || ""}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formValues.mensaje || ""}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  required
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300 mt-8"
              >
                Start a Conversation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>

          {/* Direct Contact Card */}
          <div className="flex flex-col items-center justify-center">
            <div className="card p-8 w-full max-w-sm text-center space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center">
                <img
                  src="/img/aboutme.png"
                  alt="Andrés Martínez"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                  style={{
                    boxShadow: '0 10px 30px -8px rgba(30, 64, 175, 0.25)'
                  }}
                />
              </div>

              {/* Name and Title */}
              <div className="space-y-2">
                <h3 className="text-2xl font-title font-bold text-primary">
                  Andrés Martínez
                </h3>
                <p className="text-text-secondary font-medium">
                  Business Intelligence Developer
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/30 w-fit mx-auto">
                <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse-slow" />
                <span className="text-sm font-semibold">Open to opportunities</span>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">Email</p>
                <a
                  href={`mailto:${contactoData.email}`}
                  className="inline-block text-base font-semibold text-primary hover:text-primary-dark transition-colors break-all"
                >
                  {contactoData.email}
                </a>
              </div>

              {/* Timezone */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">Timezone</p>
                <p className="text-base font-semibold text-text-primary">
                  America/Argentina/Buenos Aires
                </p>
              </div>

              {/* Response Time */}
              <div className="pt-4 border-t border-border-color">
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">Usually replies within 24h</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <ul className='flex gap-4 justify-center'>
                  {redesData.map(red => (
                    <li key={red.id} className="group relative">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={red.sitioWeb}
                        className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <img className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' src={`/img/${red.imagen}`} alt={red.nombre} />
                      </a>
                      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs font-semibold text-white bg-text-primary rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                        {red.nombre}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
