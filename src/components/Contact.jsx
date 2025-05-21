import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        error: null
    });

    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        // Simulate form submission
        setTimeout(() => {
            setStatus({
                submitting: false,
                submitted: true,
                error: null
            });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient-animate entrance-animation">
                    Contact <span className="text-secondary">Me</span>
                </h2>

                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6 glass p-8 rounded-lg hover:shadow-glow transition-all duration-300">
                        <div className="relative group">
                            <label 
                                htmlFor="name" 
                                className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                                    focusedField === 'name' ? 'text-secondary transform -translate-y-1' : 'text-textSecondary'
                                }`}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-4 py-2 rounded-md border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300 hover:border-secondary/40"
                                placeholder="Enter your name"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></div>
                        </div>

                        <div className="relative group">
                            <label 
                                htmlFor="email" 
                                className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                                    focusedField === 'email' ? 'text-secondary transform -translate-y-1' : 'text-textSecondary'
                                }`}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-4 py-2 rounded-md border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300 hover:border-secondary/40"
                                placeholder="Enter your email"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></div>
                        </div>

                        <div className="relative group">
                            <label 
                                htmlFor="subject" 
                                className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                                    focusedField === 'subject' ? 'text-secondary transform -translate-y-1' : 'text-textSecondary'
                                }`}
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('subject')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-4 py-2 rounded-md border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300 hover:border-secondary/40"
                                placeholder="Enter subject"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></div>
                        </div>

                        <div className="relative group">
                            <label 
                                htmlFor="message" 
                                className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                                    focusedField === 'message' ? 'text-secondary transform -translate-y-1' : 'text-textSecondary'
                                }`}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                required
                                rows="5"
                                className="w-full px-4 py-2 rounded-md border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300 hover:border-secondary/40 resize-none"
                                placeholder="Enter your message"
                            ></textarea>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></div>
                        </div>

                        <button
                            type="submit"
                            disabled={status.submitting}
                            className="w-full px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                        >
                            <span className="relative z-10">
                                {status.submitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-white/20 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </button>

                        {status.submitted && (
                            <div className="text-green-500 text-center mt-4 p-4 bg-green-50 rounded-md animate-fade-in">
                                <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Message sent successfully!
                            </div>
                        )}

                        {status.error && (
                            <div className="text-red-500 text-center mt-4 p-4 bg-red-50 rounded-md animate-fade-in">
                                <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                {status.error}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact; 