import { Card } from "flowbite-react";
import { Menu } from "@/component/menu";

export default function MenuCard({
  index,
  item,
}: {
  index: number;
  item: Menu;
}) {
  return (
    <div className={"w-[200px] h-auto"}>
      <Card
        key={index}
        className={"max-w-sm"}
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={item.src}
      >
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {item.price}원
          </span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            담기
          </a>
        </div>
      </Card>
    </div>
  );
}
