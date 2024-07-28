import MenuCard from "@/component/menu/ui/menu-card";

export type Menu = {
  src: string;
  price: number;
  name: string;
};
const menus: Menu[] = [
  {
    src: "/images/1.jpeg",
    price: 20000,
    name: "콤보",
  },
  {
    src: "/images/1.jpeg",
    price: 7000,
    name: "윙 (6pcs)",
  },
  {
    src: "/images/1.jpeg",
    price: 7000,
    name: "봉 (6pcs)",
  },
  {
    src: "/images/1.jpeg",
    price: 9000,
    name: "다리 (4pcs)",
  },
];
export default function MenuGrid() {
  return (
    <div className={"grid grid-cols-2"}>
      {menus.map((item, index) => (
        <MenuCard key={index} index={index} item={item} />
      ))}
    </div>
  );
}
