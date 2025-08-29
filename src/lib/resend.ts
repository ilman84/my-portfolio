import { Resend } from 'resend';

// Initialize Resend with API key
export const resend = new Resend('re_SEWQbSmW_3NsEvztBSwcQK925w9N33jWV');

// Email configuration
export const emailConfig = {
  from: 'Portfolio Contact <onboarding@resend.dev>', // Ganti dengan domain Anda setelah verifikasi
  to: 'ilmanbaihaqi@gmail.com',
  subject: 'New Contact from Portfolio',
};
