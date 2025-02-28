"use client";
import React from "react";
import localFont from "next/font/local";

const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

export default function PrivacyPolicy(): JSX.Element {
  return (
    <div
      className={`max-w-7xl mx-auto p-6 lg:p-20 py-28 text-gray-300 ${secondary.className}`}
    >
      <h1 className={`font-bold text-4xl ${primary.className}`}>
        Privacy Policy
      </h1>
      <div className="bg-black text-gray-300 pt-10 leading-relaxed space-y-4">
        {/* 1. General */}
        <h2 className="text-xl font-bold">1. General</h2>
        <p>
          <strong>1.1</strong> Welcome to LAFETCH ( &quot;Site&quot; or
          &quot;Platform &quot; ). The website www.la-fetch.com and mobile
          application Lafetch available on the Apple and Android App Store is
          owned and operated by AS10 Techretail Pvt Ltd ( &quot;Lafetch&quot; ),
          a company incorporated under the provisions of the Companies Act, 2013
          with its registered office at 122, First Floor, Universal Trade Tower,
          Sohna Road, Omaxe City Centre, Sector-49, Manesar, Gurugram, Harayana,
          122101. You may be accessing our Site from a computer or mobile phone
          device (through an iOS or Android application) and this Privacy Policy
          will govern your use of our Site and your conduct, regardless of the
          means of access.
        </p>
        <p>
          Through the Platform, Lafetch inter alia facilitates the sale and
          purchase of a diverse range of fashion, home, lifestyle and other
          products and services listed on and sold on the Platforms from time to
          time (“Products”) to the users of the Platforms (“User” or “Users” or
          “you” or “your”). The term User/User(s) means any individual or entity
          which uses, accesses or browses the Platform and/or purchases Products
          from the Platform.
        </p>
        <p>
          <strong>1.2</strong> Lafetch is committed to protecting and respecting
          your privacy. This privacy policy (“Privacy Policy”), together with
          the Lafetch Terms and Conditions (“Terms of Use”) and all other
          policies notified by us from time to time governs your use of the
          Platforms. This Privacy Policy describes our policies and procedures
          on the collection, use, disclosure, sharing, processing, transfer,
          storage, retention and safeguarding of the Information (defined
          hereinafter) provided to us by you through the use of the Platforms
          and/or pursuant to the purchase of the Products on the Platforms.
        </p>

        {/* 2. Applicability of the Privacy Policy */}
        <h2 className="text-xl font-bold">
          2. Applicability of the Privacy Policy:
        </h2>
        <p>
          <strong>2.1</strong> By using, browsing, accessing, or purchasing
          Products from the Platforms and/or by submission of Information (and
          in case of a minor – submission of such minor’s Information either by
          the parents or the legal guardian), you agree to be bound by the terms
          of this Privacy Policy and consent to the collection, use, storage,
          possession, dealing, processing, handling, sharing, disclosure,
          transfer or retention of your Information in accordance with the terms
          of the Privacy Policy and agree to be governed by the laws of India
          including but not limited to the laws applicable to data protection
          and privacy. We shall not use the User’s Information in any manner
          except as provided under this Privacy Policy and to the extent
          permitted under the laws applicable to data protection and privacy.
          All capitalized terms used herein if not defined shall have the same
          meaning as ascribed to them under the Terms of Use.
        </p>
        <p>
          <strong>2.2</strong> You may be able to access or browse the Platforms
          from outside the geographical territories of the Republic of India,
          however please note that the Products listed on the Platform are not
          offered for sale outside the geographical territories of the Republic
          of India. Your Information will primarily be collected, stored and
          processed in India and will be governed by the applicable laws
          (including data protection and privacy laws) that are different from
          those that apply in the country in which you are located.
        </p>
        <p>
          <strong>2.3</strong> This document is an electronic record and is
          governed by the provisions under the Information Technology Act, 2000
          and rules made thereunder as may be applicable, and the amended
          provisions pertaining to electronic records in various statutes as
          amended by the Information Technology Act, 2000. This electronic
          record is generated by a computer system and does not require any
          physical or digital signatures.
        </p>
        <p>
          <strong>2.4</strong> You may be asked to provide your information
          anytime you visit, access, use or browse the Platforms. We may share
          information and use it consistent with the provisions of this Privacy
          Policy. We may also combine it with other information to provide and
          improve our Products, services, content and advertising. Please take a
          moment to familiarize yourself with our Privacy Policy. If you do not
          agree with any provisions of the Terms or this Privacy Policy, we
          advise you to not use or access the Platforms.
        </p>

        {/* 3. Type of Information Collected */}
        <h2 className="text-xl font-bold">3. Type of Information Collected</h2>
        <p>
          <strong>3.1</strong> This Privacy Policy sets out the type of
          Information collected from the Users, including the nature of the
          Sensitive Personal Data/Information (defined hereinafter), the
          purpose, means and modes of usage of such Information and how and to
          whom we shall disclose, share or transfer such Information. You may at
          any time withdraw your consent for collection and use of your
          Information including Personal Information (defined hereinafter) or
          Sensitive Personal Data/Information. However, please note that if you
          withdraw your consent, we may no longer be able to provide you with
          the corresponding service for which you have withdrawn your consent.
          It is hereby clarified that your decision to withdraw your consent
          will not affect the processing of Information based on your previous
          consent prior to the withdrawal.
        </p>
        <p>
          <strong>3.2</strong> We may collect a variety of Information from you,
          including your name, mailing address, phone number, email address and
          contact preferences, including any other usage and interaction details
          with us or our affiliates. We may collect such information which when
          combined with other pieces of information available with us could
          reasonably allow you to be identified (“Personal Information”).
          Personal Information shall include but is not limited to your full
          name, personal contact numbers, residential address, email address,
          gender, date of birth. Personal Information can be in any format
          including but not limited to photographs or documents. We may also
          collect such Non-Personal Information which when clubbed with Personal
          Information shall be treated as Personal Information. Non-Personal
          Information includes data or information that doesn’t personally
          identify you and may include hardware identifiers, unique systems or
          application software etc.
        </p>
        <p>
          <strong>3.3</strong> We may also collect, receive, process or store
          certain sensitive personal data/information provided by you which may
          consist of, but not be limited to:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>(a) Password;</li>
          <li>
            (b) Financial information such as bank account or credit/debit card
            details or other payment instrument information;
          </li>
          <li>
            (c) Any detail relating to (a) and (b) as provided to us for
            providing the Products and/or processing your orders placed with us
            on the Platform; and
          </li>
          <li>
            (d) Any of the information received under (a) and (b) by us for
            processing or storing under lawful contract or otherwise.
          </li>
        </ul>
        <p>
          (Collectively, referred to as “Sensitive Personal Data/Information”).
          Personal Information and Sensitive Personal Data/Information are
          collectively referred to as “Information”.
        </p>
        <p>
          <strong>3.4</strong> You agree to provide information, which shall be
          true, correct, up to date and accurate. You may access, amend, alter
          or require deletion of your information partially or fully by
          contacting us at <em>customersupport@la-fetch.com</em>.
        </p>
        <p>
          <strong>3.5</strong> The Platforms are not directed towards minors. We
          do not knowingly collect Personal Information from any User who is
          under 18 (Eighteen) years. If we are made aware that we have collected
          the Personal Information of a person below the age of 18, we will take
          steps to delete the Information within a reasonable time frame. If a
          parent or legal guardian becomes aware that his or her child has
          provided Information on the Platforms without their consent, they
          shall contact us for deletion of such Information. In the event where,
          in contravention to this Privacy Policy and the Terms of Use, a person
          below the age of 18 uses the services, we shall not be held liable or
          responsible for any damage or injury suffered.
        </p>
        <p>
          <strong>3.6</strong> Location Information: We may also collect
          information related to your location through Bluetooth and WiFi
          signals or other technologies. In order to collect geo-location
          information, the location settings must be enabled on your device.
          Therefore, in some cases, the Platform may request that you enable the
          location settings. Except in cases where any specific services
          requested by you require or involve personal identification, the
          Platform collects location data anonymously and in a form that does
          not personally identify you.
        </p>
        <p>
          <strong>3.7</strong> Other Information: The Platform may also collect
          other information about you in ways described to you or with your
          consent (e.g., permission to access your location, camera, microphone,
          etc.). You can choose not to provide certain types of information, but
          doing so may affect your ability to avail or use some services on the
          Platform.
        </p>

        {/* 4. Use of Information Collected */}
        <h2 className="text-xl font-bold">4. Use of Information Collected</h2>
        <p>
          <strong>4.1</strong> We may collect Information, whenever relevant, to
          help provide you with information and to complete or process any
          transaction, display any Product you have requested, or to participate
          in any online event or contest. You also consent to the collection of
          certain Information or documents as per applicable laws in the course
          of your purchasing the Products on the Platform.
        </p>
        <p>
          <strong>4.2</strong> We may collect, use or process your Information
          (including Personal Information and Sensitive Personal
          Data/Information) for the following purposes:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            4.2.1 For creating and giving you access to your registered account
            on the Platforms.
          </li>
          <li>
            4.2.2 To validate and process your request for the provision of
            Products or accessing the Platforms.
          </li>
          <li>4.2.3 To assist merchants to handle and fulfill your orders.</li>
          <li>
            4.2.4 To develop, deliver, process and improve our Products,
            services, and content to personalize and improve your experience.
          </li>
          <li>
            4.2.5 To inform you about our Products and/or third-party products,
            services, offers, discounts, updates, promotional initiatives,
            upcoming events, etc., including order confirmations, invoices,
            delivery status, technical notices, and security alerts.
          </li>
          <li>
            4.2.6 For internal business analytical and research purposes, such
            as auditing, data analysis, and improving our customer
            communications.
          </li>
          <li>
            4.2.7 To meet any legal or regulatory requirement or comply with a
            governmental or judicial request.
          </li>
          <li>
            4.2.8 To provide you with recommendations about Products based on
            your use of the Platforms or browsing behavior.
          </li>
          <li>
            4.2.9 To provide you with marketing communications and advertising
            that we believe may interest you;
          </li>
          <li>
            4.2.10 To resolve any request, dispute, grievance or complaint
            regarding your use of the Platforms.
          </li>
          <li>
            4.2.11 To detect or monitor any fraudulent or illegal activity on
            the Platforms.
          </li>
          <li>
            4.2.12 To facilitate software updates, product support, and improve
            the Platform experience and verify compliance with this Policy.
          </li>
          <li>
            4.2.11 Convenience Fee Processing – As part of the order placement
            and payment process, Lafetch shall collect and process a
            non-refundable Convenience Fee. This fee covers various
            administrative and operational costs, including secure payment
            processing, customer support, technology maintenance, and express
            shipping coordination. Payment-related information, including the
            Convenience Fee, may be shared with our payment gateway providers
            and financial institutions solely for facilitating the transaction.
            By placing an order on the Platform, you expressly consent to the
            collection, processing, and storage of such information.
          </li>
        </ul>
        <p>
          <strong>4.3</strong> When you use our voice, image, and camera
          services, we use your inputs (voice, images, videos, etc.) to respond
          to your requests, provide the requested Products, and improve our
          services.
        </p>
        <p>
          <strong>4.4</strong> The Platform transmits, collects, maintains,
          processes, and uses location data and other information to improve the
          design, functionality, performance, and content of the Platform.
        </p>

        {/* 5. Disclosure and/or Sharing of Information Collected */}
        <h2 className="text-xl font-bold">
          5. Disclosure and/or Sharing of Information Collected
        </h2>
        <p>
          <strong>5.1</strong> We may, at times, be required to disclose your
          Information to trusted third-party service providers who assist in
          processing your transactions (such as payment gateways or logistics
          providers). By using the Platforms and/or purchasing Products, you
          consent to such disclosures, provided these third parties adhere to
          confidentiality and security standards.
        </p>
        <p>
          <strong>5.2</strong> Your Information may also be shared with our
          affiliates to ensure a seamless shopping experience. By using our
          Platform, you consent to the sharing and storage of your Information
          with our affiliates.
        </p>
        <p>
          <strong>5.3</strong> To the extent permitted by applicable law, we may
          disclose your Information to external organizations or individuals if
          we have reason to believe that the access, use, preservation or
          disclosure of the Information is reasonably necessary to:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            meet the requisition under any applicable laws, regulations, legal
            processes, judicial decree or other enforceable governmental
            request/order/notice which, in our sole discretion, is deemed
            necessary to protect our rights or the rights of other Users of the
            Platform;
          </li>
          <li>
            detect, prevent, or otherwise address fraud, security, or technical
            issues; or
          </li>
          <li>fight fraud and credit risk.</li>
        </ul>
        <p>
          <strong>5.4</strong> We may also disclose or transfer your Information
          to any third party as part of a reorganization or sale of assets. In
          such cases, the receiving entity will be bound by confidentiality and
          security measures.
        </p>
        <p>
          <strong>5.5</strong> A third-party payment gateway provider may be
          required to collect certain financial information from you (such as
          your credit/debit card number or bank account details, collectively
          “Financial Information”). All Financial Information collected by such
          providers will be used solely for billing and payment processing.
        </p>
        <p>
          <strong>5.6</strong> While we take our best efforts to secure your
          Information, please exercise reasonable discretion when providing
          sensitive data online.
        </p>
        <p>
          <strong>5.7</strong> The Information shared may include your name,
          contact details, purchase history, preferences, saved addresses,
          payment information, and browsing behavior.
        </p>
        <p>
          <strong>5.8</strong> We may also share Non-Personal Information with
          partners or third-party developers in a form that does not personally
          identify you.
        </p>

        {/* 6. Retention of Information */}
        <h2 className="text-xl font-bold">6. Retention of Information</h2>
        <p>
          We will retain your Information for the period necessary to fulfill
          the purposes outlined in this Privacy Policy unless a longer retention
          period is required or permitted by law.
        </p>

        {/* 7. Storage */}
        <h2 className="text-xl font-bold">7. Storage</h2>
        <p>
          The Information collected on the Platform shall be stored and
          processed in India and will be governed by the applicable laws of
          India, including data protection and privacy laws.
        </p>

        {/* 8. Security */}
        <h2 className="text-xl font-bold">8. Security</h2>
        <p>
          <strong>8.1</strong> The security of your Personal Information is
          important to us. We have implemented security policies, rules, and
          technical measures (including firewalls and transport layer security)
          to protect the Information under our control.
        </p>
        <p>
          <strong>8.2</strong> Your Information is stored on secured networks
          and is only accessible by a limited number of authorized persons who
          are bound to keep such information confidential.
        </p>
        <p>
          <strong>8.3</strong> While we strive to ensure complete security, no
          system is impervious. You agree not to hold us liable for any
          unintended disclosures or breaches that occur beyond our reasonable
          control.
        </p>

        {/* 9. Cookies Policy */}
        <h2 className="text-xl font-bold">9. Cookies Policy</h2>
        <p>
          <strong>9.1</strong> When you access the Platforms, we automatically
          receive certain data such as the referring site’s URL, your IP
          address, and details of your web browser. This information is used to
          analyze user trends and improve our services. The link between your IP
          address and your personally identifiable information is not shared
          with third parties without your consent or unless required by law.
        </p>
        <p>
          <strong>9.2</strong> The Platforms use temporary cookies to store
          data. We do not store Personal Information in cookies.
        </p>
        <p>
          <strong>9.3</strong> You can set or amend your browser to delete or
          disable cookies, though this may affect your access to some areas of
          the Platform.
        </p>
        <p>
          <strong>9.4</strong> We may allow third-party advertisement servers to
          place cookies on your browser. These are used to serve targeted
          advertisements, though we do not use Personal Information for this
          purpose.
        </p>
        <p>
          <strong>9.5</strong> We do not control third-party websites linked on
          our Platform and are not responsible for their privacy practices.
        </p>
        <p>
          <strong>9.6</strong> We may keep records of telephone calls with Users
          for service, research, and training purposes.
        </p>
        <p>
          <strong>9.7</strong> You consent to our reproduction and publication
          of testimonials and reviews provided on the Platforms. If you have
          concerns, please contact <em>customersupport@la-fetch.com</em>.
        </p>

        {/* 10. Opt-Out Policy */}
        <h2 className="text-xl font-bold">10. Opt-Out Policy</h2>
        <p>
          <strong>10.1</strong> Third-party service providers with whom we share
          your Information are not permitted to market their own services to
          you. You have the opportunity to opt out of receiving promotional
          communications.
        </p>
        <p>
          <strong>10.2</strong> To remove your contact information from our
          mailing lists, click the &quot;unsubscribe&quot; link in our emails or
          contact us at <em>customersupport@la-fetch.com</em>. We reserve the
          right to limit membership based on available contact information.
        </p>

        {/* 11. Change/Modification/Amendment to Privacy Policy */}
        <h2 className="text-xl font-bold">
          11. Change/Modification/Amendment to Privacy Policy
        </h2>
        <p>
          This Privacy Policy is subject to changes, modifications, and
          amendments based on business, legal, or regulatory requirements.
          Updated versions will be posted on the Platforms. Your continued use
          of the Platforms signifies your acceptance of any changes.
        </p>

        {/* 12. Governing Law */}
        <h2 className="text-xl font-bold">12. Governing Law</h2>
        <p>
          The terms of this Privacy Policy shall be governed and construed in
          accordance with the laws of India. Any disputes arising from this
          Privacy Policy shall be subject to the jurisdiction of the courts in
          New Delhi and/or Haryana.
        </p>

        {/* 13. Severability */}
        <h2 className="text-xl font-bold">13. Severability</h2>
        <p>
          Each section of this Privacy Policy shall be interpreted in a manner
          so as to be valid under applicable law. However, if any provision is
          held invalid, it shall be ineffective only to the extent of such
          invalidity, without affecting the remaining provisions.
        </p>

        {/* 14. Grievance Redressal */}
        <h2 className="text-xl font-bold">14. Grievance Redressal</h2>
        <p>
          In case you have any questions, grievances, or complaints regarding
          this Privacy Policy or the Platforms, please contact our grievance
          officer using the details below:
        </p>
        <p>
          <strong>Name:</strong> Maneet Oberoi
          <br />
          <strong>Designation:</strong> Legal Counsel
          <br />
          <strong>Email Address:</strong> <em>legal@la-fetch.com</em>
        </p>
      </div>
    </div>
  );
}
