type CreditCardDetails = { number: string; expiry: Date; name?: string };
type CreditCardPayment = {
  creditCardDetails: CreditCardDetails;
  paypalId?: never;
};
type PayPalPayment = { creditCardDetails?: never; paypalId: string };
type PaymentOption = CreditCardPayment | PayPalPayment;

function checkout(payment: PaymentOption) {}

checkout({ creditCardDetails: { number: "123", expiry: new Date() } });
checkout({
  creditCardDetails: { number: "123", expiry: new Date() },
});
// checkout({});

type Config<T extends boolean> = {
  auth: T;
} & (T extends true ? { credentials: string } : {});

const secureConfig = { auth: true, credentials: "password" };
const openConfig = { auth: false };
// const openConfig2: Config<false> = { auth: true, credentials: "test" };
console.log(typeof secureConfig);
secureConfig.auth = false;
console.log(secureConfig);
