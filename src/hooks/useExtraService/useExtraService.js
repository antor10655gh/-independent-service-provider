import { useEffect, useState } from "react";

const useExtraPackages = () => {
  const [extraPackages, setExtraPackages] = useState([]);

  useEffect(() => {
    fetch("extraservice.json")
      .then((res) => res.json())
      .then((json) => setExtraPackages(json));
  }, []);

  return [extraPackages, setExtraPackages];
};

export default useExtraPackages;
