import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { useEffect, useState } from "react";

import type { RootState, AppDispatch } from "src/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useLanguageControl = () => {
  const { language } = useAppSelector((state) => state.main);

  return (titleRu?: string, titleEN?: string) =>
    language === "ru_RU" ? titleRu || "" : titleEN || titleRu || "";
};

export const useDateControl = () => {
  const { language } = useAppSelector((state) => state.main);

  return (date?: string) =>
    language === "ru_RU"
      ? new Date(date || "").toLocaleDateString("ru-RU")
      : new Date(date || "").toLocaleDateString("en-EN");
};
