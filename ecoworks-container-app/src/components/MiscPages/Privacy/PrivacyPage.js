import React from "react";
import TemplatePage from "../TemplatePage";

const privacyPageData = {
  title: "Privacy Policy",
  introduction:
    "At Ecoworks, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or make a purchase from our eco-friendly stationary store. By using our website or providing your information to us, you consent to the practices described in this Privacy Policy.",
  subSectionTitle: [
    "1.1 Personal Information:",
    "1.2 Website Usage Information:",
    "1.3 Cookies and Tracking Technologies:",
    "2.1 Order Processing and Fulfillment:",
    "2.2 Account Management:",
    "2.3 Communication:",
    "2.4 Customer Support:",
    "2.5 Analytics and Improvements:",
    "3.1 Third-Party Service Providers:",
    "3.2 Legal Compliance and Protection:",
    "4. Data Security:",
    "5. Children's Privacy:",
    "6. Changes to Privacy Policy:",
    "7. Contact Us:",
  ],
  subSectionText: [
    "We may collect personal information such as your name, email address, phone number, shipping address, and payment details when you create an account, place an order, subscribe to our newsletter, or interact with our website.",
    "We collect non-personal information about your visit to our website, such as your IP address, browser type, operating system, pages visited, and the duration of your visit. This data helps us improve our website and tailor your user experience.",
    "Our website uses cookies and similar tracking technologies to enhance user experience and collect information about your browsing behavior. You can adjust your browser settings to refuse cookies or receive a notification when cookies are being sent. However, disabling cookies may limit some website functionalities.",
    "We use your personal information to process and fulfill your orders, send order confirmations, provide shipping updates, and address customer inquiries related to your purchase.",
    "Your account information helps us manage your membership in the Ecoworks Rewards Program, personalize your shopping experience, and offer tailored product recommendations.",
    "We may use your email address to send you transactional communications, product updates, special offers, and eco-friendly tips. You can opt-out of marketing emails at any time by clicking the unsubscribe link in the email.",
    "Your information enables us to provide effective customer support and respond to your inquiries, feedback, and requests.",
    "Non-personal information collected through cookies and tracking technologies helps us analyze website performance, measure the effectiveness of marketing campaigns, and enhance our website's functionality.",
    "We may share your information with trusted third-party service providers, such as payment processors and shipping carriers, to facilitate order processing and delivery. These providers are bound by confidentiality agreements and are prohibited from using your data for other purposes.",
    "We may disclose your information to comply with legal obligations, enforce our policies, protect the rights, safety, and property of Ecoworks and others, and investigate potential fraud or security concerns.",
    "We employ industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet is entirely secure, and we cannot guarantee the absolute security of your information.",
    "Ecoworks does not knowingly collect personal information from individuals under the age of 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at [Contact Email], and we will take steps to remove the information from our records.",
    "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The revised version will be effective upon posting on our website, with the Last Updated date indicating the latest revision. We recommend reviewing this page periodically to stay informed about our privacy practices.",
    "If you have any questions, concerns, or requests related to your privacy or personal information, please contact us at [Contact Email]. We value your privacy and will respond to your inquiries promptly.",
  ],
  conslusion:
    "Thank you for choosing Ecoworks, where your privacy and sustainability are our top priorities.",
};

const PrivacyPage = (props) => {
  return <TemplatePage pageTitle="Privacy Policy" pageData={privacyPageData} />;
};

export default PrivacyPage;
