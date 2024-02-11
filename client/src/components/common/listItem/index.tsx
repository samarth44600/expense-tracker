import { formatDate } from "@/core/utils/formatDate";
import { formatTime } from "@/core/utils/formatTime";
import Image from "next/image";
import React from "react";

type Props = {
  imgSrc: string;
  title: string;
  time?: string;
  type?: string;
  price?: string;
  date?: string;
};

const ListItem = ({ imgSrc, title, date, price, time, type }: Props) => {
  const editedDate = date && formatDate(date);
  const editedTime = time && formatTime(time);
  return (
    <div className="w-full flex justify-between items-center gap-2 py-2 pr-1">
      <div className="flex gap-4 items-center">
        <Image src={imgSrc} alt={type || ""} width={55} height={50} />
        <div className="flex flex-col gap-2">
          <p className="text-base text-[#000000B7] font-bold">{title}</p>
          {time && (
            <div className="flex gap-2">
              <p className="text-sm text-[#00000057] font-bold">
                {editedTime} .
              </p>
              <div className="flex items-center">
                <Image src={"/icons/tag.svg"} alt={""} width={24} height={24} />
                <p className="text-sm text-[#00000057] font-bold">{type}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        {price && <p className="text-base font-bold">{price}</p>}
        {date && (
          <p className="text-base font-bold text-[#A8A8A8]">
            Created at {editedDate}
          </p>
        )}
      </div>
    </div>
  );
};

export default ListItem;
