import { useEffect, useState } from "react";

const GithubStars = () => {
  const [stars, setStars] = useState(0);
  const fetchStarts = async () => {
    const res = await fetch(
      "https://api.github.com/repos/sandeep-shome/html-projects",
      { method: "GET" }
    );
    const data = await res.json();
    setStars(data.stargazers_count);
  };

  useEffect(() => {
    fetchStarts();
  });
  return (
    <div className="flex items-center gap-1">
      <img src="github.png" alt="github" className="size-4 dark:invert-100" />
      <span className="text-sm dark:text-white">{stars}</span>
    </div>
  );
};

export default GithubStars;
