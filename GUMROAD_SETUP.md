# Gumroad Setup Guide for Pod2Book

## Step 1: Create Gumroad Account (5 min)

1. Go to https://gumroad.com
2. Sign up (use your business email: support@pod2book.com)
3. Complete profile setup
4. Add payment info (for receiving money)

## Step 2: Create Product (5 min)

1. Click **"Create new product"**
2. Fill in details:

**Product Details:**
- **Name:** Pod2Book - Podcast to eBook Converter
- **Price:** $19.99 USD
- **URL:** gumroad.com/l/pod2book (or choose custom)
- **Description:**
  ```
  Convert your favorite podcasts to beautifully formatted eBooks.
  
  Perfect for the deaf, hard of hearing, neurodivergent, and anyone who prefers reading.
  
  Features:
  • AI-powered transcription (95-98% accuracy)
  • Works with Apple Podcasts & Spotify
  • Beautiful EPUB format
  • Private & secure (runs locally on your Mac)
  • One-time purchase, lifetime use
  
  Requirements:
  • macOS 13.0 or later (Intel & Apple Silicon)
  
  What you get:
  • Pod2Book.app (notarized Mac application)
  • Lifetime updates
  • Email support
  
  Note: This is a digital download. After purchase, you'll receive an instant download link.
  ```

**Cover Image:**
- Upload: ~/dev/pod2book-mac-native/logo.png
- Or create a product card image (1200x630px)

**Content:**
- Upload: Pod2Book.dmg (your signed, notarized DMG file)
- Or temporarily upload Pod2Book.app.zip

**Settings:**
- ✅ Enable: "Generate unique download links"
- Set: 10 downloads per purchase
- Set: Links expire after 30 days
- ❌ Disable: "Enable license keys" (not needed)

## Step 3: Customize Checkout (Optional)

1. **Checkout Settings:**
   - Collect email: Yes (required)
   - Collect name: Optional
   - Custom fields: None needed

2. **Email to Customers:**
   - Use default or customize:
   ```
   Thanks for purchasing Pod2Book!
   
   Your download link is below. It's valid for 10 downloads within 30 days.
   
   [Download Link]
   
   Need help? Email support@pod2book.com
   
   - Ben
   ```

3. **Thank You Page:**
   - Default works fine
   - Or redirect to: https://pod2book.com/thanks

## Step 4: Get Product URL

After creating, you'll get:
- **Product URL:** https://benfrancom.gumroad.com/l/pod2book
- Or custom domain: https://pod2book.com (requires setup)

Copy this URL - you'll need it for the website!

## Step 5: Update Website

Update the "Buy Now" button on your website:

```html
<a href="https://benfrancom.gumroad.com/l/pod2book" 
   class="button large primary">
  Buy Pod2Book - $19.99
</a>
```

## Step 6: Test Purchase (5 min)

1. In Gumroad dashboard, enable **"Test Mode"**
2. Visit your product URL
3. Use test card: 4242 4242 4242 4242
4. Complete purchase
5. Verify you receive download link
6. Test downloading the file
7. Disable test mode when ready

## Step 7: Launch! 🚀

1. Make sure your DMG is signed and notarized
2. Upload final version to Gumroad
3. Set product to "Published"
4. Update website with Gumroad link
5. Test one more time
6. Announce!

## Gumroad Settings to Enable

**Recommended:**
- ✅ Email receipts
- ✅ Unique download links
- ✅ Allow customers to rate/review
- ✅ Show number of sales (social proof)
- ❌ License keys (not needed)

**Payment Options:**
- Credit/Debit cards (default)
- PayPal (enable in settings)
- Apple Pay (enable in settings)

## Fees

- **Gumroad:** 10% per sale
- **Payment processing:** ~2.9% + $0.30
- **Total fees:** ~13% per sale

At $19.99:
- You receive: ~$17.40 per sale
- Customer pays: $19.99

## Monthly Payouts

Gumroad pays you:
- Via bank transfer (free)
- Weekly or monthly (your choice)
- $10 minimum balance

## Customer Support

Customers can:
- Re-download using their email
- Request refunds (you approve)
- Email you directly

You can:
- Issue refunds from dashboard
- See all purchases and downloads
- Export customer list

## Analytics

Track:
- Number of sales
- Revenue
- Refund rate
- Download statistics
- Traffic sources

## Tips

1. **Add screenshots** to product page
2. **Add a demo video** (optional but helps)
3. **Offer a discount code** for launch (10% off = $17.99)
4. **Enable "Pay what you want"** for accessibility mission (optional)

## Custom Domain (Optional)

Point pod2book.com to Gumroad:
1. Gumroad dashboard → Settings → Custom domain
2. Add DNS CNAME: shop.pod2book.com → domains.gumroad.com
3. Products will be at: shop.pod2book.com/l/pod2book

## Launch Checklist

Before going live:
- [ ] Gumroad product created
- [ ] DMG uploaded (signed & notarized)
- [ ] Product description complete
- [ ] Cover image added
- [ ] Price set ($19.99)
- [ ] Download links enabled (10 downloads, 30 days)
- [ ] Test purchase completed
- [ ] Website updated with Gumroad link
- [ ] Email templates customized
- [ ] Ready to launch! 🎉

## Next Steps

1. Set up Gumroad account
2. Create product
3. Upload DMG (can use test file first)
4. Get product URL
5. I'll update the website with the link

Let me know when you have the Gumroad URL!
