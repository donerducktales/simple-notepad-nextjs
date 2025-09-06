"use client";

import { resetClickNoteState } from "@/lib/features/clickSlice";
import { setClickPost } from "@/lib/features/createPostSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, useEffect, useState } from "react";
import { mutate } from "swr";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import CreateCategory from "../CreateCategory";

interface EditNoteFormProps {
  dispatch: AppDispatch;
  router: AppRouterInstance;
  noteId: string;
  title: string;
  description: string;
  category: string;
  setCategory: Dispatch<string>;
}

export default function EditNoteForm({
  dispatch,
  router,
  noteId,
  title,
  description,
  category,
  setCategory,
}: EditNoteFormProps) {
  const [noteTitle, setTitle] = useState<string>(title);
  const [noteDescription, setDescription] = useState<string>(description);
  const [newCategory, setNewCategory] = useState<string>("");
  const reduxCategory = useSelector((state: RootState) => state.clickNote.type);

  useEffect(() => {
    setCategory(reduxCategory);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setClickPost("inactive"));

    try {
      let finalCategory = category;

      if (newCategory) {
        const response = await fetch("/api/categories", {
          body: JSON.stringify({ type: newCategory }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        mutate("/api/categories");

        if (!response.ok) {
          throw new Error("Failed to create new category.");
        }
        finalCategory = newCategory;
      }

      const updateNoteResponse = await fetch("/api/notes", {
        body: JSON.stringify({
          _id: noteId,
          title: noteTitle,
          description: noteDescription,
          type: finalCategory,
        }),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!updateNoteResponse.ok) {
        throw new Error("Failed to create note.");
      }

      mutate("/api/notes");
      dispatch(resetClickNoteState());
      router.push("/home");
      return updateNoteResponse;
    } catch (error) {
      console.error("Submission error:", error);
    }
  }

  return (
    <form
      className={`flex flex-col items-start mt-4 ${"formEditNote"}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Update your title"
        className={`placeholder-light-800 text-white text-5xl max-sm:text-3xl font-normal outline-0 w-full max-md:ml-4 ${"formEditTitle"}`}
        value={noteTitle}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <span className={`w-full h-[1px] bg-dark-600 my-3 ${"divider"}`}></span>
      {/* <textarea
        placeholder="Update your note"
        className={`placeholder-light-800 text-white font-normal outline-0 max-md:ml-4 w-[calc(100%-32px)] min-h-72 resize-none ${"editNoteDescription"}`}
        value={noteDescription}
        onChange={(e) => setDescription(e.target.value)}
      /> */}
      <input
        type="text"
        placeholder="Update your note"
        className={`placeholder-light-800 text-white font-normal outline-0 w-full max-md:ml-4 ${"editNoteDescription"}`}
        value={noteDescription}
        onChange={(e) => setDescription(e.target.value)}
      />
      <CreateCategory setNewCategory={setNewCategory} />
      <button
        type="submit"
        className={`fixed md:right-10 md:bottom-9 right-4 bottom-6 w-14 h-14 rounded-full bg-primaryBlue flex justify-center items-center ${"formPostSubmitButton"}`}
      >
        <ArrowUpTrayIcon className="text-white w-6" />
      </button>
    </form>
  );
}
