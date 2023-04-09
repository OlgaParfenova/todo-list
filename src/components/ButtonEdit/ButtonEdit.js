import { Button } from '../Button';
import { editIcon } from '../../assets/icons';

export const ButtonEdit = ({ color = 'primary', ...otherProps }) => {
  return (
    <Button color={color} title="Edit" {...otherProps} children={editIcon} />
  );
};
