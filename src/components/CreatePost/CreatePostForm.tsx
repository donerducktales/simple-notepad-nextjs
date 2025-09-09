"use client";

import { setClickPost } from "@/lib/features/createPostSlice";
import { AppDispatch } from "@/lib/store";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useState } from "react";
import { mutate } from "swr";
import CreateCategory from "../CreateCategory";

interface CreatePostFormProps {
  dispatch: AppDispatch;
  router: AppRouterInstance;
  category: string;
}

export default function CreatePostForm({
  dispatch,
  router,
  category,
}: CreatePostFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title || !description || (!newCategory && !category)) {
      alert("All fields need to be filled");
      return;
    }

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

      const noteResponse = await fetch("/api/notes", {
        body: JSON.stringify({ title, description, type: finalCategory }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!noteResponse.ok) {
        throw new Error("Failed to create note.");
      }

      mutate("/api/notes");
      router.push("/home");
    } catch (error) {
      console.error("Submission error:", error);
    }
  }

  return (
    <form
      className={`flex flex-col items-start mt-4 ${"formPost"}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type your title"
        className={`placeholder-light-800 text-white text-5xl max-sm:text-3xl font-normal outline-0 w-full max-md:ml-4 ${"formPostTitle"}`}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className={`w-full h-[1px] bg-dark-600 my-3 ${"divider"}`}></span>
      <input
        type="text"
        placeholder="Type your note"
        className={`placeholder-light-800 text-white font-normal outline-0 w-full max-md:ml-4 ${"formPostNote"}`}
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
