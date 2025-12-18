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
  loader: async ({ params }) => {
    return "Dilukshan";
  },
});

function RouteComponent() {
  const name = Route.useLoaderData();
  const { ideaId } = Route.useParams();

  return (
    <div>
      Hello {name}! Your ID is {ideaId}
    </div>
  );
}
