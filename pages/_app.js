import { Container } from '../components/Container'
import { AppProvider } from '../components/Context/AppContext'
import { UserProvider } from '../components/Context/UserContext'
import '/styles/bootstrap.min.css'
import '/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <UserProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </UserProvider>
    </AppProvider>
  )
}
export default MyApp
