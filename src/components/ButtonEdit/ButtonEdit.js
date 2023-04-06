import {Button} from '../Button';
import {editIcon} from '../../assets/icons';

export const ButtonEdit = ({color = 'warning', ...otherProps}) => {
    return <Button color={color} {...otherProps} children={editIcon} />
};
