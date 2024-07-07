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

export default function Q2() {
  return (
    <>
      <div className="max-w-3xl mx- px-4 py-8 w-full">
        {/* section 1 */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center space-x-2 cursor-pointer">
              <CiDeliveryTruck className="text-blue-500" size={25} />
              Delivery and order tracking
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div>
                {/* nested accordions */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="cursor-pointer">
                      What are the delivery methods and how much time each method takes?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      <ul className="list-disc">
                        <li>Standard Shipping: Typically takes 5-7 business days.</li>
                        <li>Express Shipping: Usually delivered within 2-3 business days.</li>
                        <li>Overnight Shipping: Delivered the next business day for orders placed before 3 PM.</li>
                        <li>International Shipping: Delivery times vary by destination, typically 7-14 business days.</li>
                      </ul>
                      <p className="mt-2">Please note that these delivery times are estimates and may vary depending on your location and the availability of products.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="cursor-pointer">
                      Can I change the delivery address of an order?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Unfortunately, once an order is placed, we cannot alter the delivery address for security reasons. Please contact our customer support for more information. Please ensure your address is correct before finalizing your purchase.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="cursor-pointer">
                      Can I cancel my order?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Yes, you can cancel your order if it hasn't been processed for shipping yet. Log into your account, go to 'Cart,' select the order, and follow the cancellation instructions. If you checked out as a guest, contact our customer support for assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="cursor-pointer">
                      What should I do if I have not received all the items in my purchase?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      If your order arrives incomplete, please check your email for any backorder notifications. If no communication has been received, contact our customer service with your order number, and we'll resolve the issue promptly.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="cursor-pointer">
                      What should I do if I have received an incorrect or defective item?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      We apologize for any inconvenience caused. Please contact our customer support team immediately with your order number and details of the issue. We'll arrange for a return or replacement as soon as possible.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* section 2 */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center space-x-2 cursor-pointer">
              <PiKeyReturnLight className="text-blue-500" size={25} />
              Returns, Exchanges, and Refunds
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="cursor-pointer">
                      How do I return an item?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      To return an item, log into your Ivory Street account, navigate to 'Cart,' select the order containing the item you wish to return, and follow the instructions for initiating a return. If you checked out as a guest, please contact our customer support team for assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="cursor-pointer">
                      How long do I have to return an item?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      You have 3 days from the date of delivery to initiate a return. Items must be in their original condition with tags attached to be eligible for a refund.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="cursor-pointer">
                      How long does it take to process a return?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Once we receive your returned item, please allow 3 business days for us to process your return and issue a refund to your original payment method. You will receive an email confirmation once the refund is processed.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="cursor-pointer">
                      How can I exchange an item?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      If you wish to exchange an item for a different size or color, please initiate a return as described above and place a new order for the desired item through our website. This ensures faster processing and availability.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="cursor-pointer">
                      What if the item I want to exchange is out of stock?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      If the item you want to exchange is out of stock, wait for restock or you can opt for a refund or choose an alternative item. Contact our customer support team for assistance in finding a suitable replacement.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="cursor-pointer">
                      Is there a time limit for exchanges?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Exchanges must be initiated within 3 days of the original purchase date. Please check our return policy for specific details regarding exchange time limits.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="cursor-pointer">
                      Do I need to pay for shipping on exchange items?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Yes, you are responsible for the shipping costs associated with returning the item to us for exchange. However, we cover the shipping costs for sending the exchanged item back to you.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="cursor-pointer">
                      Can I receive a refund?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Yes, refunds are issued to the original payment method used for the purchase. Once your returned item is processed, you will receive a refund notification via email.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* section 3 */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center space-x-2 cursor-pointer">
              <MdOutlinePayment className="text-blue-500" size={25} />
              Payments and promotions
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="cursor-pointer">
                      What payment methods do you accept?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      We accept major credit and debit cards, including Visa, MasterCard, American Express, and Discover. You can also use PayPal or Apple Pay for secure online payments.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="cursor-pointer">
                      Is my payment information secure?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Yes, we use industry-standard encryption and secure payment gateways to protect your payment information. Your details are never stored or shared without your consent.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="cursor-pointer">
                      Do you offer promotions or discounts?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Yes, we regularly offer promotions and discounts on our products. Sign up for our newsletter or follow us on social media to stay updated on the latest offers.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="cursor-pointer">
                      How do I use a promotional code?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      To use a promotional code, enter it during the checkout process in the designated field. The discount will be applied to your total order amount before you proceed to payment.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* section 4 */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center space-x-2 cursor-pointer">
              <PiCoatHanger className="text-blue-500" size={25} />
              Products and orders
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="cursor-pointer">
                      How do I know if an item is in stock?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      If an item is out of stock, you will see an 'Out of Stock' message on the product page. You can also contact our customer support team for information on restocking dates or alternatives.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="cursor-pointer">
                      Can I place a bulk order?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Yes, we offer bulk ordering options for certain products. Please contact our sales team for more information on bulk pricing, availability, and shipping options.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="cursor-pointer">
                      Do you offer customization or personalization services?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Some products are eligible for customization or personalization. Check the product description or contact our customer support team for details on available options and pricing.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* section 5 */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center space-x-2 cursor-pointer">
              <BsPerson className="text-blue-500" size={25} />
              Account and privacy
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="cursor-pointer">
                      How do I create an account?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      You can create an account by clicking on the 'Sign Up' or 'Create Account' link on our website. Fill in your details, verify your email address, and your account will be activated. Welcome aboard!
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="cursor-pointer">
                      How do I update my account information?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Log into your account and navigate to the 'Profile' or 'Account Settings' section. Here, you can update your personal information, password, and communication preferences.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="cursor-pointer">
                      Is my personal information secure?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      Yes, we take your privacy seriously and use industry-standard encryption and security measures to protect your personal information. We do not share your details without your consent.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="cursor-pointer">
                      How can I delete my account?
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 py-2">
                      To delete your account, please contact our customer support team. We'll guide you through the process and ensure your account is deactivated securely.
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
