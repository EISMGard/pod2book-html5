# Lemon Squeezy Setup Guide for Pod2Book

This guide will walk you through setting up Lemon Squeezy to sell Pod2Book as a one-time purchase.

## Why Lemon Squeezy?

- **Merchant of Record**: They handle ALL global tax compliance (EU VAT, UK VAT, GST, sales tax)
- **Lower fees**: 5% + payment processing vs Gumroad's 10%
- **File hosting**: Built-in secure download delivery
- **Better payouts**: You get ~$18.50 per $19.99 sale vs ~$17.40 with Gumroad
- **No tax headaches**: They collect, remit, and handle all tax filings globally
- **License keys**: Built-in system if you want to add validation later

## Fee Breakdown

For a $19.99 sale:
- You receive: ~$18.50
- Lemon Squeezy takes: ~$1.49 (5% platform fee + payment processing)
- **You save ~$1/sale vs Gumroad + zero tax compliance work**

---

## Step 1: Create Your Lemon Squeezy Account

1. Go to [lemonsqueezy.com](https://www.lemonsqueezy.com)
2. Click "Get Started"
3. Sign up with email or Google
4. Complete email verification
5. Create your store name (e.g., "Pod2Book" or your name)

---

## Step 2: Complete Store Setup

1. Go to Settings → Store Settings
2. Fill in:
   - **Store Name**: Pod2Book (or your business name)
   - **Store URL**: Choose your subdomain (e.g., `pod2book.lemonsqueezy.com`)
   - **Email**: support@pod2book.com
   - **Country**: Your location

3. Complete tax information (they need this to be merchant of record)
   - If US-based: Provide W-9 info
   - If international: Provide relevant tax ID

---

## Step 3: Create Your Product

1. Click "Products" → "New Product"
2. Select "Single Payment" (one-time purchase)
3. Fill in product details:

### Product Name
```
Pod2Book
```

### Product Description
```
Transform podcasts into eBooks with AI-powered transcription.

✨ FEATURES:
• AI speech-to-text with 95-98% accuracy
• Beautiful eBook format (EPUB)
• Paste Apple Podcasts or Spotify URLs
• Automatic chapter creation per episode
• Custom covers using podcast artwork
• Runs 100% locally on your Mac
• No cloud, no tracking, complete privacy

🎯 PERFECT FOR:
• Neurodivergent individuals (ADHD, autism, sensory processing)
• Deaf and hard of hearing communities
• Visual learners who prefer text
• Students taking notes from educational podcasts
• Language learners
• Anyone who prefers reading to listening

💻 REQUIREMENTS:
• macOS 13.0 or later
• Intel or Apple Silicon Mac
• Internet connection for downloading podcasts

📦 WHAT YOU GET:
• Pod2Book native macOS application
• Lifetime updates
• Unlimited conversions
• Email support at support@pod2book.com

Stop, collaborate and don't listen—Read instead!
```

### Price
```
$19.99 USD
```

### Media
- Upload product image (use `images/pod2book-logo.png`)
- Add screenshots if you have them

---

## Step 4: Upload Your App File

1. In product settings, go to "Files" tab
2. Click "Add File"
3. Upload your `Pod2Book.dmg` file
   - Max file size: 2GB (plenty for your app)
   - If you don't have the final signed version yet, upload a placeholder .zip
   - You can update this later before going live

4. Configure download settings:
   - **Download limit**: Unlimited (recommended) or set a number
   - **Link expiration**: Set to 30 days or never

---

## Step 5: Configure Product Settings

### Download Delivery
1. Go to "Email" tab
2. Customize the email customers receive:
   - Subject: "Your Pod2Book download is ready! 🎉"
   - Include download button
   - Add support email: support@pod2book.com

### Tax Settings
- **Leave at default**: Lemon Squeezy automatically handles all tax
- They'll collect EU VAT, UK VAT, GST, sales tax as needed
- You don't need to do anything!

---

## Step 6: Set Up Payment Account

1. Go to Settings → Payouts
2. Connect bank account:
   - US: Bank account or PayPal
   - International: PayPal or Wise
3. Set payout frequency:
   - **Recommended**: Weekly (minimum $50 balance)
   - Alternative: Monthly

---

## Step 7: Get Your Product URL

After saving your product, you'll get a checkout URL like:
```
https://pod2book.lemonsqueezy.com/checkout/buy/[product-id]
```

You can also create a custom short link in Settings → Links:
```
https://pod2book.lemonsqueezy.com/buy/pod2book
```

Copy this URL - you'll need it for your website!

---

## Step 8: Enable Lemon.js Overlay (Optional but Recommended)

For a smoother checkout experience, use their JavaScript overlay:

1. Go to Settings → Developer
2. Copy your Store ID
3. You'll add this to your website (I'll handle this in the next step)

