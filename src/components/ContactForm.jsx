import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Button from './Button';
import { serviceOptions } from '../data';

const initialState = {
  name: '',
  email: '',
  phone: '',
  companyName: '',
  service: '',
  message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d][\d\s-]{6,15}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailRegex.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!phoneRegex.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';
  if (!values.service) errors.service = 'Please select a service.';
  if (!values.message.trim())
    errors.message = 'Please tell us a little about your requirement.';
  else if (values.message.trim().length < 10)
    errors.message = 'Message should be at least 10 characters.';
  return errors;
}

const fieldBase =
  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-aurex-black placeholder:text-[#9a9a9a] transition-colors focus:outline-none focus:ring-2 focus:ring-aurex-red/30';

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // No backend/email API is wired up yet — validate and confirm on the
    // client. Ready for future API integration (POST `values`).
    setErrors({});
    setSubmitted(true);
  };

  const resetForm = () => {
    setValues(initialState);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-white p-8 text-center shadow-soft">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-aurex-red/10 text-aurex-red">
          <FiCheckCircle className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-aurex-black">
          Thank you — your inquiry has been received
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out to Aurex Global Technologies. Our team will
          review your requirement and get back to you shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={resetForm}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  const fieldClass = (name) =>
    `${fieldBase} ${errors[name] ? 'border-aurex-red' : 'border-line'}`;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-aurex-charcoal">
            Full Name <span className="text-aurex-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={fieldClass('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-aurex-red">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-aurex-charcoal">
            Email Address <span className="text-aurex-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={fieldClass('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-aurex-red">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-aurex-charcoal">
            Phone Number <span className="text-aurex-red">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="Your contact number"
            className={fieldClass('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-aurex-red">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium text-aurex-charcoal">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            value={values.companyName}
            onChange={handleChange}
            placeholder="Your company (optional)"
            className={fieldClass('companyName')}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-aurex-charcoal">
            Service Required <span className="text-aurex-red">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className={`${fieldClass('service')} ${
              values.service ? 'text-aurex-black' : 'text-[#9a9a9a]'
            }`}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option} className="text-aurex-black">
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1 text-xs text-aurex-red">
              {errors.service}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-aurex-charcoal">
            Message <span className="text-aurex-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us about your communication or technology requirement…"
            className={`${fieldClass('message')} resize-y`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-aurex-red">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" variant="primary" className="mt-6 w-full sm:w-auto">
        Submit Inquiry
      </Button>
    </form>
  );
}
