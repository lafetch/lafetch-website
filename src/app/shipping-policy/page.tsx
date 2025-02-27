"use client";

import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

export default function ShippingPolicy() {
  return (
    <>
      {" "}
      <div
        className={`max-w-7xl mx-auto p-6 lg:p-20 py-28 text-gray-300 ${secondary.className}`}
      >
        <h1 className={`font-bold text-4xl ${primary.className}`}>
          {" "}
          Shipping & Delivery Policy{" "}
        </h1>
        <div className="bg-black text-gray-300 pt-10 leading-relaxed space-y-4 max-w-7xl mx-auto">
          {/* 1. Introduction */}
          <h1 className="text-xl font-bold">1. Introduction</h1>
          <p>
            This Shipping &amp; Delivery Policy (“Policy”) governs the shipping,
            handling, and delivery of orders placed on the Lafetch e-commerce
            platform (“Platform”), owned and operated by AS10 Techretail Pvt Ltd
            (“Company”, “we”, “us”, or “our”).
          </p>
          <p>
            Lafetch does not purchase, own, or store inventory. It acts as a
            facilitator, enabling seamless delivery of products by coordinating
            logistics between brands, their stores/warehouses, and customers.
            All deliveries are fulfilled by Lafetch’s designated delivery
            partners, who pick up orders directly from the respective brand’s
            store or warehouse and deliver them to the Customer’s specified
            address.
          </p>
          <p>
            This Policy forms an integral part of the Terms &amp; Conditions and
            is legally binding on all users (“User”, “Customer”, “you”, or
            “your”) of the Platform. By placing an order on Lafetch, you
            acknowledge and agree to the terms set forth in this Policy.
          </p>

          {/* 2. Shipping Services */}
          <h1 className="text-xl font-bold">2. Shipping Services</h1>
          <p>
            Lafetch facilitates the shipping of all orders placed on the
            Platform through its designated logistics partners. All deliveries,
            including standard and express shipments, will be handled
            exclusively by Lafetch.
          </p>

          <h2 className="text-lg font-semibold">2.1 Standard Shipping</h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Lafetch provides nationwide shipping across India to serviceable
              pin codes.
            </li>
            <li>
              The estimated delivery time for standard shipping is 10 to 15
              business days from the date of order confirmation, subject to
              product availability and the Customer’s location.
            </li>
            <li>
              Orders will be dispatched within one week of successful placement,
              except for certain Made-to-Order products excluding Sundays and
              public holidays.
            </li>
            <li>
              Delivery times may vary based on factors such as the Customer’s
              location, courier partner policies, weather conditions, and
              unforeseen logistical delays.
            </li>
          </ul>

          <h2 className="text-lg font-semibold">
            2.2 Express Delivery – LAFETCH QUICK
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Lafetch offers Express Delivery for select products at select
              locations, ensuring delivery within 1 to 4 hours from the time of
              successful order placement and acceptance.
            </li>
            <li>
              Express Delivery will only be available if the Customer’s location
              falls within the designated express service zones. The eligibility
              for express shipping will be displayed at checkout.
            </li>
            <li>
              Orders placed for Express Delivery must be made during operational
              hours (10 AM – 6 PM). Orders placed beyond these hours will be
              processed the next business day.
            </li>
            <li>
              If an Express Delivery order fails due to Customer unavailability,
              Lafetch will attempt re-delivery once before marking the order as
              failed delivery, subject to the refusal policy outlined in Clause
              2.4.
            </li>
          </ul>

          <h2 className="text-lg font-semibold">2.3 Shipping Charges</h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Standard shipping charges may vary based on the delivery location,
              product weight, and applicable courier fees. Any applicable
              charges will be displayed at checkout before order confirmation.
            </li>
            <li>
              Express Delivery will incur additional charges, which will be
              non-refundable once the order is successfully dispatched.
            </li>
          </ul>

          <h2 className="text-lg font-semibold">
            2.4 Refusal of Delivery &amp; Reattempts
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              If the Customer refuses to accept delivery, Lafetch will make two
              (2) additional attempts through its delivery partner.
            </li>
            <li>
              If the Customer continues to refuse acceptance, the order will be
              deemed forcibly returned, and a fine equivalent to 10% to 20% of
              the total order value shall be levied. This fine will either be
              deducted from any applicable refund or charged separately at
              Lafetch’s discretion.
            </li>
          </ul>

          {/* 3. Order Tracking & Delivery Timelines */}
          <h1 className="text-xl font-bold">
            3. Order Tracking &amp; Delivery Timelines
          </h1>
          <h2 className="text-lg font-semibold">3.1 Order Tracking</h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Customers will receive a tracking link via email and/or SMS upon
              order dispatch.
            </li>
            <li>
              Tracking updates will be provided in real-time through the
              Platform’s “My Orders” section.
            </li>
            <li>
              In case of tracking issues, Customers may contact Lafetch Customer
              Support at
              <em> customersupport@la-fetch.com</em>.
            </li>
          </ul>
          <h2 className="text-lg font-semibold">
            3.2 Delivery Delays &amp; Exceptional Circumstances
          </h2>
          <p>
            Lafetch shall not be liable for delays in delivery arising from:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Natural disasters, strikes, or other force majeure events;</li>
            <li>Incorrect shipping addresses provided by the Customer;</li>
            <li>
              Logistics partner operational issues or regulatory restrictions;
            </li>
            <li>
              High order volumes during sales, festive periods, or promotional
              campaigns;
            </li>
            <li>Any delay from the side of the brand.</li>
          </ul>

          {/* 4. Undeliverable Orders */}
          <h1 className="text-xl font-bold">4. Undeliverable Orders</h1>
          <h2 className="text-lg font-semibold">
            4.1 Reasons for Undeliverable Orders
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              The delivery address provided is incomplete, incorrect, or
              unserviceable.
            </li>
            <li>
              The Customer is unavailable or refuses to accept the order despite
              multiple attempts.
            </li>
            <li>
              The Customer has provided invalid contact details, making
              coordination impossible.
            </li>
          </ul>
          <h2 className="text-lg font-semibold">
            4.2 Handling of Undelivered Orders
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              If an order is undeliverable due to the reasons stated above, it
              will be returned to the brand’s store/warehouse or Lafetch
              Temporary holding unit.
            </li>
            <li>
              The Customer will be notified via email or SMS regarding the
              failed delivery attempt.
            </li>
            <li>
              If a refund is requested for an undelivered order, shipping
              charges and return logistics costs may be deducted from the
              refundable amount.
            </li>
          </ul>

          {/* 5. Shipping Restrictions */}
          <h1 className="text-xl font-bold">5. Shipping Restrictions</h1>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Lafetch does not ship to international locations. Orders can only
              be delivered within India to serviceable pin codes.
            </li>
            <li>
              Some products may have additional shipping restrictions based on
              brand policies, regulatory compliance, or product nature (e.g.,
              hazardous materials, perishable goods).
            </li>
          </ul>

          {/* 6. Modifications & Cancellations */}
          <h1 className="text-xl font-bold">
            6. Modifications &amp; Cancellations
          </h1>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              <strong>Modification Requests:</strong> Customers cannot modify
              shipping addresses or delivery preferences once an order has been
              picked up from the brand’s store or warehouse.
            </li>
            <li>
              <strong>Cancellations:</strong> Orders can only be canceled before
              pickup as per Lafetch’s Cancellation Policy. Once an order is
              picked up, cancellations will be treated as returns, subject to
              brand approval.
            </li>
          </ul>

          {/* 7. Customer Support & Escalations */}
          <h1 className="text-xl font-bold">
            7. Customer Support &amp; Escalations
          </h1>
          <p>
            For any shipping-related inquiries, Customers can contact Lafetch
            Support:
          </p>
          <p>
            <strong>Email:</strong> <em>customersupport@la-fetch.com</em>
          </p>

          {/* 8. Amendments to the Shipping Policy */}
          <h1 className="text-xl font-bold">
            8. Amendments to the Shipping Policy
          </h1>
          <p>
            Lafetch reserves the right to modify this Policy at any time. Any
            changes shall be effective immediately upon posting on the Platform.
            Customers are encouraged to review this Policy periodically to stay
            informed of updates.
          </p>

          {/* 9. Governing Law & Dispute Resolution */}
          <h1 className="text-xl font-bold">
            9. Governing Law &amp; Dispute Resolution
          </h1>
          <p>
            This Policy shall be governed by and construed in accordance with
            the laws of India. Any disputes arising from this Policy shall be
            subject to the exclusive jurisdiction of the courts in New Delhi
            and/or Harayana.
          </p>
        </div>
      </div>
    </>
  );
}
