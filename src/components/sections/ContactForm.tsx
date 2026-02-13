'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

const projectTypes = [
  'UX/UI Design',
  'Web Development',
  'Motion Design',
  'Brand Identity',
  'Other',
];

const budgetRanges = [
  'Under $1k',
  '$1k - $5k',
  '$5k - $10k',
  '$10k+',
  'Not sure yet',
];

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg',
          'text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]',
          'focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]',
          'transition-colors',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder?: string;
}

function Select({ label, options, placeholder, id, className, ...props }: SelectProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        className={cn(
          'w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg',
          'text-[var(--color-text-primary)]',
          'focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]',
          'transition-colors appearance-none cursor-pointer',
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" className="text-[var(--color-text-secondary)]">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meelegla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Something went wrong. Please try emailing directly.');
      }
    } catch {
      alert('Something went wrong. Please try emailing directly.');
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-accent)]/10 rounded-full mb-6">
          <svg
            className="w-8 h-8 text-[var(--color-accent)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">Message Sent!</h3>
        <p className="text-[var(--color-text-secondary)]">
          Thanks for reaching out. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name *"
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Email *"
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Project Type"
          id="projectType"
          name="projectType"
          options={projectTypes}
          placeholder="Select a type"
          value={formData.projectType}
          onChange={handleChange}
        />
        <Select
          label="Budget Range"
          id="budget"
          name="budget"
          options={budgetRanges}
          placeholder="Select a range"
          value={formData.budget}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className={cn(
            'w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg',
            'text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]',
            'focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]',
            'transition-colors resize-none'
          )}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
