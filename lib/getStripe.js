import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51L6iwCCiQs7FgvF8GcVkcq1ymy13VnG3WS9dmyJzl6SNt1YRiKz9An6mkT7At4efddkb8rhXlf7LRu4yyUtTsJyi00EtZIXuSP");
  }

  return stripePromise;
}

export default getStripe;