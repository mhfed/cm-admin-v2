import { Layout } from '../custom/layout'

interface PageContainerProps {
  title: string
  children?: React.ReactNode
}

export default function PageContainer({ title, children }: PageContainerProps) {
  return (
    <Layout>
      <Layout.Header>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      </Layout.Header>
      <Layout.Body>
        {children}
      </Layout.Body>
    </Layout>
  )
} 