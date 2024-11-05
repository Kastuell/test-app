import Image from "next/image";

export const Pagination = () => {
  return (
    <div className="flex justify-between items-center w-2/3 select-none lg:basis-1/3 order-2 lg:order-1">
      <div className="rounded-full border size-10 flex justify-center items-center cursor-pointer">
        1
      </div>
      <div className="size-10 flex justify-center items-center cursor-pointer">2</div>
      <div className="size-10 flex justify-center items-center cursor-pointer">...</div>
      <div className="size-10 flex justify-center items-center cursor-pointer">4</div>
      <Image
        className="size-5 flex justify-center items-center cursor-pointer"
        src={"/images/next.svg"}
        alt=""
        width={1}
        height={1}
      />
    </div>
  );
};
