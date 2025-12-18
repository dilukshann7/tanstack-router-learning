import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ideas/")({
  head: () => ({
    meta: [
      {
        title: "Ideas Main Page",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/ideas/"!</div>;
}
