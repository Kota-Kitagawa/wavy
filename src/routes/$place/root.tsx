import { createFileRoute, Outlet } from '@tanstack/react-router'

// root.tsxは通常、パスセグメントを繰り返さず、親ルート名のみを参照します。
export const Route = createFileRoute('/$place/root')({ 
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <>
      <div className="content">
        <Outlet /> 
      </div>
    </>
  )
}