import { useEffect, useState } from "react";

const usePackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("packages.json")
      .then((res) => res.json())
      .then((json) => setPackages(json));
  }, []);

  return [packages, setPackages];
};

export default usePackage;
