import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { redesData } from '../data/redesData';
import { toast } from "react-toastify"

export default function Contacto() {
    const form = useRef();
    const [formError, setFormError] = useState(false)
    const [formValues, setFormValues] = useState({})

    const sendEmail = (e) => {
        e.preventDefault();

        const { nombre, email, mensaje } = form.current;
        if (!nombre.value || !email.value || !mensaje.value) {
            setFormError(true);
            return;
        }

        emailjs.sendForm('service_1n4md0r', 'template_wzrsakf', form.current, '5Jb2xVlkRNAwR_TI1')
            .then((result) => {
                toast.success("Message sent successfully!", {
                    theme: "colored"
                });

                setFormValues({});
                form.current.reset();
                setFormError(false);
            })
            .catch((error) => {
                toast.error("Error sending message. Please try again.");
                console.log(error.text);
            });
    };

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id='contact' className="py-20 bg-bg-light">
            <div className="section-container">
                {/* Section title */}
                <h2 className="section-title text-4xl md:text-5xl">
                    Get In Touch
                </h2>

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
                            {/* Name field */}
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-text-primary mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formValues.nombre || ""}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>

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
                                    placeholder="john@example.com"
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
                                    rows="5"
                                    placeholder="Your message here..."
                                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    required
                                />
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                            >
                                Send Message
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Contact info and social media */}
                    <div className="space-y-8">
                        {/* Location */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-title font-bold text-primary">Location</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className='text-text-secondary font-medium'>Buenos Aires, Argentina</p>
                            </div>
                        </div>

                        {/* Social media */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-title font-bold text-primary">Follow Me</h3>
                            <ul className='flex gap-4 flex-wrap'>
                                {redesData.map(red => (
                                    <li key={red.id}>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={red.sitioWeb}
                                            title={red.nombre}
                                            className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300"
                                        >
                                            <img className='w-5 h-5' src={`/img/${red.imagen}`} alt={red.nombre} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}