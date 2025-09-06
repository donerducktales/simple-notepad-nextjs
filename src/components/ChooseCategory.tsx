"use client";

import { poppins } from "@/assets/fonts";
import { ObjectId, WithId } from "mongodb";
import { Dispatch, useEffect, useState } from "react";

interface Data {
  _id: ObjectId;
  type: string;
}

export default function ChooseCategory({
  category,
  setCategory,
}: {
  category: string;
  setCategory: Dispatch<string>;
}) {
  const [data, setData] = useState<WithId<Data>[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/categories", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const parsedData: WithId<Data>[] = await response.json();
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  function handleClick(type: string) {
    if (category === type) {
      setCategory("");
    } else {
      setCategory(type);
    }
  }

  return (
    <div className={`chooseCategoryExisting flex flex-col w-full`}>
      <div
        className={`chooseCategoryExistingWrapper flex flex-col w-full max-md:px-4`}
      >
        {data.length === 0 ? "" : <p className={`text-light-800 mt-1`}>or:</p>}
        <p className={`text-light-800`}>Choose category from existing:</p>
        <div
          className={`categoryWrapper flex flex-row flex-wrap md:gap-2 md:gap-x-2 gap-2.5 gap-x-2.5 mt-2 ${poppins.className}`}
        >
          {data.length === 0 ? (
            <p className="text-light-800">
              There is no category. You should create a new one
            </p>
          ) : (
            data.map((el) => (
              <button
                className={`md:h-[23px] h-8 rounded-2xl border border-solid border-primaryBlue ${category === el.type ? "bg-primaryBlue text-dark-800" : "bg-dark-800 text-primaryBlue"} font-semibold px-2 py-[3px] flex items-center justify-center`}
                key={el._id.toString()}
                onClick={() => handleClick(el.type)}
              >
                #{el.type}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
