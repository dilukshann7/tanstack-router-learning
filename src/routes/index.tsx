import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <div>
        <h1>App</h1>
      </div>
      <div>
        <h2>Header</h2>
      </div>
    </>
  );
}
