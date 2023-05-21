import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-off-road-explorer`;
  }, [title]);
};

export default useTitle;
