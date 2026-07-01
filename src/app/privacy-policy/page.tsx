import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Merceque",
  description: "Learn how Merceque collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col w-full pt-32 pb-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-12">
          Privacy <span className="text-primary italic font-serif">Policy</span>
        </h1>

        <div className="flex flex-col gap-8 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">1. Introduction</h2>
            <p className="leading-relaxed">
              At Merceque, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">2. Data We Collect</h2>
            <p className="leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2 ml-4">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes payment card details (processed securely via our payment gateways, we do not store full card details).</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">3. How We Use Your Data</h2>
            <p className="leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling an order).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">4. Data Security</h2>
            <p className="leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">5. Third-Party Links</h2>
            <p className="leading-relaxed">
              This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">6. Your Legal Rights</h2>
            <p className="leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
            <p className="leading-relaxed">
              If you wish to exercise any of the rights set out above, please contact us.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact our data privacy manager in the following ways:
            </p>
            <p className="leading-relaxed">
              Email address: <a href="mailto:privacy@merceque.com" className="text-primary hover:underline">privacy@merceque.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
