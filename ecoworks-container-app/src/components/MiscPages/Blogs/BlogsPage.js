import React from "react";
import Blogs from "../../../assets/Blogs/vectorBlogs.svg";
import Image1 from "../../../assets/Blogs/Blog1/Image1.svg";
import Image2 from "../../../assets/Blogs/Blog1/Image2.svg";
import Image3 from "../../../assets/Blogs/Blog1/Image3.svg";

import Image4 from "../../../assets/Blogs/Blog2/Image1.svg";
import Image5 from "../../../assets/Blogs/Blog2/Image2.svg";
import Image6 from "../../../assets/Blogs/Blog2/Image3.svg";


import TemplatePage from "../TemplatePageImage";

const blogsData = [
  {
    title:
      "Embracing Sustainability: The Eco-Friendly Revolution in Stationery",
    paragraph1:
      "At Ecoworks, we believe in making a difference, one pen stroke at a time. Welcome to our eco-friendly stationary store, where sustainability and creativity join forces. In this blog, we'll explore the incredible impact of eco-friendly stationery on the environment and why choosing sustainable options can lead us to a greener, more conscious future.",
    paragraph2Title: [
      "The Importance of Eco-Friendly Stationery",
      "Sustainable Materials, Beautiful Creations",
    ],
    paragraph2Text1:
      "Traditional stationery often involves harmful materials and wasteful production processes. From plastic-based pens to paper derived from unsustainable sources, the stationery industry has had its share of negative environmental effects. Ecoworks is committed to breaking this cycle by offering products that prioritize the planet.",
    paragraph2Text2:
      "At Ecoworks, we curate a wide range of stationery made from recycled and biodegradable materials. Discover pens crafted from recycled plastics, notebooks made from post-consumer paper, and eco-friendly packaging that leaves no trace behind. By choosing these products, you contribute to reducing landfill waste and promoting a circular economy.",
    paragraph3Title: ["Empowering Local Artisans", "Personalize Your Journey"],
    paragraph3Text1:
      "Our commitment to sustainability extends beyond materials. We actively collaborate with local artisans and small businesses that share our values. When you purchase from Ecoworks, you're supporting both the environment and the livelihood of skilled craftsmen, fostering a sense of community and positive change.",
    paragraph3Text2:
      "Eco-friendly stationery doesn't mean compromising on style or creativity. With our unique and chic designs, you can personalize your stationery while staying true to your values. Whether it's a handcrafted journal, a set of refillable ink pens, or plantable seed paper, Ecoworks empowers you to make conscious choices without sacrificing aesthetics.",
    paragraph4Title: [
      "Sustainable Practices for a Sustainable World",
      "Join the Movement",
    ],
    paragraph4Text1:
      "Beyond our products, Ecoworks strives to lead by example in sustainable practices. From reducing our carbon footprint through eco-friendly packaging and shipping methods to engaging in tree-planting initiatives, we actively work to offset our impact on the environment.",
    paragraph4Text2:
      "At Ecoworks, we invite you to join the eco-friendly stationery movement. Every small decision counts, and by choosing sustainable stationery, you can become part of a growing community working towards a cleaner, greener, and more sustainable future.",
    lastPoint:
      "Together, let's create a world where every stroke of a pen leaves a positive mark on the planet.",
    blogImages: [Image1, Image2, Image3],
  },
  {
    title:
      "Empowering Businesses with Eco-Friendly Stationery Solutions",
    paragraph1:"In today's corporate landscape, sustainability is no longer a trend but a responsibility. At Ecoworks, we understand the importance of incorporating eco-friendly practices into every aspect of a business, including stationery choices. In this blog, we explore how our range of sustainable stationery solutions can empower businesses to make a positive impact on the environment while maintaining professionalism and efficiency.",
        paragraph2Title: [
      "Sustainable Business Cards",
      "Recycled Paper Letterheads",
    ],
    paragraph2Text1:
      "Leave a lasting impression with sustainable business cards made from recycled paper or biodegradable materials. Our eco-friendly business cards reflect your commitment to environmental stewardship and set the tone for your company's green initiatives.",
    paragraph2Text2:
      "Enhance your brand image with recycled paper letterheads. These professional stationery essentials showcase your company's eco-friendly values and demonstrate your dedication to using resources responsibly.",
    paragraph3Title: ["Green Marketing Materials", "Environmentally Friendly Packaging"],
    paragraph3Text1:
      "At Ecoworks, we offer a variety of green marketing materials, such as brochures, flyers, and promotional materials, crafted from recycled paper and printed with eco-friendly inks. Our sustainable marketing solutions help you attract eco-conscious customers while minimizing your ecological footprint.",
    paragraph3Text2:
      "For businesses that ship products, our environmentally friendly packaging solutions are a game-changer. Opt for biodegradable mailers and packaging materials, reducing the environmental impact of shipping and showcasing your commitment to sustainable practices.",
    paragraph4Title: [
      "Office Supplies for a Greener Workplace",
      "Corporate Gifting with a Conscience",
    ],
    paragraph4Text1:
      "Transform your workplace into an eco-friendly oasis with our range of sustainable office supplies. From recycled paper for printing and note-taking to refillable ink cartridges for printers, Ecoworks has everything you need to equip your office for sustainability.",
    paragraph4Text2:
      "Show appreciation to clients and employees with eco-friendly corporate gifts. Choose from our selection of sustainable gift sets, such as recycled notebooks and plantable seed cards, which make a positive impact on recipients and the environment alike.",
    lastPoint:
      "By incorporating eco-friendly stationery solutions into your business practices, you send a powerful message about your company's commitment to sustainability. Join us at Ecoworks in empowering businesses to make environmentally conscious choices and build a better, greener future for all. Together, let's create a world where every business decision leaves a positive mark on the planet.",
    blogImages: [Image4, Image5, Image6],
  },
];

const BlogsPage = (props) => {
  return (
    <TemplatePage mainImage={Blogs} pageTitle="Blogs" blogsData={blogsData} />
  );
};

export default BlogsPage;
