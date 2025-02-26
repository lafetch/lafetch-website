"use client";

import Footer from "@/components/Footer";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

export default function CancellationPolicy() {
  return (
    <>
      <div
        className={`max-w-7xl mx-auto p-20 py-28 text-gray-300 ${secondary.className}`}
      >
        <h1 className={`font-bold text-4xl ${primary.className}`}>
          {" "}
          Cancellation, Return, Exchange & Refund Policy{" "}
        </h1>
        <div className="bg-black text-gray-300 pt-10 leading-relaxed space-y-4 max-w-7xl mx-auto">
          {/* 1. INTRODUCTION */}
          <h1 className="text-xl font-bold">1. INTRODUCTION</h1>
          <p>
            <strong>1.1</strong> This Cancellation, Return, Exchange &amp;
            Refund Policy (“Policy”) governs the terms under which
            cancellations, returns, exchanges, and refunds are facilitated on
            the Lafetch e-commerce platform (“Platform”), owned and operated by
            AS10 Techretail Pvt Ltd (“Company”, “we”, “us”, or “our”).
          </p>
          <p>
            <strong>1.2</strong> This Policy forms an integral part of the User
            Agreement and shall be legally binding on all users (“User”,
            “Customer”, “you”, or “your”) of the Platform.
          </p>
          <p>
            <strong>1.3</strong> Lafetch acts as a facilitator between customers
            and brands listed on the Platform. All cancellations, returns,
            exchanges, and refunds shall be subject to prior approval by the
            brand. Lafetch shall not be liable for processing any return,
            exchange, or refund unless explicitly authorized by the brand.
          </p>
          <p>
            <strong>1.4</strong> By transacting on the Platform, you acknowledge
            that you have read, understood, and agreed to this Policy. If you do
            not agree, you must immediately cease using the Platform.
          </p>

          {/* 2. ORDER CANCELLATION POLICY */}
          <h1 className="text-xl font-bold">2. ORDER CANCELLATION POLICY</h1>
          <p>
            <strong>2.1 Cancellation by the Customer</strong>
          </p>
          <p>
            <strong>2.1.1</strong> Customers may request to cancel an order only
            before it has been accepted and processed by the brand. Once an
            order is accepted, cancellation requests shall not be entertained.
          </p>
          <p>
            <strong>2.1.2</strong> If cancellation is permitted, the Customer
            must initiate the request via:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>The order customer dashboard on the Platform; or</li>
            <li>Lafetch Customer Support at customersupport@la-fetch.com</li>
          </ul>
          <p>
            <strong>2.1.3</strong> If an order is successfully cancelled before
            processing, a full refund will be issued within seven to ten (7-10)
            business days, subject to the policies of the bank/payment provider.
          </p>

          <p>
            <strong>
              2.2 Post-Processing Cancellations &amp; Refusal of Delivery
            </strong>
          </p>
          <p>
            <strong>2.2.1</strong> Once an order has been packed, shipped, or is
            out for delivery, it cannot be canceled.
          </p>
          <p>
            <strong>2.2.2</strong> If the Customer refuses to accept delivery,
            the Platform will make two (2) to three (3) additional attempts to
            deliver the order through its designated delivery partner.
          </p>
          <p>
            <strong>2.2.3</strong> In the event the Customer continues to refuse
            acceptance despite repeated delivery attempts, the order will be
            deemed forcibly returned, and a fine equivalent to 10% to 20% of the
            total order value shall be levied against the Customer. This fine
            shall be deducted from any applicable refund or charged separately
            at the discretion of the Platform.
          </p>
          <p>
            <strong>2.2.4</strong> Any refund for the remaining amount (if
            applicable) shall be subject to the brand’s return policy and
            approval.
          </p>

          <p>
            <strong>2.3 Order Cancellation by Lafetch</strong>
          </p>
          <p>
            <strong>2.3.1</strong> Lafetch reserves the right to cancel an order
            under the following circumstances:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Product unavailability due to stock issues;</li>
            <li>Invalid, fraudulent, or incomplete order details provided;</li>
            <li>
              Pricing errors or technical issues resulting in incorrect
              listings;
            </li>
            <li>
              Excessive cancellations or returns indicating potential misuse.
            </li>
          </ul>
          <p>
            <strong>2.3.2</strong> If an order is canceled by Lafetch, a full
            refund will be issued within seven to ten (7-10) business days.
          </p>

          {/* 3. RETURN & EXCHANGE POLICY */}
          <h1 className="text-xl font-bold">3. RETURN &amp; EXCHANGE POLICY</h1>
          <p>
            <strong>3.1 Eligibility for Returns &amp; Exchanges</strong>
          </p>
          <p>
            <strong>3.1.1</strong> A request for return or exchange must be
            initiated within three (3) days or within 72 hours from the date of
            successful delivery.
          </p>
          <p>
            <strong>3.1.2</strong> Returns and exchanges shall be permitted only
            under the following conditions:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Incorrect product received – The product does not match order
              details (size, color, SKU mismatch);
            </li>
            <li>
              Defective or damaged product – The product has visible defects or
              was damaged in transit;
            </li>
            <li>
              Product not as described – The material, design, or specifications
              significantly deviate from the product listing;
            </li>
            <li>
              Missing items – The order is incomplete or missing accessories.
            </li>
          </ul>

          <p>
            <strong>
              3.2 Mandatory Brand Approval for Returns &amp; Exchanges
            </strong>
          </p>
          <p>
            <strong>3.2.1</strong> All return and exchange requests must be
            approved by the brand before processing. Lafetch does not guarantee
            approval of any return or exchange.
          </p>
          <p>
            <strong>3.2.2</strong> Customers must submit a return request via
            the Lafetch website/app, providing:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Clear images of the product and packaging;</li>
            <li>Description of the issue (incorrect item, damage, etc.);</li>
            <li>Any other details required by the brand.</li>
          </ul>
          <p>
            <strong>3.2.3</strong> Lafetch shall coordinate with the brand, and
            the Platform retains discretion to approve or reject the request.
          </p>

          <p>
            <strong>
              3.3 Conditions for Accepting Returns &amp; Exchanges
            </strong>
          </p>
          <p>
            <strong>3.3.1</strong> To qualify for a return or exchange, the
            product must:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Be unused, unwashed, and unworn;</li>
            <li>Have all original tags, labels, and brand packaging intact;</li>
            <li>
              Include all accessories, dust bags, warranty cards, documentation;
            </li>
            <li>Show no stains, perfume, makeup, alterations, or damage;</li>
            <li>
              Be returned in its original brand packaging and shipping box.
            </li>
          </ul>
          <p>
            <strong>3.3.2</strong> If a returned product fails quality
            verification, it shall be sent back to the Customer, and no refund
            will be processed.
          </p>

          <p>
            <strong>3.4 Exchange Process &amp; Limitations</strong>
          </p>
          <p>
            <strong>3.4.1 Refund Methodology</strong>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Refunds, if applicable, shall be processed only after the returned
              product has been received, inspected, and approved by the brand
              and/or the Platform.
            </li>
            <li>
              Refunds may be issued in the original payment method used by the
              Customer or in the form of Store Credit/Store Coupon, depending on
              the brand’s policy and the nature of the return.
            </li>
            <li>
              Processing time for refunds may vary and shall be subject to the
              policies of the bank/payment provider.
            </li>
          </ul>
          <p>
            <strong>3.4.2 Non-Refundable Items &amp; Deductions</strong>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Certain products may be marked as non-refundable at the time of
              purchase. Such items shall not be eligible for a refund under any
              circumstances.
            </li>
            <li>
              In cases where a refund is approved, applicable deductions (such
              as return shipping charges, cancellation fines, or penalty fees)
              may be applied before the final amount is refunded.
            </li>
          </ul>
          <p>
            <strong>
              3.4.3 Store Credit/Store Coupon &amp; Platform Credit/Platform
              Coupon
            </strong>
          </p>
          <p className="ml-4">
            <strong>(a)</strong> <em>Store Credit/Store Coupon</em> (used
            interchangeably) is issued to the Customer as compensation for an
            approved return, exchange, or other qualifying transactions. Store
            Credit/Store Coupon can only be utilized to purchase any other
            available SKU or product from the same Brand’s catalog on the
            Platform. It cannot be used for purchases from other brands or
            transferred to another account. Additionally, Store Credit/Store
            Coupon must be fully utilized in a single transaction—any unused
            balance shall be forfeited and cannot be carried forward, converted
            into cash, or reclaimed.
          </p>
          <p className="ml-4">
            <strong>(b)</strong> <em>Platform Credit/Platform Coupon</em> is
            distinct from Store Credit/Store Coupon and is issued exclusively by
            the Platform, either as a promotional benefit, goodwill gesture, or
            compensation. Platform Credit/Platform Coupon can be used across the
            entire Platform, allowing the Customer to purchase products from any
            brand listed on the Platform, subject to applicable terms and
            conditions. Unlike Store Credit/Store Coupon, Platform
            Credit/Platform Coupon may be used in multiple transactions until
            its balance is exhausted.
          </p>

          <p>
            <strong>3.5 Return Pickup &amp; Self-Shipping</strong>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              If a return is approved, Lafetch will arrange for a return pickup,
              subject to serviceability in the Customer’s location.
            </li>
            <li>
              If return pickup is unavailable, Customers must self-ship the
              product to the brand’s designated return center. Lafetch shall not
              be liable for loss or damage during self-shipping.
            </li>
          </ul>

          {/* 4. NON-RETURNABLE & NON-EXCHANGEABLE PRODUCTS */}
          <h1 className="text-xl font-bold">
            4. NON-RETURNABLE &amp; NON-EXCHANGEABLE PRODUCTS
          </h1>
          <p>
            The following categories shall not be eligible for return or
            exchange, except in cases of manufacturing defects or incorrect
            shipments:
          </p>
          <p className="font-semibold">4.1 Apparel &amp; Accessories</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Innerwear, lingerie, and swimwear;</li>
            <li>Socks, stockings, and shapewear;</li>
            <li>Scarves, stoles, and headwear.</li>
          </ul>
          <p className="font-semibold">4.2 Jewellery &amp; Accessories</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Earrings, nose pins, and body jewellery;</li>
            <li>Hair accessories, clips, bands, and combs.</li>
          </ul>
          <p className="font-semibold">
            4.3 Made-to-Order &amp; Customized Products
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Customized apparel, jewellery, or accessories;</li>
            <li>Handcrafted or personalized items.</li>
          </ul>
          <p className="font-semibold">
            4.4 Seasonal &amp; Clearance Sale Items
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Items marked as “Final Sale” or “Non-Returnable”;</li>
            <li>Store credits and promotional gift cards;</li>
            <li>
              Any other product or SKU, marked as non-returnable in the product
              description.
            </li>
          </ul>
          <p className="font-semibold">
            4.5 Return Eligibility on Product Display Pages
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Customers are strongly advised to check the return eligibility
              information displayed on the product page before making a
              purchase. Some brands may have specific policies that apply only
              to their products.
            </li>
            <li>
              Lafetch reserves the right to modify the list of non-returnable
              and non-exchangeable items based on brand preferences, hygiene
              concerns, or legal compliance requirements.
            </li>
          </ul>

          {/* 5. REFUND POLICY */}
          <h1 className="text-xl font-bold">5. REFUND POLICY</h1>
          <p className="font-semibold">5.1 Refund Process &amp; Timelines</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Refunds will only be processed after brand approval and upon
              successful verification of the returned product.
            </li>
            <li>
              Once the return is approved by the brand, the refund shall be
              initiated within seven to ten (7-10) business days from the date
              of successful pickup or self-shipment verification.
            </li>
            <li>
              Refund processing time may vary based on the Customer’s bank or
              payment provider policies.
            </li>
          </ul>
          <p className="font-semibold">5.2 Modes of Refund</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Refunds shall be issued through the original payment method used
              for the purchase, except where store credit is applicable.
            </li>
            <li>
              <strong>Prepaid Orders:</strong> The refund shall be credited to
              the original payment method (UPI, credit/debit card, net banking).
            </li>
            <li>
              <strong>Cash on Delivery (COD) Orders:</strong> Customers must
              provide valid bank details for a NEFT transfer to receive the
              refund amount.
            </li>
            <li>
              <strong>Store Credit:</strong> In some cases, the brand may offer
              Store Credit instead of a cash refund, which can be used for
              future purchases.
            </li>
          </ul>
          <p className="font-semibold">
            5.3 Deductions &amp; Refund Adjustments
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Shipping and handling charges are non-refundable.</li>
            <li>
              If the returned product fails the quality check or does not meet
              return criteria, it shall be sent back to the Customer, and no
              refund shall be processed.
            </li>
            <li>
              If a Customer refuses delivery or fails to accept an order, return
              logistics costs may be deducted from the refund amount.
            </li>
          </ul>

          {/* 6. DISPUTE RESOLUTION & ESCALATIONS */}
          <h1 className="text-xl font-bold">
            6. DISPUTE RESOLUTION &amp; ESCALATIONS
          </h1>
          <p className="font-semibold">6.1 Contacting Customer Support</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Customers may contact Lafetch Support for any queries related to
              cancellations, returns, refunds, or exchanges:
              <br />
              📧 <em>customersupport@la-fetch.com</em>
            </li>
            <li>
              Customers should provide all necessary details, including order
              ID, product images, and payment details, for faster resolution.
            </li>
          </ul>
          <p className="font-semibold">6.2 Brand Decision Shall Be Final</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              All return, refund, and exchange approvals shall be at the
              discretion of the brand. Lafetch shall facilitate communication
              between the Customer and the brand but shall not be liable for any
              claims denied by the brand.
            </li>
            <li>
              If a Customer disputes a brand’s decision, Lafetch may, at its
              discretion, review supporting evidence and provide a final
              resolution.
            </li>
          </ul>
          <p className="font-semibold">6.3 Resolution Timeframe</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Lafetch aims to resolve all disputes within fifteen to thirty
              (15-30) business days, subject to the responsiveness of the
              Customer and the brand.
            </li>
            <li>
              If further investigation is required, Lafetch shall notify the
              Customer of the expected resolution timeline.
            </li>
          </ul>

          {/* 7. MISUSE & FRAUDULENT RETURNS */}
          <h1 className="text-xl font-bold">
            7. MISUSE &amp; FRAUDULENT RETURNS
          </h1>
          <p>
            <strong>7.1</strong> Lafetch monitors all return requests to prevent
            misuse of the return policy. The following activities shall be
            considered policy abuse:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Frequent returns without valid reasons;</li>
            <li>Returning used, altered, or damaged products;</li>
            <li>
              Placing multiple orders with the intent to return most of them;
            </li>
            <li>False claims regarding defective products.</li>
          </ul>
          <p>
            <strong>7.2</strong> Customers found engaging in policy abuse may
            face the following consequences:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Permanent restriction from placing future orders;</li>
            <li>
              Disabling of cash-on-delivery (COD) option for future purchases;
            </li>
            <li>Legal action, if fraud is detected.</li>
          </ul>
          <p>
            <strong>7.3 High Return Ratio Customers</strong>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              If a Customer has a high return ratio (determined at Lafetch’s
              discretion), Lafetch may:
            </li>
            <li>Charge a return convenience fee on future orders;</li>
            <li>
              Require mandatory prepaid payments for all future transactions.
            </li>
          </ul>

          {/* 8. MODIFICATION OF THIS POLICY */}
          <h1 className="text-xl font-bold">8. MODIFICATION OF THIS POLICY</h1>
          <p className="font-semibold">8.1 Lafetch’s Right to Modify Policy</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Lafetch reserves the right to amend, modify, or update this Policy
              at any time. Changes shall be effective upon publication on the
              Platform.
            </li>
            <li>
              Customers are encouraged to review this Policy periodically to
              stay informed of any changes.
            </li>
          </ul>
          <p className="font-semibold">8.2 Governing Law &amp; Jurisdiction</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              This Policy shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from this Policy shall be
              subject to the exclusive jurisdiction of the courts in New Delhi,
              India.
            </li>
          </ul>
          <p className="font-semibold">8.3 Arbitration</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Any dispute, claim, controversy, or difference arising out of or
              in connection with this Policy, including any question regarding
              its existence, interpretation, validity, breach, or termination
              (“Dispute”), shall be settled by binding arbitration in accordance
              with the Arbitration and Conciliation Act, 1996 and any amendments
              thereto.
            </li>
            <li>
              The arbitration proceedings shall be conducted by a sole
              arbitrator, mutually appointed by the parties. If the parties fail
              to agree on the appointment of the arbitrator within thirty (30)
              days from the date a written notice of Dispute is issued, the
              arbitrator shall be appointed in accordance with the rules of the
              Delhi International Arbitration Centre (DIAC).
            </li>
            <li>
              The seat and venue of arbitration shall be New Delhi, India. The
              arbitration shall be conducted in the English language.
            </li>
            <li>
              The arbitral award shall be final and binding on the parties and
              shall not be subject to appeal, except as provided under the
              Arbitration and Conciliation Act, 1996. The costs of arbitration
              shall be borne by the party against whom the award is passed
              unless otherwise determined by the arbitrator.
            </li>
            <li>
              The parties expressly agree that no arbitration proceedings shall
              be initiated as a class action or consolidated with the claims of
              any third party.
            </li>
            <li>
              Notwithstanding the foregoing, nothing in this clause shall
              prevent Lafetch from seeking injunctive or equitable relief before
              any competent court to protect its intellectual property,
              proprietary information, or to prevent any misuse of the Platform.
            </li>
          </ul>
        </div>
        {/* <pre className="whitespace-pre-wrap ">
          {`

1. INTRODUCTION

1.1	This Cancellation, Return, Exchange & Refund Policy (“Policy”) governs the terms under which cancellations, returns, exchanges, and refunds are facilitated on the Lafetch e-commerce platform (“Platform”), owned and operated by AS10 Techretail Pvt Ltd (“Company”, “we”, “us”, or “our”).

1.2	This Policy forms an integral part of the User Agreement and shall be legally binding on all users (“User”, “Customer”, “you”, or “your”) of the Platform.

1.3	Lafetch acts as a facilitator between customers and brands listed on the Platform. All cancellations, returns, exchanges, and refunds shall be subject to prior approval by the brand. Lafetch shall not be liable for processing any return, exchange, or refund unless explicitly authorized by the brand.

1.4	By transacting on the Platform, you acknowledge that you have read, understood, and agreed to this Policy. If you do not agree, you must immediately cease using the Platform.

2. ORDER CANCELLATION POLICY

2.1	Cancellation by the Customer
2.1.1 Customers may request to cancel an order only before it has been accepted and processed by the brand. Once an order is accepted, cancellation requests shall not be entertained.
2.1.2 If cancellation is permitted, the Customer must initiate the request via:

a)	The order customer dashboard on the Platform; or
b)	Lafetch Customer Support at customersupport@la-fetch.com 

2.1.3 If an order is successfully cancelled before processing, a full refund will be issued within seven to ten (7-10) business days, subject to the policies of the bank/payment provider.

2.2 Post-Processing Cancellations & Refusal of Delivery

2.2.1 Once an order has been packed, shipped, or is out for delivery, it cannot be canceled.

2.2.2 If the Customer refuses to accept delivery, the Platform will make two (2) to three (3) additional attempts to deliver the order through its designated delivery partner.

2.2.3 In the event the Customer continues to refuse acceptance despite repeated delivery attempts, the order will be deemed forcibly returned, and a fine equivalent to 10% to 20% of the total order value shall be levied against the Customer. This fine shall be deducted from any applicable refund or charged separately at the discretion of the Platform.

2.2.4 Any refund for the remaining amount (if applicable) shall be subject to the brand’s return policy and approval.

2.3 Order Cancellation by Lafetch

2.3.1 Lafetch reserves the right to cancel an order under the following circumstances:
(a) Product unavailability due to stock issues;
(b) Invalid, fraudulent, or incomplete order details provided by the Customer;
(c) Pricing errors or technical issues resulting in incorrect product listings;
(d) Excessive cancellations or returns by a Customer, indicating potential misuse.

2.3.2 If an order is canceled by Lafetch, a full refund will be issued within seven to ten (7-10) business days.

3. RETURN & EXCHANGE POLICY

3.1 Eligibility for Returns & Exchanges

3.1.1 A request for return or exchange must be initiated within three (3) days or within 72 hours from the date of successful delivery.

3.1.2 Returns and exchanges shall be permitted only under the following conditions:
(a) Incorrect product received – The product does not match order details (size, color, SKU mismatch);
(b) Defective or damaged product – The product has visible defects or was damaged in transit;
(c) Product not as described – The material, design, or specifications significantly deviate from the product listing;
(d) Missing items – The order is incomplete or missing accessories.

3.2 Mandatory Brand Approval for Returns & Exchanges

3.2.1 All return and exchange requests must be approved by the brand before processing. Lafetch does not guarantee approval of any return or exchange.

3.2.2 Customers must submit a return request via the Lafetch website/app, providing:
(a) Clear images of the product and packaging;
(b) Description of the issue (incorrect item, damage, etc.);
(c) Any other details required by the brand.

3.2.3 Lafetch shall coordinate with the brand, and the Platform retains discretion to approve or reject the request.

3.3 Conditions for Accepting Returns & Exchanges

3.3.1 To qualify for a return or exchange, the product must:
(a) Be unused, unwashed, and unworn;
(b) Have all original tags, labels, and brand packaging intact;
(c) Include all accessories, dust bags, warranty cards, and documentation (if applicable);
(d) Show no stains, perfume, makeup, alterations, or damage;
(e) Be returned in its original brand packaging and shipping box.

3.3.2 If a returned product fails quality verification, it shall be sent back to the Customer, and no refund will be processed.

3.4 Exchange Process & Limitations

3.4.1 Refund Methodology

(a) Refunds, if applicable, shall be processed only after the returned product has been received, inspected, and approved by the brand and/or the Platform.
(b) Refunds may be issued in the original payment method used by the Customer or in the form of Store Credit/Store Coupon, depending on the brand’s policy and the nature of the return.
(c) Processing time for refunds may vary and shall be subject to the policies of the bank/payment provider.

3.4.2 Non-Refundable Items & Deductions

(a) Certain products may be marked as non-refundable at the time of purchase. Such items shall not be eligible for a refund under any circumstances.
(b) In cases where a refund is approved, applicable deductions (such as return shipping charges, cancellation fines, or penalty fees) may be applied before the final amount is refunded.

3.4.3 Store Credit/Store Coupon & Platform Credit/Platform Coupon

(a) Store Credit/Store Coupon (used interchangeably) is issued to the Customer as compensation for an approved return, exchange, or other qualifying transactions. Store Credit/Store Coupon can only be utilized to purchase any other available SKU or product from the same Brand’s catalog on the Platform. It cannot be used for purchases from other brands or transferred to another account. Additionally, Store Credit/Store Coupon must be fully utilized in a single transaction—any unused balance shall be forfeited and cannot be carried forward, converted into cash, or reclaimed.

(b) Platform Credit/Platform Coupon is distinct from Store Credit/Store Coupon and is issued exclusively by the Platform, either as a promotional benefit, goodwill gesture, or compensation. Platform Credit/Platform Coupon can be used across the entire Platform, allowing the Customer to purchase products from any brand listed on the Platform, subject to applicable terms and conditions. Unlike Store Credit/Store Coupon, Platform Credit/Platform Coupon may be used in multiple transactions until its balance is exhausted.

3.5 Return Pickup & Self-Shipping

3.5.1 If a return is approved, Lafetch will arrange for a return pickup, subject to serviceability in the Customer’s location.

3.5.2 If return pickup is unavailable, Customers must self-ship the product to the brand’s designated return center. Lafetch shall not be liable for loss or damage during self-shipping.

4. NON-RETURNABLE & NON-EXCHANGEABLE PRODUCTS

The following categories shall not be eligible for return or exchange, except in cases of manufacturing defects or incorrect shipments:

4.1 Apparel & Accessories
(a) Innerwear, lingerie, and swimwear;
(b) Socks, stockings, and shapewear;
(c) Scarves, stoles, and headwear.

4.2 Jewellery & Accessories
(a) Earrings, nose pins, and body jewellery;
(b) Hair accessories, clips, bands, and combs.

4.3 Made-to-Order & Customized Products
(a) Customized apparel, jewellery, or accessories (monogrammed, altered, bespoke designs);
(b) Handcrafted or personalized items.

4.4 Seasonal & Clearance Sale Items
(a) Items marked as “Final Sale” or “Non-Returnable”;
(b) Store credits and promotional gift cards.
(c) Any other product or SKU, marked as non-returnable and non-exchangeable in the product description.  

4.5 Return Eligibility on Product Display Pages
4.5.1 Customers are strongly advised to check the return eligibility information displayed on the product page before making a purchase. Some brands may have specific policies that apply only to their products.

4.5.2 Lafetch reserves the right to modify the list of non-returnable and non-exchangeable items based on brand preferences, hygiene concerns, or legal compliance requirements.

5. REFUND POLICY

5.1 Refund Process & Timelines

5.1.1 Refunds will only be processed after brand approval and upon successful verification of the returned product.

5.1.2 Once the return is approved by the brand, the refund shall be initiated within seven to ten (7-10) business days from the date of successful pickup or self-shipment verification.

5.1.3 Refund processing time may vary based on the Customer’s bank or payment provider policies.

5.2 Modes of Refund

5.2.1 Refunds shall be issued through the original payment method used for the purchase, except where store credit is applicable.

5.2.2 Prepaid Orders: The refund shall be credited to the original payment method (UPI, credit/debit card, net banking).

5.2.3 Cash on Delivery (COD) Orders: Customers must provide valid bank details for a NEFT transfer to receive the refund amount.

5.2.4 Store Credit: In some cases, the brand may offer Store Credit instead of a cash refund, which can be used for future purchases.

5.3 Deductions & Refund Adjustments

5.3.1 Shipping and handling charges are non-refundable 

5.3.2 If the returned product fails the quality check or does not meet return criteria, it shall be sent back to the Customer, and no refund shall be processed.

5.3.3 If a Customer refuses delivery or fails to accept an order, return logistics costs may be deducted from the refund amount.

6. DISPUTE RESOLUTION & ESCALATIONS

6.1 Contacting Customer Support

6.1.1 Customers may contact Lafetch Support for any queries related to cancellations, returns, refunds, or exchanges:

📧 Email: customersupport@la-fetch.com

6.1.2 Customers should provide all necessary details, including order ID, product images, and payment details, for faster resolution.

6.2 Brand Decision Shall Be Final

6.2.1 All return, refund, and exchange approvals shall be at the discretion of the brand. Lafetch shall facilitate communication between the Customer and the brand but shall not be liable for any claims denied by the brand.

6.2.2 If a Customer disputes a brand’s decision, Lafetch may, at its discretion, review supporting evidence and provide a final resolution.

6.3 Resolution Timeframe

6.3.1 Lafetch aims to resolve all disputes within fifteen to thirty (15-30) business days, subject to the responsiveness of the Customer and the brand.

6.3.2 If further investigation is required, Lafetch shall notify the Customer of the expected resolution timeline.

7. MISUSE & FRAUDULENT RETURNS

7.1 Lafetch monitors all return requests to prevent misuse of the return policy. The following activities shall be considered policy abuse:

(a) Frequent returns without valid reasons;
(b) Returning used, altered, or damaged products;
(c) Placing multiple orders with the intent to return most of them;
(d) False claims regarding defective products.

7.2 Customers found engaging in policy abuse may face the following consequences:

(a) Permanent restriction from placing future orders;
(b) Disabling of cash-on-delivery (COD) option for future purchases;
(c) Legal action, if fraud is detected.

7.3 High Return Ratio Customers

7.3.1 If a Customer has a high return ratio (determined at Lafetch’s discretion), Lafetch may:

(a) Charge a return convenience fee on future orders;
(b) Require mandatory prepaid payments for all future transactions.

8. MODIFICATION OF THIS POLICY

8.1 Lafetch’s Right to Modify Policy

8.1.1 Lafetch reserves the right to amend, modify, or update this Policy at any time. Changes shall be effective upon publication on the Platform.

8.1.2 Customers are encouraged to review this Policy periodically to stay informed of any changes.

8.2 Governing Law & Jurisdiction

8.2.1 This Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising from this Policy shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.

8.3 Arbitration

8.3.1 Any dispute, claim, controversy, or difference arising out of or in connection with this Policy, including any question regarding its existence, interpretation, validity, breach, or termination (“Dispute”), shall be settled by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 and any amendments thereto.

8.3.2 The arbitration proceedings shall be conducted by a sole arbitrator, mutually appointed by the parties. If the parties fail to agree on the appointment of the arbitrator within thirty (30) days from the date a written notice of Dispute is issued, the arbitrator shall be appointed in accordance with the rules of the Delhi International Arbitration Centre (DIAC).

8.3.3 The seat and venue of arbitration shall be New Delhi, India. The arbitration shall be conducted in the English language.

8.3.4 The arbitral award shall be final and binding on the parties and shall not be subject to appeal, except as provided under the Arbitration and Conciliation Act, 1996. The costs of arbitration shall be borne by the party against whom the award is passed unless otherwise determined by the arbitrator.

8.3.5 The parties expressly agree that no arbitration proceedings shall be initiated as a class action or consolidated with the claims of any third party.

8.3.6 Notwithstanding the foregoing, nothing in this clause shall prevent Lafetch from seeking injunctive or equitable relief before any competent court to protect its intellectual property, proprietary information, or to prevent any misuse of the Platform.
`}
        </pre> */}
      </div>
      <Footer />
    </>
  );
}
