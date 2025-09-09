import { Dispatch } from "react";

export default function CreateCategory({setNewCategory}: {setNewCategory: Dispatch<string>}) {
  return (
    <div
      className={`createNewCategory flex flex-col w-full border-t border-dark-600 mt-4`}
    >
      <div
        className={`createNewCategoryWrapper flex flex-col w-full max-md:px-4 mt-2`}
      >
        <p className="text-light-800 mb-1">Create new category:</p>
        <input
          type="text"
          className="placeholder-light-800 text-white font-normal outline-0 w-full mb-1"
          placeholder="Type here your new category"
          onChange={(e) => setNewCategory(e.target.value)}
        />
      </div>
    </div>
  );
}
