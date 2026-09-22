import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

// Matches the server-side limits in backend/middleware/validateContact.js
export const CONTACT_LIMITS = {
  NAME: 100,
  EMAIL: 254,
  MESSAGE: 5000
};

const EMPTY_FORM = {
  name: '',
  email: '',
  message: '',
  website: '' // Honeypot field
};

/**
 * Custom hook to manage contact form state and submission
 * Handles field values, the honeypot and timing fields used for spam protection, and status messages
 * @param {'contact_page' | 'business_card'} source - Which form the message came from
 */
export function useContactForm(source) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formLoadTime, setFormLoadTime] = useState(() => Date.now()); // Track when form loaded
  const [status, setStatus] = useState(''); // To display success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('Sending...'); // Provide feedback to the user

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formLoadTime, source }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData(EMPTY_FORM); // Reset form
        setFormLoadTime(Date.now());
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus(data.msg || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    status,
    isSubmitting,
    handleChange,
    handleSubmit
  };
}
