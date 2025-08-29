# Troubleshooting Email Sending Issue

## 🚨 Current Problem

Form contact mengirim error: "Internal server error. Please try again later."

## 🔍 Debugging Steps

### 1. Test Basic API Functionality

Buka browser dan akses: `http://localhost:3000/api/test-resend`

**Expected Result**: JSON response dengan status success
**If Failed**: Ada masalah dengan Next.js API routes

### 2. Check Console Logs

Buka browser developer tools → Console dan coba submit form

**Look for**:

- Log messages dari API route
- Error messages
- Network request details

### 3. Check Network Tab

Buka browser developer tools → Network dan coba submit form

**Look for**:

- Request to `/api/send-email`
- Response status code
- Response body

### 4. Check Terminal/Server Logs

Lihat terminal dimana `npm run dev` berjalan

**Look for**:

- Console.log messages dari API route
- Error messages
- Stack traces

## 🐛 Common Issues & Solutions

### Issue 1: Resend Package Not Installed

```bash
npm install resend
```

### Issue 2: API Key Invalid

- Cek apakah API key `re_SEWQbSmW_3NsEvztBSwcQK925w9N33jWV` masih valid
- Test di [Resend Dashboard](https://resend.com/emails)

### Issue 3: Domain Not Verified

- Resend memerlukan domain verification untuk production
- Gunakan `onboarding@resend.dev` untuk testing

### Issue 4: CORS Issues

- Pastikan form mengirim request ke endpoint yang benar
- Check browser console untuk CORS errors

### Issue 5: Environment Variables

- Untuk local development, pastikan tidak ada environment variables yang konflik
- Untuk Vercel, pastikan environment variables sudah diset

## 🧪 Testing Steps

### Step 1: Basic Form Test

1. Buka website di browser
2. Buka developer tools → Console
3. Isi form contact dengan data test:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Submit form
5. Lihat console logs dan network tab

### Step 2: API Endpoint Test

1. Buka `http://localhost:3000/api/test-resend`
2. Pastikan response success
3. Jika gagal, ada masalah dengan Next.js setup

### Step 3: Resend Configuration Test

1. Cek apakah Resend client bisa diinisialisasi
2. Cek apakah email config valid
3. Cek apakah API key bisa digunakan

## 📋 Debug Checklist

- [ ] Next.js dev server running (`npm run dev`)
- [ ] API endpoint accessible (`/api/test-resend`)
- [ ] Form submission reaching API (`/api/send-email`)
- [ ] Console logs showing in browser
- [ ] Server logs showing in terminal
- [ ] Resend package installed (`npm list resend`)
- [ ] API key valid and active
- [ ] No CORS errors in browser
- [ ] Network requests successful

## 🆘 If Still Not Working

1. **Check Resend Dashboard**: Pastikan API key masih aktif
2. **Test with Postman**: Test API endpoint dengan Postman/Insomnia
3. **Check Vercel Logs**: Jika deploy ke Vercel, cek function logs
4. **Contact Resend Support**: Jika semua sudah benar, mungkin ada issue di Resend

## 📞 Support

- **Resend Documentation**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Support**: [https://resend.com/support](https://resend.com/support)
- **Next.js API Routes**: [https://nextjs.org/docs/api-routes](https://nextjs.org/docs/api-routes)
