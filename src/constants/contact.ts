export const CONTACT_CONTENT = {
  heading: 'Ready to Start Your Recovery Journey?',
  description:
    'Contact us today to schedule your consultation and take the first step towards a healthier, more active you.',
  form: {
    title: 'Send us a Message',
    successMessage: "Thank you! We'll be in touch soon.",
    fields: {
      firstName: {
        label: 'First Name',
        id: 'first',
        name: 'first',
        type: 'text',
        required: true,
      },
      lastName: {
        label: 'Last Name',
        id: 'last',
        name: 'last',
        type: 'text',
        required: true,
      },
      email: {
        label: 'Email',
        id: 'email',
        name: 'email',
        type: 'email',
        required: true,
      },
      phone: {
        label: 'Phone',
        id: 'phone',
        name: 'phone',
        type: 'tel',
        required: false,
      },
      message: {
        label: 'How can we help you?',
        id: 'message',
        name: 'message',
        rows: 4,
        required: true,
      },
    },
    submitButton: 'Send Message',
  },
  buttons: {
    primary: {
      text: 'Book Appointment',
      href: '#contact',
    },
    secondary: {
      text: 'Call Now',
      href: 'tel:+15551234567',
    },
  },
} as const;

export const CONTACT_INFO = {
  address: {
    title: 'Visit Us',
    lines: ['123 Health Street', 'Medical District', 'City, ST 12345'],
  },
  phone: {
    title: 'Call Us',
    lines: ['(555) 123-4567', 'Emergency: (555) 999-0000'],
  },
  email: {
    title: 'Email Us',
    lines: ['info@physiocenter.com', 'appointments@physiocenter.com'],
  },
  hours: {
    title: 'Hours',
    lines: ['Mon-Fri: 7AM - 8PM', 'Sat: 8AM - 5PM', 'Sun: Closed'],
  },
} as const;
