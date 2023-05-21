import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Toy Parlour - ${title}`;
  }, [title]);
};

export default useTitle;
