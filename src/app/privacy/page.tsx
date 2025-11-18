"use client";

import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <div className="bg-[#E8DCC4] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3E3426] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#9C8B6C]">
            Last updated: January 19, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              1. Introduction
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed mb-4">
              {siteConfig.name} ("we", "our", or "us") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-[#5A4E3F] leading-relaxed">
              This policy complies with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We are the data controller responsible for your personal data.
            </p>
          </section>

          {/* Data We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              2. Information We Collect
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed mb-4">
              We may collect and process the following types of personal data:
            </p>

            <h3 className="text-xl font-light text-[#3E3426] mb-3 mt-6">
              2.1 Information You Provide
            </h3>
            <ul className="list-disc list-inside text-[#5A4E3F] space-y-2 mb-4">
              <li>Name and contact information (email address, phone number, company name)</li>
              <li>Professional information (job title, industry, company size)</li>
              <li>Communication preferences and subscription choices</li>
              <li>Any information you provide through contact forms, email, or consultation requests</li>
              <li>Information shared during meetings, calls, or consultations</li>
            </ul>

            <h3 className="text-xl font-light text-[#3E3426] mb-3 mt-6">
              2.2 Information We Collect Automatically
            </h3>
            <ul className="list-disc list-inside text-[#5A4E3F] space-y-2 mb-4">
              <li>Technical information including IP address, browser type, device information</li>
              <li>Usage data including pages visited, time spent, and navigation patterns</li>
              <li>Cookies and similar tracking technologies (see Section 7)</li>
              <li>Referral sources and campaign information</li>
            </ul>
          </section>

          {/* How We Use Data */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed mb-4">
              We process your personal data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-[#5A4E3F] space-y-2">
              <li><strong>To provide our services:</strong> Responding to inquiries, scheduling consultations, and delivering automation solutions</li>
              <li><strong>To communicate with you:</strong> Sending newsletters, updates, and marketing communications (with your consent)</li>
              <li><strong>To improve our website:</strong> Analyzing usage patterns to enhance user experience and functionality</li>
              <li><strong>To comply with legal obligations:</strong> Meeting regulatory requirements and responding to legal requests</li>
              <li><strong>For business operations:</strong> Managing client relationships, invoicing, and contract management</li>
              <li><strong>To protect our interests:</strong> Preventing fraud, ensuring security, and enforcing our terms</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              4. Legal Basis for Processing
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed mb-4">
              Under GDPR, we process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc list-inside text-[#5A4E3F] space-y-2">
              <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes (e.g., newsletter subscriptions)</li>
              <li><strong>Contract performance:</strong> Processing is necessary to fulfill our contractual obligations to you</li>
              <li><strong>Legal obligations:</strong> Processing is necessary to comply with the law</li>
              <li><strong>Legitimate interests:</strong> Processing is necessary for our legitimate business interests, provided it does not override your rights</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              5. How We Share Your Information
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed mb-4">
              We may share your personal data with:
            </p>
            <ul className="list-disc list-inside text-[#5A4E3F] space-y-2 mb-4">
              <li><strong>Service providers:</strong> Third-party vendors who assist with hosting, analytics, email delivery, and other business operations</li>
              <li><strong>Professional advisors:</strong> Lawyers, accountants, and consultants as needed</li>
              <li><strong>Business partners:</strong> Technology partners when implementing automation solutions (with your consent)</li>
              <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="text-[#5A4E3F] leading-relaxed">
              We do not sell, rent, or trade your personal data to third parties for marketing purposes.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              6. International Data Transfers
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed">
              Some of our service providers may be located outside the European Economic Area (EEA). When we transfer your personal data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission or other legally compliant transfer mechanisms.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-[#5A4E3F] space-y-2 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Deliver targeted content and advertising</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="text-[#5A4E3F] leading-relaxed">
              You can control cookies through your browser settings. However, disabling cookies may affect website functionality. For more information about the cookies we use, please refer to our Cookie Policy.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              8. Data Security
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              9. Data Retention
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When determining retention periods, we consider the nature of the data, potential risks, and applicable legal obligations. Once data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              10. Your Rights Under GDPR
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed mb-4">
              Under the GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-[#5A4E3F] space-y-2 mb-4">
              <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
              <li><strong>Right to restrict processing:</strong> Request that we limit how we use your data</li>
              <li><strong>Right to data portability:</strong> Receive your data in a structured, commonly used format</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time where we rely on it</li>
              <li><strong>Right to lodge a complaint:</strong> File a complaint with your local data protection authority</li>
            </ul>
            <p className="text-[#5A4E3F] leading-relaxed">
              To exercise any of these rights, please contact us using the details in Section 13. We will respond to your request within one month.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              11. Children's Privacy
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed">
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              13. Contact Us
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-[#E8DCC4] p-6 rounded-lg">
              <p className="text-[#3E3426] mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#8B7355] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-[#3E3426]">
                <strong>Data Protection Officer:</strong> {siteConfig.contact.email}
              </p>
            </div>
          </section>

          {/* EU Representative */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#3E3426] mb-4">
              14. Supervisory Authority
            </h2>
            <p className="text-[#5A4E3F] leading-relaxed">
              If you are located in the European Economic Area and believe we have not addressed your concerns adequately, you have the right to lodge a complaint with your local data protection supervisory authority. You can find your local authority through the European Data Protection Board website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
