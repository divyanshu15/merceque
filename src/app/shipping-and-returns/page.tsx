import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns | Merceque",
  description: "Information regarding our shipping policies, delivery times, and 30-day return policy for our eco-friendly products.",
};

export default function ShippingAndReturnsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full pt-32 pb-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-12">
          Shipping & <span className="text-primary italic font-serif">Returns</span>
        </h1>

        <div className="flex flex-col gap-12 text-gray-600 dark:text-gray-400">
          
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">1. Shipping Policy</h2>
            <p className="leading-relaxed">
              At Merceque, we are committed to sustainability, and this extends to our shipping practices. We utilize 100% plastic-free, recyclable, and biodegradable packaging for all our orders. We partner with carriers who prioritize carbon-neutral delivery options whenever possible.
            </p>
            <h3 className="text-lg font-bold text-foreground mt-2">Processing Time</h3>
            <p className="leading-relaxed">
              All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
            </p>
            <h3 className="text-lg font-bold text-foreground mt-2">Domestic Shipping Rates and Estimates</h3>
            <p className="leading-relaxed">
              Shipping charges for your order will be calculated and displayed at checkout. We offer free standard shipping on all domestic orders over $50. Standard delivery typically takes 3-5 business days. Expedited shipping options are available for an additional fee.
            </p>
            <h3 className="text-lg font-bold text-foreground mt-2">International Shipping</h3>
            <p className="leading-relaxed">
              We offer international shipping to select countries. Shipping costs and delivery times vary significantly based on your location. Please note that your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. Merceque is not responsible for these charges if they are applied and are your responsibility as the customer.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">2. Return Policy</h2>
            <p className="leading-relaxed">
              We stand behind the quality of our premium bamboo products. If you are not completely satisfied with your purchase, we're here to help.
            </p>
            <h3 className="text-lg font-bold text-foreground mt-2">30-Day Return Window</h3>
            <p className="leading-relaxed">
              We accept returns up to 30 days after delivery. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging.
            </p>
            <h3 className="text-lg font-bold text-foreground mt-2">Exceptions / Non-returnable items</h3>
            <p className="leading-relaxed">
              Due to hygiene reasons, certain personal care items (such as bamboo toothbrushes and combs) cannot be returned once the sealed packaging has been opened. Custom-branded corporate orders are also non-refundable unless they arrive defective or damaged.
            </p>
            <h3 className="text-lg font-bold text-foreground mt-2">Refunds</h3>
            <p className="leading-relaxed">
              Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
            </p>
            <h3 className="text-lg font-bold text-foreground mt-2">Return Shipping</h3>
            <p className="leading-relaxed">
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">3. Damaged Items</h2>
            <p className="leading-relaxed">
              In the event that your order arrives damaged in any way, please email us as soon as possible at <a href="mailto:support@merceque.com" className="text-primary hover:underline">support@merceque.com</a> with your order number and a photo of the item's condition. We address these on a case-by-case basis but will try our best to work towards a satisfactory solution.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
