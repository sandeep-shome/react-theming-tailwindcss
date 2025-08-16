import ModeToggle from "./components/mode-toggle";
import reactLogo from "./assets/react.svg";
import GithubStars from "./components/github-stars";

const App = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-slate-950">
      <div className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={reactLogo} alt="" className="size-8" />
          <h1 className="font-medium dark:text-white">React theming</h1>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <GithubStars />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4">
        <p className="dark:text-white">
          This is an example of React theming (dark mode) using React context
          API. Technologies used for this projects are{" "}
          <strong>React @19.1.1, </strong>
          <strong>tailwindcss @4.1.12</strong> and <strong>Vite @7.1.2</strong>.
          You can also use simple "npx create-react-app"
        </p>
      </div>
    </div>
  );
};

export default App;
