import iconBlack from "../../../assets/Filters/Colour/Black.svg";
import iconBlue from "../../../assets/Filters/Colour/Blue.svg";
import iconGreen from "../../../assets/Filters/Colour/Green.svg";
import iconRed from "../../../assets/Filters/Colour/Red.svg";
import iconYellow from "../../../assets/Filters/Colour/Yellow.svg";
import iconMulti from "../../../assets/Filters/Colour/Multicolour.svg";
import iconWhite from "../../../assets/Filters/Colour/White.svg";


import A4 from "../../../assets/Filters/Size/A4.svg";
import A5 from "../../../assets/Filters/Size/A5.svg";
import B5 from "../../../assets/Filters/Size/B5.svg";
import Pocket from "../../../assets/Filters/Size/Pocket.svg";

import Dollar from "../../../assets/Filters/Price/DollarSign.svg"

import DotGritNote from "../../../assets/Notes/VectorDotGrit.svg";
import LinedPaper from "../../../assets/Notes/VectorLinedpaper.svg";
import BulletJournals from "../../../assets/Notes/VectorBulletJournals.svg";
import PopularItems from "../../../assets/Notes/VectorPopularItems.svg";

const FilterSubOptions = [
  {
    id:1,
    filter: "Product Type",
    filterNameContext: "productType",
    filterOptions: [
      {
        id: 1,
        icon: DotGritNote,
        filterOptionTitle: "Dot Grit Notebooks",
      },
      {
        id: 2,
        icon: LinedPaper,
        filterOptionTitle: "Lined Paper Notebooks",
      },
      {
        id: 3,
        icon: BulletJournals,
        filterOptionTitle: "Bullet Journals",
      },
      {
        id: 4,
        icon: PopularItems,
        filterOptionTitle: "Popular Items",
      },
    ],
    selected: []
  },
  {
    id:2,
    filter: "Colour",
    filterNameContext: "colour",
    filterOptions: [
      {
        id: 1,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 2,
        icon: iconBlue,
        filterOptionTitle: "Blue",
      },
      {
        id: 3,
        icon: iconGreen,
        filterOptionTitle: "Green",
      },
      {
        id: 4,
        icon: iconRed,
        filterOptionTitle: "Red",
      },
      {
        id: 5,
        icon: iconYellow,
        filterOptionTitle: "Yellow",
      },
      {
        id: 6,
        icon: iconMulti,
        filterOptionTitle: "MultiColour",
      },
    ],
    selected: []
  },
  {
    id:3,
    filter: "Size",
    filterNameContext: "size",
    filterOptions: [
      {
        id: 1,
        icon: A4,
        filterOptionTitle: "A4",
      },
      {
        id: 2,
        icon: A5,
        filterOptionTitle: "A5",
      },
      {
        id: 3,
        icon: B5,
        filterOptionTitle: "B5",
      },
      {
        id: 4,
        icon: Pocket,
        filterOptionTitle: "Pocket",
      },
    ],
    selected: []
  },
  {
    id:4,
    filter: "Cover Type",
    filterNameContext: "coverType",
    filterOptions: [
      {
        id: 1,
        icon: iconWhite,
        filterOptionTitle: "Hard",
      },
      {
        id: 2,
        icon: iconWhite,
        filterOptionTitle: "Refillable",
      },
      {
        id: 3,
        icon: iconWhite,
        filterOptionTitle: "Soft",
      },
      {
        id: 4,
        icon: iconWhite,
        filterOptionTitle: "Leather",
      },
      {
        id: 5,
        icon: iconWhite,
        filterOptionTitle: "Fabric",
      },
    ],
    selected: []
  },
  {
    id:5,
    filter: "Price",
    filterNameContext: "price",
    filterOptions: [
      {
        id: 1,
        icon: Dollar,
        filterOptionTitle: "0 - 10",
      },
      {
        id: 2,
        icon: Dollar,
        filterOptionTitle: "10 - 50",
      },
      {
        id: 3,
        icon: Dollar,
        filterOptionTitle: "50 - 100",
      },
      {
        id: 4,
        icon: Dollar,
        filterOptionTitle: "100 - 150",
      },
      {
        id: 5,
        icon: Dollar,
        filterOptionTitle: "150 - 199",
      },
    ],
    selected: []
  }
];

export default FilterSubOptions;
