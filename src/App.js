import './styles/theme.css';
import { Container } from './components';
import { MainPage, AddPage, EditPage } from './pages';
import { StoreProvider, RouterProvider, Route } from './context';

function App() {
  return (
    <Container>
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
        </StoreProvider>
      </RouterProvider>
    </Container>
  );
}

export default App;
