import { setDescription, setTitle } from "@/lib/features/clickSlice";
import { AppDispatch } from "@/lib/store";
import { mutate } from "swr";

export async function handleClickDelete({
  _id,
  type,
  dispatch,
}: {
  _id: string;
  type: string;
  dispatch: AppDispatch;
}) {
  // 1. Видаляємо нотатку
  const deleteNoteRes = await fetch("api/notes", {
    body: JSON.stringify({ _id: _id }),
    method: "DELETE",
    cache: "no-store",
  });

  if (!deleteNoteRes.ok) {
    console.error("Помилка при видаленні нотатки");
    return;
  }

  // 2. Отримуємо кількість нотаток у категорії
  const countCategoriesRes = await fetch(`/api/count?type=${type}`, {
    method: "GET",
  });

  const parsedCountCategories = await countCategoriesRes.json();

  // 3. Якщо нотаток у категорії не залишилось, видаляємо категорію
  if (parsedCountCategories === 0) {
    const deleteCategoryRes = await fetch("/api/categories", {
      method: "DELETE",
      body: JSON.stringify({ type }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!deleteCategoryRes.ok) {
      console.error("Помилка при видаленні категорії");
    }
  }

  // 4. Оновлюємо інтерфейс
  dispatch(setTitle("Hello!"));
  dispatch(setDescription("Here will be your notes"));
  mutate("/api/notes");
  mutate("/api/categories");
}