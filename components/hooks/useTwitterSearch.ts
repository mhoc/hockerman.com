import { useEffect, useState } from "react";

export type UseTwitterSearchState = UseTwitterSearchStateLoading
  | UseTwitterSearchStateError
  | UseTwitterSearchStateResults;

interface UseTwitterSearchStateLoading {
  state: "loading";
}

interface UseTwitterSearchStateError {
  state: "error";
  error: string;
}

interface UseTwitterSearchStateResults {
  state: "results";
  hits: any[];
}

export const useTwitterSearch = (searchTerm: string, submit: number): UseTwitterSearchState => {
  const [ state, setState ] = useState<UseTwitterSearchState>({ state: "loading" });
  useEffect(() => {
    setState({ state: "loading" });
    fetch(`/api/twitter/search?searchTerm=${encodeURIComponent(searchTerm)}`)
      .then(r => r.json())
      .then((result) => {
        setState({
          state: "results",
          hits: result.hits,
        });
      });
  }, [ submit ]);
  return state;
}
