import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiKeyReturnLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { PiCoatHanger } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300"],
  });

export default function Q() {
  return (
    <>
      <div className="poppins.className  p-5 w-full ">
        {/*section 1*/}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center space-x-2 cursor-pointer">
            <CiDeliveryTruck size={25}/>Delivery and order tracking
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What are the delivery methods and how much time each
                      method takes?
                    </AccordionTrigger>
                    <AccordionContent>
                      We offer the following delivery methods:<br></br>
                      1. Standard Shipping: Typically takes 5-7 business days.
                      <br></br>
                      2. Express Shipping: Usually delivered within 2-3 business
                      days.
                      <br></br>
                      3. Overnight Shipping: Delivered the next business day for
                      orders placed before 3 PM.<br></br>
                      4. International Shipping: Delivery times vary by
                      destination, typically 7-14 business days.<br></br>
                      Please note that these delivery times are estimates and
                      may vary depending on your location and the availability
                      of products.
                      <br></br>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Can I change the delivery address of an order?
                    </AccordionTrigger>
                    <AccordionContent>
                      Unfortunately, once an order is placed, we cannot alter
                      the delivery address for security reasons. Please contact
                      our customer support for more informations. Please ensure
                      your address is correct before finalizing your purchase.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I cancel my order?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can cancel your order if it hasn't been processed
                      for shipping yet. Log into your account, go to 'Cart,'
                      select the order, and follow the cancellation
                      instructions. If you checked out as a guest, contact our
                      customer support for assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      What should I do if I have not received all the items in
                      my purchase?
                    </AccordionTrigger>
                    <AccordionContent>
                      If your order arrives incomplete, please check your email
                      for any backorder notifications. If no communication has
                      been received, contact our customer service with your
                      order number, and we'll resolve the issue promptly.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      What should I do if I have received an incorrect or
                      defective item?
                    </AccordionTrigger>
                    <AccordionContent>
                      We apologize for any inconvenience caused. Please contact
                      our customer support team immediately with your order
                      number and details of the issue. We'll arrange for a
                      return or replacement as soon as possible.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/*section 2*/}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
            <PiKeyReturnLight size={25}/>Returns,Exchanges and Refunds
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How do I return an item?
                    </AccordionTrigger>
                    <AccordionContent>
                      To return an item, log into your Ivory Street account,
                      navigate to 'Cart,' select the order containing the item
                      you wish to return, and follow the instructions for
                      initiating a return. If you checked out as a guest, please
                      contact our customer support team for assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How long do I have to return an item?
                    </AccordionTrigger>
                    <AccordionContent>
                      You have 3 days from the date of delivery to initiate a
                      return. Items must be in their original condition with
                      tags attached to be eligible for a refund.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How long does it take to process a return?
                    </AccordionTrigger>
                    <AccordionContent>
                      Once we receive your returned item, please allow 3
                      business days for us to process your return and issue a
                      refund to your original payment method. You will receive
                      an email confirmation once the refund is processed.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      How can I exchange an item?
                    </AccordionTrigger>
                    <AccordionContent>
                      If you wish to exchange an item for a different size or
                      color, please initiate a return as described above and
                      place a new order for the desired item through our
                      website. This ensures faster processing and availability.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      What if the item I want to exchange is out of stock?
                    </AccordionTrigger>
                    <AccordionContent>
                      If the item you want to exchange is out of stock, wait for
                      restock or you can option for refund or choose an
                      alternative item. Contact our customer support team for
                      assistance in finding a suitable replacement.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Is there a time limit for exchanges?
                    </AccordionTrigger>
                    <AccordionContent>
                      Exchanges must be initiated within 3 days of the original
                      purchase date. Please check our return policy for specific
                      details regarding exchange time limits.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      Do I need to pay for shipping on exchange items?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, you are responsible for the shipping costs associated
                      with returning the item to us for exchange. However, we
                      cover the shipping costs for sending the exchanged item
                      back to you.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>Can I receive a refund?</AccordionTrigger>
                    <AccordionContent>
                      Yes, refunds are issued to the original payment method
                      used for the purchase. Once your returned item is
                      processed, you will receive a refund notification via
                      email.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/*section 3*/}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
            <MdOutlinePayment size={25}/>Payments and promotions
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What payment methods do you accept?
                    </AccordionTrigger>
                    <AccordionContent>
                      We accept major credit cards (Visa, MasterCard, American
                      Express), Bank Transfers or PayPal, Google Pay, Apple Pay
                      and Ivory Street gift cards for online purchases.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Can I use a gift card to make a purchase?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, you can use an Ivory Street gift card to pay for your
                      order during checkout.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Do you accept international credit cards?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we accept international credit cards. Please ensure
                      that your billing address matches the address associated
                      with your credit card for successful processing.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      How do I use a promo code?
                    </AccordionTrigger>
                    <AccordionContent>
                      During checkout, enter your promo code in the designated
                      field before completing your purchase. The discount will
                      be applied to eligible items in your cart.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Can I use more than one promo code on an order?
                    </AccordionTrigger>
                    <AccordionContent>
                      Typically, only one promo code can be applied per order
                      unless otherwise specified in the promotion's terms and
                      conditions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Are there any exclusions for promotions and discounts?
                    </AccordionTrigger>
                    <AccordionContent>
                      Some promotions may exclude certain products, brands, or
                      categories. Please check the promotion details for any
                      exclusions before applying the promo code.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      Do you offer student or military discounts?
                    </AccordionTrigger>
                    <AccordionContent>
                      Currently, we do not offer specific discounts for students
                      or military personnel. However, we occasionally run
                      promotions that may apply to these groups. Check our
                      website or subscribe to our newsletter for updates.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>
                      What should I do if my promo code isn’t working?
                    </AccordionTrigger>
                    <AccordionContent>
                      If your promo code isn't working, double-check the
                      spelling and expiration date. Ensure it applies to the
                      items in your cart and meets any minimum purchase
                      requirements. If issues persist, contact our customer
                      support for assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/*section 4*/}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
            <PiCoatHanger size={25}/>Informations on sizes and products
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Do you have a size chart?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we provide a size chart for each product category to
                      help you find the best fit. You can find it on the product
                      page or under our Size Guide section.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How do I measure myself for the best fit?
                    </AccordionTrigger>
                    <AccordionContent>
                      Follow our detailed size guide instructions to measure
                      yourself accurately. This ensures you select the correct
                      size based on your measurements and the product's fit.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      What should I do if I'm in between sizes?
                    </AccordionTrigger>
                    <AccordionContent>
                      If you're between sizes, we recommend sizing up or down
                      based on the fit description provided on the product page.
                      You can also refer to customer reviews for additional
                      guidance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      What materials are your products made from?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our products are made from high-quality materials such as
                      cotton, polyester, nylon, and blends specified on each
                      product page.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Where are your products manufactured?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our products are proudly manufactured in several locations
                      to ensure the highest quality and ethical standards.
                      United States Some of our premium collections are produced
                      in state-of-the-art facilities across the country.We
                      partner with skilled artisans in Italy and Portugal for
                      our luxury lines.Our everyday wear is made in factories in
                      China and Bangladesh, where we maintain strict oversight
                      to ensure fair labor practices and high-quality production
                      standards
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      How do I know if a product is in stock?
                    </AccordionTrigger>
                    <AccordionContent>
                      On each product page, availability status (in stock/out of
                      stock) is indicated near the size selection. If a product
                      is out of stock, you may choose to receive notifications
                      when it becomes available.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/*section 5*/}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
            <BsPerson size={25}/>Personal data and notification
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How do you protect my personal data?
                    </AccordionTrigger>
                    <AccordionContent>
                      We prioritize the security of your personal data and
                      employ industry-standard encryption and security measures
                      to protect your information.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Can I request to view or delete my personal data?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, you can request access to or deletion of your
                      personal data. Contact our customer service team or refer
                      to our Privacy Policy for more information.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How do I contact customer service about my personal data?
                    </AccordionTrigger>
                    <AccordionContent>
                      For inquiries regarding your personal data, please contact
                      our customer service team directly. They will assist you
                      with any questions or requests you may have.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      How do I sign up for notifications?
                    </AccordionTrigger>
                    <AccordionContent>
                      You can sign up for notifications by subscribing to our
                      newsletter or opting in during checkout. You may also
                      manage your notification preferences in your account
                      settings.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      What types of notifications will I receive?
                    </AccordionTrigger>
                    <AccordionContent>
                      Notifications may include order updates, promotional
                      offers, and important announcements related to your
                      account and preferences.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Why am I not receiving notifications?
                    </AccordionTrigger>
                    <AccordionContent>
                      If you're not receiving notifications, check your email
                      spam folder and ensure your notification preferences are
                      correctly set in your account settings. If issues persist,
                      contact our customer support for assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
