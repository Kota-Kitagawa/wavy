import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$place/')({
  component: RouteComponent,
})

function RouteComponent() {
  // ユーザーに表示したい最終的なコンテンツ
  return <div>Hello "/$place"!</div> 
}