"use client"

import { useState } from "react";

export default function CreateCategory() {
  const [value, setValue] = useState("");
  
  return (
    <div
      className={`createNewCategory flex flex-col w-full border-t border-dark-600 mt-4`}
    >
      <div
        className={`createNewCategoryWrapper flex flex-col w-full max-md:px-4`}
      >
        <p className="text-light-800">Create new category:</p>
          <input
            type="text"
            className="bg-white"
            onChange={(e) => setValue(e.target.value)}
          />
      </div>
    </div>
  );
}
