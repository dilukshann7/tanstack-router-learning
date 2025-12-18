import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ideas/$ideaId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ideas/$ideaId/"!</div>
}
