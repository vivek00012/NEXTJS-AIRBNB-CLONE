"use client";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import CategoryBox from "../Category/CategoryBox";
import { useSearchParams } from "next/dist/client/components/navigation";
import { usePathname } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is closed to beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has wondmille",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property has a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property has snow!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in a desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in the Barns!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxorious!",
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
