import React from "react";

export default function Privacy() {
  return (
    <div className="w-screen min-h-screen bg-gray-900 text-gray-100 p-6 overflow-x-hidden mt-16">
      <div className="max-w-3xl mx-auto animate-fadeUp">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-300 mb-6">
          <strong>Last Updated:</strong> November 2025
        </p>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">1. Introduction</h2>
          <p>
            Pravin Mishra is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li><strong>Personal Data:</strong> Name, email address, phone number, company name, job title, and other contact information you provide when contacting us or registering for our services.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and links clicked.</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>To provide, maintain, and improve our services</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send promotional communications (with your consent)</li>
            <li>To analyze usage patterns and improve our website</li>
            <li>To comply with legal obligations</li>
            <li>To prevent fraud and ensure security</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">4. Data Sharing and Disclosure</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Right to access your personal data</li>
            <li>Right to correct inaccurate data</li>
            <li>Right to request deletion of your data</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">7. Cookies</h2>
          <p>
            Our website uses cookies to enhance your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">9. Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete such information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-blue-400 font-semibold mb-2">11. Contact Me</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact me at:
          </p>
          <p>
            Pravin Mishra<br />
            Email: <a href="mailto:hello@pravinmishra.com" className="text-blue-400 underline">hello@pravinmishra.com</a><br />
            Address: Helsinki, 00100, Finland
          </p>
        </section>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease;
        }
      `}</style>
    </div>
  );
}
