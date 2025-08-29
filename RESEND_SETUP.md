# Resend Email Setup Guide

Berdasarkan [dokumentasi resmi Resend](https://resend.com/docs/send-with-nextjs), berikut adalah cara setup Resend untuk portfolio website Anda.

## 🚀 Langkah Setup

### 1. Install Resend SDK
```bash
npm install resend
```

### 2. Konfigurasi Sudah Siap! ✅

API key dan email sudah dikonfigurasi langsung di kode:
- **API Key**: `re_SEWQbSmW_3NsEvztBSwcQK925w9N33jWV`
- **Email**: `ilmanbaihaqi@gmail.com`

**Tidak perlu setup environment variables di Vercel!** 🎉

### 3. Verifikasi Domain (Opsional tapi Direkomendasikan)

Setelah setup, Anda bisa verifikasi domain sendiri untuk mengganti `onboarding@resend.dev` dengan email dari domain Anda.

## 📁 File Structure

```
src/
├── components/
│   ├── email-template.tsx     # React email template
│   └── conversation.tsx       # Contact form
├── lib/
│   └── resend.ts             # Resend configuration (sudah dikonfigurasi)
└── app/
    └── api/
        └── send-email/
            └── route.ts       # API endpoint
```

## 🔧 Konfigurasi

### Email Template (`src/components/email-template.tsx`)
- Template React yang akan digunakan untuk email
- Styling yang sudah dioptimalkan
- Support untuk line breaks dalam pesan

### Resend Config (`src/lib/resend.ts`)
- **Konfigurasi sudah siap pakai!**
- API key dan email sudah hardcoded
- Tidak perlu environment variables

### API Route (`src/app/api/send-email/route.ts`)
- Endpoint untuk mengirim email
- Validasi input yang lengkap
- Error handling yang user-friendly

## ✅ Testing

1. **Local Testing**: Langsung bisa test tanpa setup tambahan
2. **Vercel Testing**: Deploy dan test form contact
3. **Email Delivery**: Email akan dikirim ke `ilmanbaihaqi@gmail.com`

## 🐛 Troubleshooting

### Error: "Failed to send email"
- Cek apakah API key masih valid
- Pastikan domain sudah diverifikasi (jika menggunakan custom domain)
- Cek logs di dashboard Vercel

## 📚 Referensi

- [Resend Next.js Documentation](https://resend.com/docs/send-with-nextjs)
- [Resend API Reference](https://resend.com/docs/api-reference)

## 🎯 Keuntungan Setup Ini

1. **Plug & Play**: Langsung bisa pakai tanpa setup environment variables
2. **Mengikuti Best Practices**: Sesuai dokumentasi resmi Resend
3. **Type Safety**: Menggunakan TypeScript untuk type safety
4. **Error Handling**: Error handling yang robust dan user-friendly
5. **Vercel Ready**: Langsung bisa deploy ke Vercel tanpa masalah
6. **Maintainable**: Kode yang mudah di-maintain dan di-update

## 🔐 Keamanan

**Note**: API key sekarang hardcoded di kode. Untuk production yang lebih aman, sebaiknya:
1. Verifikasi domain Anda di Resend
2. Gunakan environment variables di Vercel
3. Ganti `onboarding@resend.dev` dengan domain Anda
