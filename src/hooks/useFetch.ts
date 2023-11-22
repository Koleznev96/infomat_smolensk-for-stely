import { useEffect, useState } from "react";

export function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean | null;
  error: null | Error;
} {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `http://5f8104486938.vps.myjino.ru/api/${url}`,
        );
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    void fetchData();
  }, [url]);

  return { data, loading, error };
}
