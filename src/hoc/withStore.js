import { storeContext } from '../context';

const { Consumer: StoreConsumer } = storeContext;
export const withStore = (Component) => (props) => {
  return (
    <StoreConsumer>
      {(state) => {
        return <Component {...state} {...props} />;
      }}
    </StoreConsumer>
  );
};
