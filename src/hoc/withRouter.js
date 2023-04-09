import { routerContext } from '../context';

const { Consumer: RouterConsumer } = routerContext;
export const withRouter = (Component) => (props) => {
  return (
    <RouterConsumer>
      {({ navigate, page }) => {
        return <Component navigate={navigate} page={page} {...props} />;
      }}
    </RouterConsumer>
  );
};