This opens checkout in a popup instead of redirecting away from your site.

---

## Step 9: Update Your Website

I'll update the `index.html` to use Lemon Squeezy:
- Replace Gumroad link with Lemon Squeezy URL
- Add Lemon.js for overlay checkout
- Update "Buy Now" button

Just give me your Lemon Squeezy checkout URL and I'll make the changes!

---

## Step 10: Test Your Product

Before going live:

1. In Lemon Squeezy dashboard, enable "Test Mode"
2. Use test card: `4242 4242 4242 4242` (any future expiry, any CVC)
3. Complete test purchase and verify:
   - Download link works in email
   - File downloads correctly
   - Email formatting looks good
4. Disable test mode when ready to launch

---

## Step 11: Launch! ��

1. Set product to "Published" in Lemon Squeezy
2. Disable test mode
3. Update website with real checkout link
4. Share your product!

---

## Key Benefits Over Gumroad

### Tax Compliance (HUGE!)
- ✅ No need to register for EU VAT
- ✅ No need to file tax returns in multiple countries
- ✅ No need to track tax thresholds
- ✅ Lemon Squeezy is the "merchant of record" - they handle everything
- ✅ You get clean payouts with taxes already deducted

### Better Fees
- 5% vs Gumroad's 10% = **$1/sale more in your pocket**
- On 100 sales: $1,850 (LS) vs $1,740 (Gumroad) = **$110 extra**

### Better License Keys
- Built-in license key generation
- Easy to integrate validation into your app later
- No third-party tools needed

---

## Tips for Success

### Updating Your Product
- Swap DMG file anytime from the Files tab
- Customers can re-download latest version from their receipt email
- Great for pushing bug fixes or new features

### Handling Support
- Lemon Squeezy has built-in support ticket system
- Or handle via support@pod2book.com
- They handle payment disputes automatically

### Marketing
- Share on Product Hunt (Tuesday/Wednesday)
- Reddit: r/podcasting, r/deaf, r/MacApps
- Twitter with #accessibility hashtags
- Direct outreach to podcast networks

### Analytics
- Lemon Squeezy has great built-in analytics
- Track sales, revenue, customer locations
- Monitor trial conversion (if you add trials later)

---

## FAQ

**Q: Do I need to register for taxes in any country?**
A: No! Lemon Squeezy is the merchant of record - they handle everything.

**Q: Can I change the price later?**
A: Yes, anytime from your dashboard.

**Q: How do I handle refunds?**
A: Through Lemon Squeezy dashboard - super easy, they handle the tax refunds too.

**Q: When do I get paid?**
A: Weekly or monthly, your choice. Minimum $50 balance for weekly.

**Q: What if I want to add license keys later?**
A: Already built-in! Just enable in product settings and integrate into your app.

**Q: Do customers see "Lemon Squeezy" or "Pod2Book" on their statement?**
A: They'll see your store name that you set up.

---

## Launch Checklist

Before going live:
- [ ] Lemon Squeezy account created
- [ ] Store configured
- [ ] Product created ($19.99)
- [ ] DMG uploaded (signed & notarized)
- [ ] Product description complete
- [ ] Cover image added
- [ ] Download settings configured
- [ ] Test purchase completed
- [ ] Website updated with checkout link
- [ ] Email templates customized
- [ ] Ready to launch! 🎉

---

## Next Steps

1. Create Lemon Squeezy account
2. Set up your store
3. Create product
4. Upload DMG (can use test file first)
5. Get checkout URL
6. Give me the URL and I'll update the website!

---

**Need help?** Email support@pod2book.com or check [Lemon Squeezy's documentation](https://docs.lemonsqueezy.com)
