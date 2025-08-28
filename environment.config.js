// Environment Configuration
// This file can be pushed to GitHub and used to configure environment variables

const environmentConfig = {
  // Email Service (Resend)
  emailService: {
    type: 'resend', // 'resend', 'formspree', 'emailjs'
    config: {
      // Resend Configuration
      resend: {
        apiKey: process.env.RESEND_API_KEY || 're_1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        fromEmail: 'Portfolio Contact <onboarding@resend.dev>',
        toEmail: process.env.YOUR_EMAIL || 'ilman84@gmail.com'
      },
      
      // Formspree Configuration (Alternative)
      formspree: {
        formId: process.env.FORMSPREE_FORM_ID || 'your_formspree_form_id_here'
      },
      
      // EmailJS Configuration (Alternative)
      emailjs: {
        serviceId: process.env.EMAILJS_SERVICE_ID || 'your_emailjs_service_id_here',
        templateId: process.env.EMAILJS_TEMPLATE_ID || 'your_emailjs_template_id_here',
        publicKey: process.env.EMAILJS_PUBLIC_KEY || 'your_emailjs_public_key_here'
      }
    }
  },
  
  // Site Configuration
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://myportofolio-8ik66hvvf-ilmans-projects-c0d3dacb.vercel.app',
    name: 'My Portfolio',
    contactEmail: 'ilman84@gmail.com'
  },
  
  // Database Configuration (if needed)
  database: {
    url: process.env.DATABASE_URL || 'your_database_connection_string_here'
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = environmentConfig;
}

// Export for ES modules
if (typeof exports !== 'undefined') {
  exports.default = environmentConfig;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
  window.environmentConfig = environmentConfig;
}
