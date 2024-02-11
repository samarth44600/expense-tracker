import React from "react";
import { useQuery } from "@tanstack/react-query";
import ListItem from "../common/listItem";
import endpoints from "@/core/constants/endpoints";

type Props = {};

const TodaysExpenses = (props: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetch(endpoints.expenses.today).then((res) => res.json()),
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
  const todaysExpenses = data?.body?.data;
  return (
    <div className="flex flex-col gap-4 max-h-[40%] min-h-[30%]">
      <div className="w-full flex justify-between items-center">
        <p className="text-black font-bold text-base">Today’s Expenses</p>
      </div>
      <div className="flex flex-col  max-h-full min-h-[40%] overflow-y-auto">
        {todaysExpenses && todaysExpenses.length > 0 ? (
          todaysExpenses.map((expense: any, index: number) => {
            return (
              <ListItem
                key={index}
                imgSrc="/icons/items/transport.svg"
                title={expense?.title}
                time={expense?.createdAt}
                price={expense?.amount}
                type={expense?.category?.title}
              />
            );
          })
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="heading-h4 text-gray-500">No Records</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodaysExpenses;
