"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ListItem from "../common/listItem";
import endpoints from "@/core/constants/endpoints";

type Props = {};

const YourCategory = (props: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetch(endpoints.category.all).then((res) => res.json()),
  });

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h1>Error Occurred</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const allCategories = data?.body?.data;
  return (
    <div className="flex flex-col gap-4  max-h-[40%] ">
      <div className="w-full flex justify-between items-center">
        <p className="text-black font-bold text-base">Your Category</p>
      </div>
      <div className="flex flex-col  max-h-full overflow-y-auto">
        {allCategories && allCategories.length > 0 ? (
          allCategories.map((category: any, index: number) => {
            return (
              <ListItem
                key={index}
                imgSrc="/icons/items/transport.svg"
                title={category?.title}
                date={category?.createdAt}
              />
            );
          })
        ) : (
          <p className="heading-h4 text-gray-500">No Categories</p>
        )}
      </div>
    </div>
  );
};

export default YourCategory;
