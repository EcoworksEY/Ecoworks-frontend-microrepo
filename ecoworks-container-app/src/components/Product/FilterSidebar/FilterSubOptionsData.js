import iconBlack from "../../../assets/Filters/Colour/Black.svg";
import DotGritNote from "../../../assets/Notes/VectorDotGrit.svg";
import LinedPaper from "../../../assets/Notes/VectorLinedpaper.svg";
import BulletJournals from "../../../assets/Notes/VectorBulletJournals.svg";
import PopularItems from "../../../assets/Notes/VectorPopularItems.svg";

const FilterSubOptions = [
  {
    id:1,
    filter: "Product Type",
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
    id:4,
    filter: "Layout",
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
    id:6,
    filter: "Brand",
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