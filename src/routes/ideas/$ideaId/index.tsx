import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ideas/$ideaId/")({
  head: () => ({
    meta: [
      {
        title: "Idea",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/ideas/$ideaId/"!</div>;
}
