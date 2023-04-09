import { Button } from '../Button';
import { activateIcon } from '../../assets/icons';

export const ButtonActivate = ({ color = 'primary', ...otherProps }) => {
  return (
    <Button
      color={color}
      title="Activate"
      {...otherProps}
      children={activateIcon}
    />
  );
};
