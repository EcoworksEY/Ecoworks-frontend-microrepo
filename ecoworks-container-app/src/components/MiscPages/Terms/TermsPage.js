import React from "react";
import TemplatePage from "../TemplatePage";

const termsPageData = {
  title: "Terms of Service",
  introduction:
    "Welcome to Ecoworks, the eco-friendly stationary store committed to providing sustainable and environmentally conscious products. By using our website and purchasing our products, you agree to the following terms and conditions:",
  subSectionTitle: [
    "Product Information and Descriptions:",
    "Pricing and Payments:",
    "Order Processing and Shipping:",
    "Returns and Exchanges:",
    "Privacy and Data Protection:",
    "Intellectual Property:",
    "Limitation of Liability:",
    "Third-Party Websites and Links:",
    "Governing Law and Jurisdiction:",
    "Amendments:",
  ],
  subSectionText: [
    "We strive to provide accurate and up-to-date product information, including descriptions, images, and prices. However, we cannot guarantee the complete absence of errors, omissions, or inaccuracies. Product colors may appear differently due to variations in display settings. Please read product descriptions carefully before making a purchase.",
    "All prices on our website are in AUD, inclusive of applicable taxes, unless otherwise stated. We accept payments through secure and trusted payment gateways. By making a purchase, you agree to pay the total amount specified at the time of checkout.",
    "Once an order is placed, we will process it promptly and strive to ship it within the specified timeframe. Shipping times may vary depending on the delivery location and other factors beyond our control. Ecoworks is not responsible for any delays caused by third-party shipping carriers.",
    "We take pride in the quality of our products. If you are not satisfied with your purchase, you may request a return or exchange within 28 days from the date of delivery. The product must be unused, in its original packaging, and in resalable condition. Customers are responsible for return shipping costs, unless the return is due to an error on our part.",
    "We value your privacy and adhere to strict data protection regulations. By using our website, you consent to the collection and use of your personal information as described in our Privacy Policy.",
    "All content on the Ecoworks website, including images, logos, designs, and text, is protected by intellectual property laws and belongs to Ecoworks or its respective partners. You may not use, reproduce, or distribute any content from our website without our explicit written permission.",
    "Ecoworks shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of our products or website, including but not limited to lost profits, business interruption, or data loss. Our liability is limited to the purchase price of the product in question.",
    "Our website may contain links to third-party websites. Ecoworks is not responsible for the content or practices of these external sites. We recommend reviewing the terms and conditions and privacy policies of any linked websites before using them.",
    "These terms and conditions shall be governed by and construed in accordance with the laws of Australia. Any disputes arising from the use of our website or the purchase of our products shall be subject to the exclusive jurisdiction of the courts in Australia.",
    "Ecoworks reserves the right to update, modify, or change these terms and conditions at any time without prior notice. It is your responsibility to review this page periodically for any changes.",
  ],
  conslusion: "By using our website and purchasing our products, you agree to these terms and conditions in their entirety. If you do not agree with any part of these terms, please refrain from using our website and making a purchase from Ecoworks. Should you have any questions or concerns, please contact us.",
};

const TermsPage = (props) => {
  return (
    <TemplatePage pageTitle="Terms & Conditions" pageData={termsPageData} />
  );
};

export default TermsPage;
