import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles.css';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        if (!name || !email || !description) {
            toast.error('Please fill in all fields before submitting.');
            return false;
        }
        return true;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Log the form data
        console.log('Form submitted:', { name, email, description });

        // Show a success message using toast
        toast.success('Your issue has been submitted successfully!');

        // Set the submitted state to true to display the thank-you message
        setSubmitted(true);

        // Clear the form fields
        setName('');
        setEmail('');
        setDescription('');
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            {submitted ? (
                <p>Thank you for contacting us! We'll get back to you soon.</p>
            ) : (
                <>
                    <p>If you didn't find a solution, please describe your issue below:</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Description:
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ContactPage;