import { Button } from '../Button';
import { deleteIcon } from '../../assets/icons';

export const ButtonDelete = ({ color = 'primary', ...otherProps }) => {
  return (
    <Button
      color={color}
      title="Delete"
      {...otherProps}
      children={deleteIcon}
    />
  );
};
