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
  loader: async () => {
    return "Dilukshan";
  },
});

function RouteComponent() {
  const name = Route.useLoaderData();
  return <div>Hello {name}!</div>;
}
