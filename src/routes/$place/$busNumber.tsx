import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$place/$busNumber')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$place/$busNumber"!</div>
}
