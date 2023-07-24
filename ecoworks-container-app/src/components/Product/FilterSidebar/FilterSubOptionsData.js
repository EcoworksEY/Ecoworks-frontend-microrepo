import iconBlack from "../../../assets/Filters/Colour/Black.svg";
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
        icon: iconBlack,
        filterOptionTitle: "Blue",
      },
      {
        id: 3,
        icon: iconBlack,
        filterOptionTitle: "Green",
      },
      {
        id: 4,
        icon: iconBlack,
        filterOptionTitle: "Red",
      },
      {
        id: 5,
        icon: iconBlack,
        filterOptionTitle: "Yellow",
      },
      {
        id: 6,
        icon: iconBlack,
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
        icon: iconBlack,
        filterOptionTitle: "A4",
      },
      {
        id: 2,
        icon: iconBlack,
        filterOptionTitle: "A5",
      },
      {
        id: 3,
        icon: iconBlack,
        filterOptionTitle: "B5",
      },
      {
        id: 4,
        icon: iconBlack,
        filterOptionTitle: "Pocket",
      },
    ],
    selected: []
  },
  {
    id:4,
    filter: "Layout",
    filterNameContext: "layout",
    filterOptions: [
      {
        id: 1,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 2,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 3,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 4,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 5,
        icon: iconBlack,
        filterOptionTitle: "Black",
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
        icon: iconBlack,
        filterOptionTitle: "0 - 10",
      },
      {
        id: 2,
        icon: iconBlack,
        filterOptionTitle: "10 - 50",
      },
      {
        id: 3,
        icon: iconBlack,
        filterOptionTitle: "50 - 100",
      },
      {
        id: 4,
        icon: iconBlack,
        filterOptionTitle: "100 - 150",
      },
      {
        id: 5,
        icon: iconBlack,
        filterOptionTitle: "150 - 199",
      },
    ],
    selected: []
  },
  {
    id:6,
    filter: "Brand",
    filterNameContext: "brand",
    filterOptions: [
      {
        id: 1,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 2,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 3,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 4,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
      {
        id: 5,
        icon: iconBlack,
        filterOptionTitle: "Black",
      },
    ],
    selected: []
  },
];

export default FilterSubOptions;
