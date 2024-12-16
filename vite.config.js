import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        'main': 'index.html',
        'category': 'pages/category/category.html',
        'product-details': 'pages/product-details/product-details.html',
        'shopping-bags': 'pages/shopping-bags/shopping-bags.html',
        'guest-checkout': 'pages/guest-checkout/guest-checkout.html',
        'checkout-payment': 'pages/checkout-payment/checkout-payment.html',
        'guest-checkout-shopping-method': 'pages/guest-checkout-shopping-method/guest-checkout-shopping-method.html'
      },
    },
  },
});
