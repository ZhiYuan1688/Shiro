import { ClientOnly } from '~/components/common/ClientOnly'
import { FABContainer } from '~/components/ui/fab'

import { Content } from '../content/Content'
import { Footer } from '../footer'
import { Header } from '../header'

export const Root: Component = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>

{/*       <Footer /> */}
      <ClientOnly>
        <FABContainer />
      </ClientOnly>
    </>
  )
}
