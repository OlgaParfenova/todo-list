import './styles/theme.css';
import { Container } from './components';
import { MainPage, AddPage, EditPage, DetailsPage } from './pages';
import { StoreProvider, ThemeProvider, RouterProvider, Route } from './context';

function App() {
  return (
    <Container>
      <ThemeProvider>
        <RouterProvider>
          <StoreProvider>
            <Route page={'mainPage'}>
              <MainPage />
            </Route>
            <Route page={'addPage'}>
              <AddPage />
            </Route>
            <Route page={'editPage'}>
              <EditPage />
            </Route>
            <Route page={'detailsPage'}>
              <DetailsPage />
            </Route>
          </StoreProvider>
        </RouterProvider>
      </ThemeProvider>
    </Container>
  );
}

export default App;
