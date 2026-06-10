import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/client-fetch";

type ApiDataState<T> =
  | {
      status: "loading";
      isLoading: true;
      data: null;
      error: null;
    }
  | {
      status: "error";
      isLoading: false;
      data: null;
      error: string;
    }
  | {
      status: "success";
      isLoading: false;
      data: T;
      error: null;
    };

export function useApiData<T>(url: string): ApiDataState<T> {
  const [state, setState] = useState<ApiDataState<T>>({
    status: "loading",
    isLoading: true,
    data: null,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    setState({
      status: "loading",
      isLoading: true,
      data: null,
      error: null
    });

    fetchJson<T>(url)
      .then((responseData) => {
        if (isMounted) {
          setState({
            status: "success",
            isLoading: false,
            data: responseData,
            error: null
          });
        }
      })
      .catch((currentError: Error) => {
        if (isMounted) {
          setState({
            status: "error",
            isLoading: false,
            data: null,
            error: currentError.message
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}
