"use client";

import React from "react";
import localFont from "next/font/local";

const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

export default function TermsAndConditions(): JSX.Element {
  return (
    <div
      className={`max-w-7xl mx-auto p-6 lg:p-20 py-28 text-gray-300 ${secondary.className}`}
    >
      <h1 className={`font-bold text-4xl ${primary.className} mb-10`}>
        TERMS &amp; CONDITIONS
      </h1>
      <div className="bg-black text-gray-300 pt-10 leading-relaxed space-y-6 max-w-7xl mx-auto">
        {/* 1. Use of Platform */}
        <h2 className="text-xl font-bold">1. Use of Platform</h2>
        <p>
          Welcome to LAFETCH ( &quot;Site&quot; or &quot;Platform &quot; ). The
          website www.la-fetch.com and mobile application Lafetch available on
          the Apple and Android App Store is owned and operated by AS10
          Techretail Pvt Ltd (&quot; Lafetch &quot;), is a company incorporated
          under the provisions of the Companies Act, 2013 with its registered
          office at 122, First Floor, Universal Trade Tower, Sohna Road, Omaxe
          City Centre, Sector-49, Manesar, Gurugram, Harayana, 122101. You may
          be accessing our Site from a computer or mobile phone device (through
          an iOS or Android application) and these Terms of Use govern your use
          of our Site and your conduct, regardless of the means of access.
        </p>
        <p>
          The Platform is only to be used for your personal non-commercial use
          and information. Your use of the services and features of the Platform
          shall be governed by these Terms and Conditions (hereinafter
          &quot;Terms of Use&quot;) along with the Privacy Policy, Shipping
          Policy and Cancellations, Return, Exchange and Refund Policy (together
          &quot;Policies&quot;) as modified and amended from time to time.
        </p>
        <p>
          By merely accessing or using the Platform, you are acknowledging,
          without limitation or qualification, to be bound by these Terms of Use
          and the Policies, whether you have read the same or not. ACCESSING,
          BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR UNCONDITIONAL
          AGREEMENT TO ALL THE TERMS AND CONDITIONS IN THIS AGREEMENT, SO PLEASE
          READ THIS AGREEMENT CAREFULLY BEFORE PROCEEDING.
        </p>
        <p>
          If you do not agree to any of the terms enumerated in the Terms of Use
          or the Policies, please do not use the Platform. You are responsible
          to ensure that your access to this Platform and material available on
          or through it are legal in each jurisdiction in which you access or
          view the platform or such material.
        </p>
        <p>
          Lafetch reserves the unilateral right to change the particulars
          contained in the Terms of Use or the Policies from time to time and at
          any time, without notice to its users and in its sole discretion. If
          Lafetch decides to change the Terms of Use or Policies, Lafetch will
          post the new version of the Terms of Use or the Policies on the Site
          and update the date specified above. Any change or modification to the
          Terms of Use and the Policies will be effective immediately from the
          date of such upload of the Terms of Use and Policies on the Site. Your
          continued use of the Platform following the modifications to the Terms
          of Use and Policies constitutes your acceptance of the modified Terms
          of Use and Policies, whether or not you have read them.
        </p>

        {/* 2. Privacy Practices */}
        <h2 className="text-xl font-bold">2. Privacy Practices</h2>
        <p>
          We understand the importance of safeguarding your personal information
          and we have formulated a Privacy Policy, to ensure that your personal
          information is sufficiently protected. Apart from these Terms of Use,
          the Privacy Policy shall also govern your visit and use of the Site.
          Your continued use of the Site implies that you have read and accepted
          the Privacy Policy and agree to be bound by its terms and conditions.
          You consent to the use of personal information by Lafetch in
          accordance with the terms of and purposes set forth in the Privacy
          Policy, the same may be subject to amendment from time to time at the
          sole discretion of Lafetch.
        </p>

        {/* 3. Your Account */}
        <h2 className="text-xl font-bold">3. Your Account</h2>
        <p>
          This Site is directed to be used by adults only. We assume that any
          minor, if at all, accessing our Site is under the supervision of their
          guardians. Lafetch or its associates do not knowingly collect
          information from minors. You will be responsible for maintaining
          confidentiality of your account, password, and restricting access to
          your computer, and you hereby accept responsibility for all activities
          that occur under your account and password. You acknowledge that the
          information you provide, in any manner whatsoever, are not
          confidential or proprietary and does not infringe any rights of a
          third party in whatsoever nature.
        </p>
        <p>
          If you are accessing, browsing and using the Site on someone else’s
          behalf; you represent that you have the authority to bind that person
          to all the terms and conditions herein. In the event that the person
          refuses to be bound as the principal to the Terms of Use, you agree to
          accept liability for any harm caused by any wrongful use of the Site
          resulting from such access or use of the Site in whatsoever nature.
        </p>
        <p>
          If you know or have reasons to believe that the security of your
          account has been breached, you should contact us immediately at the
          &apos;Contact Information&apos; provided below. If we have found a
          breach or suspected breach of the security of your account, we may
          require you to change your password, temporarily or permanently block
          or suspend your account without any liability to Lafetch.
        </p>
        <p>
          We reserve the right to refuse service and/or terminate accounts
          without prior notice if these Terms of Use are violated or if we
          decide, in our sole discretion, that it would be in Lafetch’s best
          interests to do so. You are solely responsible for all contents that
          you upload, post, email or otherwise transmit via the Site. The
          information provided to us shall be maintained by us in accordance
          with our Privacy Policy.
        </p>

        {/* 4. Product & Services Information */}
        <h2 className="text-xl font-bold">
          4. Product &amp; Services Information
        </h2>
        <p>
          Lafetch attempts to be as accurate as possible in the description of
          the product on the Platform. However, Lafetch does not warrant that
          the product description, colour, information or other content of the
          Platform is accurate, complete, reliable, current or error-free. The
          Site may contain typographical errors or inaccuracies and may not be
          complete or current. The product pictures are indicative and may not
          match the actual product.
        </p>
        <p>
          Lafetch reserves the right to correct, change or update information,
          errors, inaccuracies or omissions at any time (including after an
          order has been submitted) without prior notice. Please note that such
          errors, inaccuracies or omissions may also relate to pricing and
          availability of the product or services.
        </p>

        {/* 5. Product Use & Services */}
        <h2 className="text-xl font-bold">5. Product Use &amp; Services</h2>
        <p>
          The products and services available on the Platform, and the samples,
          if any, that Platform may provide you, are for your personal and/or
          professional use only. The products or services, or samples thereof,
          which you may receive from us, shall not be sold or resold for
          any/commercial reasons. In case any products or beauty services
          purchased/received/availed causes side effects or doesn’t suit you,
          please note that Lafetch is in no manner responsible for any
          manufactural side-effects or service provider and manufacturer or
          service provider of the product or service shall be solely responsible
          for such side effects and consumer complaints. You should carefully
          read the individual terms and conditions in relation to the products
          and beauty services and consult a specialist before the use of the
          same.
        </p>

        {/* 6. Recommendation of the Product & Services */}
        <h2 className="text-xl font-bold">
          6. Recommendation of the Product &amp; Services
        </h2>
        <p>
          Any recommendation made to you in the Site during the course of your
          use of the Site is purely for informational purposes and for your
          convenience and does not amount to endorsement of the product or
          services by Lafetch or any of its associates in any manner.
        </p>

        {/* 7. Pricing Information */}
        <h2 className="text-xl font-bold">7. Pricing Information</h2>
        <p>
          7.1 Lafetch strives to provide accurate product and pricing
          information, however errors may occur. Lafetch cannot confirm the
          price of the product until you make the order. Without limiting the
          generality of Clause 8 (Cancellations, Refunds and Returns) below, if
          a product/service is listed at an incorrect price or with incorrect
          information due to any technical error, Lafetch shall have the right,
          at its sole discretion, to refuse or cancel any orders placed for that
          product/service, unless the product has already been delivered or the
          service has already been availed by you. In the event that an item is
          wrongly priced, Lafetch may, at its discretion, either contact you for
          instructions or cancel your order and notify you of such cancellation.
          Unless the product ordered by you has been delivered and the services
          are availed, your offer will not be deemed accepted and Lafetch will
          have the right to modify the price of the product/service and contact
          you for further instructions using the e-mail address provided by you
          during the time of registration or placing of order, or cancel the
          order and notify you of such cancellation. In the event that Lafetch
          accepts your order the same shall be debited to your credit card/debit
          card account and duly notified to you by email that the payment has
          been processed. The payment may be processed prior to Lafetch dispatch
          of the product that you have ordered. If we have to cancel the order
          after we have processed the payment, the said amount will be reversed
          to your credit/debit card account subject to terms and conditions.
        </p>
        <p>
          PRICES AND AVAILABILITY OF THE PRODUCTS AND SERVICES PROVIDED OR
          OFFERRED ON THE SITE ARE SUBJECT TO CHANGE WITHOUT PRIOR NOTICE AND AT
          THE SOLE DISCRETION OF LAFETCH.
        </p>
        <p>
          7.2 Convenience Fee
          <br />
          Lafetch shall charge a non-refundable Convenience Fee on every order
          placed on the Platform. This Convenience Fee is intended to cover
          various administrative and operational costs incurred by Lafetch in
          serving its Customers, including but not limited to, payment gateway
          charges, secure payment processing fees, customer support services,
          technology infrastructure, and fast order-shipping coordination
          between brands and delivery partners. The Convenience Fee shall be
          displayed at the time of checkout and shall be payable along with the
          total order value. Lafetch reserves the right to revise, increase,
          decrease, or waive off the Convenience Fee from time to time, at its
          sole discretion, based on business requirements, promotional offers,
          or operational factors. Customers expressly acknowledge and agree that
          the Convenience Fee shall not be refunded under any circumstances,
          including cases of cancellation, return, or refund of the product(s)
          ordered, except where specifically required under applicable law.
        </p>

        {/* 8. Cancellations, Return, Exchange and Refund Policy */}
        <h2 className="text-xl font-bold">
          8. Cancellations, Return, Exchange and Refund Policy
        </h2>
        <p>
          Please refer to our CANCELLATION, RETURN, EXCHANGE &amp; REFUND POLICY
          provided on our Site.
        </p>

        {/* 9. Mode of Payment */}
        <h2 className="text-xl font-bold">9. Mode of Payment</h2>
        <p>
          Payments for the products available on the Site may be made in the
          following ways:
          <br />
          • Payments can be made by Credit Cards, Debit Cards, Net Banking,
          Wallets, e-Gift cards, and reward points plus any other additional
          services provided by the payment gateway platform.
          <br />
          • Credit Card, Debit Card, and Net Banking payment options are instant
          and recommended to ensure faster processing of your order.
          <br />• COD mode of payment is not available as of now.
        </p>

        {/* 10. Shipping and Delivery */}
        <h2 className="text-xl font-bold">10. Shipping and Delivery</h2>
        <p>
          Please refer to our Shipping And Delivery Policy provided on our Site,
          as amended from time to time.
        </p>

        {/* 11. Chat/Call Functionality */}
        <h2 className="text-xl font-bold">11. Chat/Call Functionality</h2>
        <p>
          The Chat/Call Functionality has been provided to help you with any and
          all Site related queries. Any use of this service shall be subject to
          the following conditions:
          <br />
          • Lafetch may suspend the Chat/Call service at any time without
          notice.
          <br />
          • Lafetch or its executives are not responsible for any delay caused
          in attending to or replying to the queries via chat/call.
          <br />
          • Communication through Chat/Call may be stored by Lafetch for future
          reference, and the user of such service will not have the right to
          access such information at any future date.
          <br />
          • While &apos;chatting/calling&apos; you may not communicate any
          objectionable information i.e. unlawful, threatening, abusive,
          defamatory, or obscene information.
          <br />
          • The Chat/Call room shall not be used to sell any products, to give
          suggestions on business opportunities or any other form of
          solicitation.
          <br />• You authorize Lafetch, its group companies, and business
          associates to call, SMS, chat, and email you in connection with your
          order and order updates.
        </p>

        {/* 12. User Content */}
        <h2 className="text-xl font-bold">12. User Content</h2>
        <p>
          The information, photo, image, chat communication, text, software,
          data, music, sound, graphics, messages, videos or other materials
          transmitted, uploaded, posted, emailed or otherwise made available to
          us (&quot;User Content&quot;) are entirely your responsibility and we
          will not be held responsible, in any manner whatsoever, in connection
          to the User Content. You agree not to encourage, assist, or engage
          others as well as yourself in transmitting, hosting, displaying,
          uploading, modifying, publishing, transmitting, updating or sharing
          any information that:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            belongs to another person and to which you do not have any rights;
          </li>
          <li>
            is grossly harmful, harassing, blasphemous, defamatory, obscene,
            pornographic, paedophilic, libelous, invasive of another&apos;s
            privacy, hateful, or racially or ethnically objectionable;
          </li>
          <li>may harm minors in any way;</li>
          <li>
            infringes any patent, trademark, copyright, or other proprietary
            rights;
          </li>
          <li>violates any law for the time being in force;</li>
          <li>
            deceives or misleads the addressee about the origin of such messages
            or communicates any information that is grossly offensive or
            menacing;
          </li>
          <li>impersonates another person;</li>
          <li>
            contains software viruses or any other computer code, files, or
            programs designed to interrupt, destroy, or limit the functionality
            of any computer resource;
          </li>
          <li>
            threatens the unity, integrity, defence, security, or sovereignty of
            India, friendly relations with foreign states, or public order, or
            incites the commission of any cognizable offence or prevents the
            investigation of any offence, or is insulting to any nation.
          </li>
        </ul>
        <p>
          Lafetch shall in no way be held responsible for examining or
          evaluating User Content, nor does it assume any responsibility or
          liability for the User Content. Lafetch does not endorse or control
          the User Content transmitted or posted on the Site by you, and
          therefore, accuracy, integrity, or quality of User Content is not
          guaranteed by Lafetch. You understand that by using the Site, you may
          be exposed to User Content that is offensive, indecent, or
          objectionable. Under no circumstances will Lafetch be liable in any
          way for any User Content, including, without limitation, for any
          errors or omissions in any User Content, or for any loss or damage
          incurred by you as a result of the use of any User Content
          transmitted, uploaded, posted, emailed, or otherwise made available
          via the Site. You hereby waive all rights to any claims against
          Lafetch for any alleged or actual infringements of any proprietary
          rights, rights of privacy or publicity, moral rights, and rights of
          attribution in connection with User Content.
        </p>
        <p>
          You hereby acknowledge that Lafetch has the right (but not the
          obligation) in its sole discretion to refuse to post or remove any
          User Content and further reserves the right to change, condense, or
          delete any User Content. Without limiting the generality of the
          foregoing or any other provision of these Terms and Conditions,
          Lafetch has the right to remove any User Content that violates these
          Terms and Conditions or is otherwise objectionable, and further
          reserves the right to refuse service and/or terminate accounts without
          prior notice for any users who violate these Terms and Conditions or
          infringe the rights of others.
        </p>
        <p>
          If you wish to delete your User Content on our Site or in connection
          with our mobile applications, please contact us by email at{" "}
          <em>info@la-fetch.com</em> and include the following personal
          information in your deletion request: first name, last name, user
          name/screen name (if applicable), email address associated with our
          Site and/or mobile applications, your reason for deleting the posting,
          and the date(s) of posting you wish to delete (if available). Please
          allow up to 30 business days for processing your deletion request.
        </p>

        {/* 13. Intellectual Property Rights */}
        <h2 className="text-xl font-bold">13. Intellectual Property Rights</h2>
        <p>
          The &quot;LAFETCH&quot; and &quot;LF&quot; names, logos, and all
          related product and service names, design marks, and slogans are the
          trademarks or service marks of Lafetch. All other marks on the Site
          belong to their respective owners. No trademark or service mark
          license is granted by accessing the Site. Marks displayed on the Site
          are the intellectual property of their owners, and Lafetch is not
          liable for any unauthorized use.
        </p>
        <p>
          Lafetch and its suppliers and licensors expressly and exclusively
          reserve all the intellectual property rights in all text, programs,
          products, processes, technology, content, software, and other
          materials that appear on this Site, including its look and feel. The
          compilation (meaning the collection, arrangement, and assembly) of the
          content on the Site is the exclusive property of Lafetch and is
          protected by Indian copyright laws and international treaties.
          Consequently, the materials on this Site shall not be copied,
          reproduced, duplicated, republished, downloaded, posted, transmitted,
          distributed, or modified in whole or in part or in any other form
          whatsoever, except for your personal, non-commercial use only. No
          right, title, or interest in any downloaded materials or software is
          transferred to you as a result of such downloading or copying,
          reproducing, duplicating, republishing, posting, transmitting,
          distributing, or modifying.
        </p>

        {/* 14. Limited License */}
        <h2 className="text-xl font-bold">14. Limited License</h2>
        <p>
          Lafetch grants you a limited, non-exclusive, non-transferable,
          non-sublicensable license to access and use the Site for personal,
          non-commercial purposes only. All rights not expressly granted are
          reserved by Lafetch and its affiliates. Lafetch reserves the right, at
          any time, without notice, and at its sole discretion, to terminate
          your license to use the Site and to block and prevent your future
          access to the Site.
        </p>

        {/* 15. Representations and Warranties */}
        <h2 className="text-xl font-bold">
          15. Representations and Warranties
        </h2>
        <p>
          This Site is provided &quot;AS IS&quot;. We make no representations
          regarding the use or accuracy of the content on the Site. Lafetch is
          not liable for any loss incurred as a result of reliance on the
          content. Your uninterrupted access to the Site may be affected by
          factors beyond our control, and Lafetch reserves the right to change
          or discontinue any aspect of the Site at any time.
        </p>

        {/* 16. Disclaimer of Warranty and Limitations of Liability */}
        <h2 className="text-xl font-bold">
          16. Disclaimer of Warranty and Limitations of Liability
        </h2>
        <p>
          THE SITE IS PRESENTED &quot;AS IS.&quot; NEITHER WE NOR OUR HOLDING,
          SUBSIDIARIES, AFFILIATES, PARTNERS, OR LICENSORS MAKE ANY
          REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH
          THESE TERMS OR THE SITE OR ANY CONTENT, INCLUDING BUT NOT LIMITED TO
          WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, OR FITNESS FOR A
          PARTICULAR PURPOSE, EXCEPT TO THE EXTENT SUCH WARRANTIES ARE NOT
          LEGALLY EXCLUDABLE.
        </p>
        <p>
          YOU AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW,
          NEITHER WE NOR OUR HOLDING, SUBSIDIARIES, AFFILIATES, PARTNERS, OR
          LICENSORS WILL BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE,
          INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS) ARISING
          FROM THE USE OF THE SITE OR THESE TERMS, WHETHER IN CONTRACT, TORT, OR
          OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR
          MAXIMUM AGGREGATE LIABILITY SHALL NOT EXCEED.
        </p>
        <p>
          YOU AGREE THAT NO CLAIMS OR ACTION ARISING OUT OF, OR RELATED TO, THE
          USE OF THE SITE OR THESE TERMS MAY BE BROUGHT BY YOU MORE THAN ONE (1)
          YEAR AFTER THE CAUSE OF ACTION AROSE. IF YOU HAVE A DISPUTE WITH US OR
          ARE DISSATISFIED WITH THE SITE, TERMINATION OF YOUR USE OF THE SITE IS
          YOUR SOLE REMEDY. WE HAVE NO OTHER OBLIGATION, LIABILITY, OR
          RESPONSIBILITY TO YOU.
        </p>

        {/* 17. Links and Third Party Sites */}
        <h2 className="text-xl font-bold">17. Links and Third Party Sites</h2>
        <p>
          References on the Site to any names, marks, products, or services of
          third parties, or hypertext links to third-party sites, are provided
          solely as a convenience to you. This does not constitute an
          endorsement or imply any association between Lafetch and those third
          parties. Lafetch is not responsible for the content or accuracy of
          third-party sites.
        </p>

        {/* 18. Termination */}
        <h2 className="text-xl font-bold">18. Termination</h2>
        <p>
          These Terms of Use are effective unless and until terminated by either
          you or Lafetch. You may terminate these Terms by ceasing to use the
          Site. Lafetch may terminate these Terms at any time without notice,
          and such termination will not affect any obligations incurred prior to
          termination.
        </p>
        <p>
          Upon termination, you must promptly destroy all materials downloaded
          or otherwise obtained from the Site, as well as all copies of such
          materials, whether made under these Terms or otherwise. Termination
          does not cancel your obligation to pay for any products ordered or
          affect any liability arising under these Terms.
        </p>

        {/* 19. Indemnity */}
        <h2 className="text-xl font-bold">19. Indemnity</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Lafetch, its
          employees, directors, officers, agents, counsel(s), and affiliates
          from any and all claims, liabilities, damages, losses, costs, and
          expenses (including attorney&apos;s fees) arising out of your actions
          or inactions, including any breach of these Terms of Use or violation
          of applicable laws.
        </p>

        {/* 20. Governing Law and Jurisdiction */}
        <h2 className="text-xl font-bold">
          20. Governing Law and Jurisdiction
        </h2>
        <p>
          The Terms of Use and the Policies shall be governed by and construed
          in accordance with the laws of India. For proceedings arising therein,
          the Courts at New Delhi shall have exclusive jurisdiction. Any dispute
          or difference arising from these Terms shall be referred to an
          independent arbitrator whose decision shall be final and binding.
        </p>
        <p>
          Without prejudice to the above, Lafetch reserves the right to seek
          injunctive, provisional, or interim relief from any court of competent
          jurisdiction to protect its trademark or other intellectual property
          rights or confidential information or to preserve the status quo
          pending arbitration. For disputes relating to orders outside India,
          international arbitration rules of the Indian Arbitration and
          Conciliation Act, 1996 shall apply. The seat and venue of
          international arbitration shall be New Delhi.
        </p>

        {/* 21. Site Security */}
        <h2 className="text-xl font-bold">21. Site Security</h2>
        <p>
          You are prohibited from violating or attempting to violate the
          security of the Site, including, without limitation:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            accessing data not intended for you or logging onto a server or an
            account which you are not authorized to access;
          </li>
          <li>
            attempting to probe, scan, or test the vulnerability of a system or
            network or to breach security or authentication measures without
            proper authorization;
          </li>
          <li>
            attempting to interfere with service to any other user, host, or
            network, including, without limitation, via means of submitting a
            virus to the Site, overloading, &quot;flooding,&quot;
            &quot;spamming,&quot; &quot;mail bombing&quot; or
            &quot;crashing&quot;;
          </li>
          <li>
            sending unsolicited email, including promotions and/or advertising
            of products or services; or
          </li>
          <li>
            forging any header or any part of the header information in any
            email or newsgroup posting.
          </li>
        </ul>
        <p>
          Lafetch reserves the right to investigate occurrences that may involve
          such violations and may cooperate with law enforcement authorities in
          prosecuting users involved in such violations.
        </p>

        {/* 22. Entire Agreement */}
        <h2 className="text-xl font-bold">22. Entire Agreement</h2>
        <p>
          If any part of these Terms of Use is determined to be invalid or
          unenforceable pursuant to applicable law, such provision shall be
          replaced by a valid provision that most closely matches the original
          intent, and the remainder shall continue in effect. These Terms
          constitute the entire agreement between you and Lafetch regarding your
          use of the Site.
        </p>

        {/* 23. General */}
        <h2 className="text-xl font-bold">23. General</h2>
        <p>
          You acknowledge and agree that these Terms of Use constitute the
          complete and exclusive agreement between you and Lafetch regarding
          your use of the Site, superseding all prior proposals or
          communications. Lafetch reserves the right to modify these Terms at
          any time by posting changes on the Site. Your continued use of the
          Site constitutes your acceptance of such modifications.
        </p>

        {/* 24. CONTACT INFORMATION */}
        <h2 className="text-xl font-bold">24. CONTACT INFORMATION</h2>
        <p>
          Email: <em>info@la-fetch.com</em>
        </p>
        <p>
          Address: First Floor, Universal Trade Tower, <br />
          Sohna-Gurgaon rd, Block S, Sector 49, <br />
          Gurugram, Haryana <br />
          122018
        </p>
      </div>
    </div>
  );
}
