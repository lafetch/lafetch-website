"use client";

import Footer from "@/components/Footer";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

export default function TermsAndConditions() {
  return (
    <>
      <div
        className={`max-w-7xl mx-auto p-20 py-28 text-gray-300 ${secondary.className}`}
      >
        <h1 className={`font-bold text-4xl ${primary.className}`}>
          {" "}
          Terms and Conditions{" "}
        </h1>
        <div className="bg-black text-gray-300 pt-10 leading-relaxed space-y-4 max-w-7xl mx-auto">
          {/* 1. Use of Platform */}
          <h1 className="text-xl font-bold">1. Use of Platform</h1>
          <p>
            Welcome to LAFETCH ( "Site" or "Platform " ). The website
            www.la-fetch.com and mobile application Lafetch available on the
            Apple and Android App Store is owned and operated by AS10 Techretail
            Pvt Ltd ("Lafetch"), a company incorporated under the provisions of
            the Companies Act, 2013 with its registered office at 122, First
            Floor, Universal Trade Tower, Sohna Road, Omaxe City Centre,
            Sector-49, Manesar, Gurugram, Harayana, 122101. You may be accessing
            our Site from a computer or mobile phone device (through an iOS or
            Android application) and these Terms of Use govern your use of our
            Site and your conduct, regardless of the means of access.
          </p>
          <p>
            The Platform is only to be used for your personal non-commercial use
            and information. Your use of the services and features of the
            Platform shall be governed by these Terms and Conditions
            (hereinafter "Terms of Use") along with the Privacy Policy, Shipping
            Policy and Cancellations, Return, Exchange and Refund Policy
            (together "Policies") as modified and amended from time to time.
          </p>
          <p>
            By merely accessing or using the Platform, you are acknowledging,
            without limitation or qualification, that you are bound by these
            Terms of Use and the Policies, whether you have read them or not.
            ACCESSING, BROWSING, OR OTHERWISE USING THE PLATFORM INDICATES YOUR
            UNCONDITIONAL AGREEMENT TO ALL THE TERMS AND CONDITIONS IN THIS
            AGREEMENT, SO PLEASE READ THIS AGREEMENT CAREFULLY BEFORE
            PROCEEDING.
          </p>
          <p>
            If you do not agree to any of the terms enumerated in the Terms of
            Use or the Policies, please do not use the Platform. You are
            responsible for ensuring that your access to this Platform and the
            material available on or through it are legal in every jurisdiction
            in which you access or view such material.
          </p>
          <p>
            Lafetch reserves the unilateral right to change the particulars
            contained in the Terms of Use or the Policies from time to time and
            at any time, without notice, and in its sole discretion. If Lafetch
            decides to change the Terms of Use or Policies, the new version will
            be posted on the Site with the updated date. Your continued use of
            the Platform following such modifications constitutes your
            acceptance of the modified Terms of Use and Policies, whether or not
            you have read them.
          </p>

          {/* 2. Privacy Practices */}
          <h1 className="text-xl font-bold">2. Privacy Practices</h1>
          <p>
            We understand the importance of safeguarding your personal
            information and have formulated a Privacy Policy to ensure that your
            information is protected. Apart from these Terms of Use, the Privacy
            Policy governs your visit and use of the Site. Your continued use of
            the Site implies that you have read, accepted, and agree to be bound
            by the Privacy Policy.
          </p>

          {/* 3. Your Account */}
          <h1 className="text-xl font-bold">3. Your Account</h1>
          <p>
            This Site is directed to be used by adults only. We assume that any
            minor accessing our Site is under the supervision of their
            guardians. Lafetch and its associates do not knowingly collect
            information from minors. You are responsible for maintaining the
            confidentiality of your account and password, and for restricting
            access to your computer. You hereby accept responsibility for all
            activities that occur under your account. If you are accessing the
            Site on someone else’s behalf, you represent that you have the
            authority to bind that person to these Terms of Use.
          </p>
          <p>
            If you suspect that the security of your account has been breached,
            you should contact us immediately. Lafetch reserves the right to
            refuse service and/or terminate accounts without prior notice if
            these Terms of Use are violated or if it is deemed in Lafetch’s best
            interests.
          </p>

          {/* 4. Product & Services Information */}
          <h1 className="text-xl font-bold">
            4. Product &amp; Services Information
          </h1>
          <p>
            Lafetch attempts to be as accurate as possible in describing
            products on the Platform. However, we do not warrant that product
            descriptions, colors, or other content are accurate, complete,
            reliable, current, or error-free. The Site may contain typographical
            errors or inaccuracies, and product images are indicative and may
            not match the actual product. Lafetch reserves the right to update
            or correct information, errors, or omissions at any time without
            prior notice.
          </p>

          {/* 5. Product Use & Services */}
          <h1 className="text-xl font-bold">5. Product Use &amp; Services</h1>
          <p>
            The products and services available on the Platform, as well as any
            samples provided, are for your personal and/or professional use
            only. Products or services you receive from us shall not be resold
            for commercial purposes. If any product or beauty service causes
            side effects or does not suit you, Lafetch is not responsible for
            any manufacturing side effects; the brand or service provider is
            solely responsible.
          </p>
          <p>
            You should read the individual terms and conditions for products and
            services carefully and consult a specialist if necessary.
          </p>

          {/* 6. Recommendation of the Product & Services */}
          <h1 className="text-xl font-bold">
            6. Recommendation of the Product &amp; Services
          </h1>
          <p>
            Any recommendation made on the Site is purely for informational
            purposes and does not constitute an endorsement of the product or
            services by Lafetch or its associates.
          </p>

          {/* 7. Pricing Information */}
          <h1 className="text-xl font-bold">7. Pricing Information</h1>
          <p>
            Lafetch strives to provide accurate product and pricing information;
            however, errors may occur. The price of a product is not confirmed
            until an order is placed. In the event of a pricing error, Lafetch
            reserves the right to refuse or cancel orders for that
            product/service unless it has already been delivered or the service
            has been rendered. If an order is accepted, the payment will be
            processed as per the payment details provided. If the order is later
            cancelled, the payment will be reversed in accordance with
            applicable terms.
          </p>

          {/* 8. Cancellations, Return, Exchange and Refund Policy */}
          <h1 className="text-xl font-bold">
            8. Cancellations, Return, Exchange and Refund Policy
          </h1>
          <p>
            Please refer to our CANCELLATION, RETURN, EXCHANGE &amp; REFUND
            POLICY provided on our Site.
          </p>

          {/* 9. Mode of Payment */}
          <h1 className="text-xl font-bold">9. Mode of Payment</h1>
          <p>
            Payments for products on the Site may be made via Credit Cards,
            Debit Cards, Net Banking, Wallets, e-Gift cards, reward points, and
            other payment services provided by our payment gateway. Credit,
            Debit, and Net Banking options are instant and recommended for
            faster processing. Cash on Delivery (COD) is currently unavailable.
          </p>

          {/* 10. Shipping and Delivery */}
          <h1 className="text-xl font-bold">10. Shipping and Delivery</h1>
          <p>
            Please refer to our Shipping and Delivery Policy provided on our
            Site, as amended from time to time.
          </p>

          {/* 11. Chat/Call Functionality */}
          <h1 className="text-xl font-bold">11. Chat/Call Functionality</h1>
          <p>
            The Chat/Call functionality is provided to help you with any
            Site-related queries. Use of this service is subject to specific
            conditions. Lafetch may suspend the service without notice, and is
            not responsible for any delays in response. Communication through
            Chat/Call may be stored for future reference, and the service is not
            to be used for solicitation or sales.
          </p>

          {/* 12. User Content */}
          <h1 className="text-xl font-bold">12. User Content</h1>
          <p>
            All information, images, chat communications, text, software, data,
            and other materials transmitted or posted on the Site (“User
            Content”) are your responsibility. You agree not to transmit content
            that you do not have rights to, or that is harmful or unlawful.
            Lafetch does not endorse or control User Content, and is not liable
            for any errors or omissions. You waive all rights to claims
            regarding User Content. Lafetch reserves the right to remove any
            User Content that violates these Terms.
          </p>
          <p>
            If you wish to delete your User Content, please contact us at{" "}
            <em>info@la-fetch.com</em> with the necessary details. Allow up to
            30 business days for processing.
          </p>

          {/* 13. Intellectual Property Rights */}
          <h1 className="text-xl font-bold">
            13. Intellectual Property Rights
          </h1>
          <p>
            The "LAFETCH" and “LF” names, logos, and all related product and
            service names, design marks, and slogans are the trademarks or
            service marks of Lafetch. All other marks on the Site belong to
            their respective owners. No trademark license is granted by
            accessing the Site. Marks displayed on the Site are the intellectual
            property of their owners, and Lafetch is not liable for any
            unauthorized use.
          </p>

          {/* 14. Limited License */}
          <h1 className="text-xl font-bold">14. Limited License</h1>
          <p>
            Lafetch grants you a limited, non-exclusive, non-transferable,
            non-sublicensable license to access and use the Site for personal,
            non-commercial purposes only. All rights not expressly granted are
            reserved by Lafetch and its affiliates. Lafetch reserves the right
            to terminate your license to use the Site at any time without
            notice.
          </p>

          {/* 15. Representations and Warranties */}
          <h1 className="text-xl font-bold">
            15. Representations and Warranties
          </h1>
          <p>
            This Site is provided "AS IS". We make no representations regarding
            the use or accuracy of the content on the Site. Lafetch is not
            liable for any loss incurred as a result of reliance on the content.
            Your uninterrupted access to the Site may be affected by factors
            beyond our control, and Lafetch reserves the right to change or
            discontinue any aspect of the Site at any time.
          </p>

          {/* 16. Disclaimer of Warranty and Limitations of Liability */}
          <h1 className="text-xl font-bold">
            16. Disclaimer of Warranty and Limitations of Liability
          </h1>
          <p>
            THE SITE IS PRESENTED "AS IS." NEITHER WE NOR OUR HOLDING,
            SUBSIDIARIES, AFFILIATES, PARTNERS, OR LICENSORS MAKE ANY
            REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION
            WITH THESE TERMS OR THE SITE OR ANY CONTENT, INCLUDING WARRANTIES OF
            MERCHANTABILITY, NON-INFRINGEMENT, OR FITNESS FOR A PARTICULAR
            PURPOSE, EXCEPT TO THE EXTENT SUCH WARRANTIES ARE NOT LEGALLY
            EXCLUDABLE.
          </p>
          <p>
            YOU AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW,
            NEITHER WE NOR OUR HOLDING, SUBSIDIARIES, AFFILIATES, PARTNERS, OR
            LICENSORS WILL BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE,
            INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS)
            ARISING FROM THE USE OF THE SITE OR THESE TERMS, WHETHER IN
            CONTRACT, TORT, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF
            SUCH DAMAGES. OUR MAXIMUM AGGREGATE LIABILITY SHALL NOT EXCEED.
          </p>
          <p>
            YOU AGREE THAT NO CLAIMS OR ACTION ARISING OUT OF, OR RELATED TO,
            THE USE OF THE SITE OR THESE TERMS MAY BE BROUGHT BY YOU MORE THAN
            ONE (1) YEAR AFTER THE CAUSE OF ACTION AROSE. IF YOU HAVE A DISPUTE
            WITH US OR ARE DISSATISFIED WITH THE SITE, TERMINATION OF YOUR USE
            OF THE SITE IS YOUR SOLE REMEDY. WE HAVE NO OTHER OBLIGATION,
            LIABILITY, OR RESPONSIBILITY TO YOU.
          </p>

          {/* 17. Links and Third Party Sites */}
          <h1 className="text-xl font-bold">17. Links and Third Party Sites</h1>
          <p>
            References on the Site to any names, marks, products, or services of
            third parties, or hypertext links to third-party sites, are provided
            solely as a convenience to you. This does not constitute an
            endorsement or imply any association between Lafetch and those third
            parties. Lafetch is not responsible for the content or accuracy of
            third-party sites.
          </p>

          {/* 18. Termination */}
          <h1 className="text-xl font-bold">18. Termination</h1>
          <p>
            These Terms of Use remain in effect until terminated by either you
            or Lafetch. You may terminate these Terms by ceasing to use the
            Site. Lafetch may terminate these Terms at any time without notice,
            and such termination will not affect any obligations incurred prior
            to termination.
          </p>

          {/* 19. Indemnity */}
          <h1 className="text-xl font-bold">19. Indemnity</h1>
          <p>
            You agree to defend, indemnify, and hold harmless Lafetch, its
            employees, directors, officers, agents, counsel(s), and affiliates
            from any claims, liabilities, damages, losses, or expenses
            (including attorney's fees) arising out of your actions or
            inactions, including any breach of these Terms of Use or violation
            of applicable laws.
          </p>

          {/* 20. Governing Law and Jurisdiction */}
          <h1 className="text-xl font-bold">
            20. Governing Law and Jurisdiction
          </h1>
          <p>
            The Terms of Use and the Policies shall be governed by and construed
            in accordance with the laws of India. Any disputes arising from
            these Terms shall be subject to the exclusive jurisdiction of the
            courts in New Delhi and/or Haryana. Any dispute or difference shall
            be referred to an independent arbitrator whose decision shall be
            final and binding.
          </p>

          {/* 21. Site Security */}
          <h1 className="text-xl font-bold">21. Site Security</h1>
          <p>
            You are prohibited from violating or attempting to violate the
            security of the Site, including, without limitation:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Accessing data not intended for you or logging onto unauthorized
              servers.
            </li>
            <li>
              Attempting to probe, scan, or test the vulnerability of a system
              or network.
            </li>
            <li>
              Interfering with service to any other user by sending viruses or
              flooding the Site.
            </li>
            <li>
              Sending unsolicited promotional emails or forging header
              information.
            </li>
          </ul>
          <p>
            Lafetch reserves the right to investigate and cooperate with law
            enforcement if such violations occur.
          </p>

          {/* 22. Entire Agreement */}
          <h1 className="text-xl font-bold">22. Entire Agreement</h1>
          <p>
            If any part of these Terms of Use is determined to be invalid or
            unenforceable, such provision shall be replaced by a valid provision
            that most closely matches the original intent, and the remainder
            shall continue in effect. These Terms constitute the entire
            agreement between you and Lafetch regarding your use of the Site.
          </p>

          {/* 23. General */}
          <h1 className="text-xl font-bold">23. General</h1>
          <p>
            You acknowledge and agree that these Terms of Use constitute the
            complete and exclusive agreement between you and Lafetch regarding
            your use of the Site, superseding all prior proposals or
            communications. Lafetch reserves the right to modify these Terms at
            any time by posting changes on the Site. Your continued use of the
            Site constitutes acceptance of such modifications.
          </p>

          {/* 24. CONTACT INFORMATION */}
          <h1 className="text-xl font-bold">24. CONTACT INFORMATION</h1>
          <p>
            Email: <em>info@la-fetch.com</em>
          </p>
          <p>
            Address: First Floor, Universal Trade Tower, <br /> Sohna-Gurgaon
            rd, Block S, Sector 49, <br />
            Gurugram, Haryana <br />
            122018
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
