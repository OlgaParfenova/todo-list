import {Button} from '../Button';
import {deleteIcon} from '../../assets/icons';

export const ButtonDelete = ({color = 'error', ...otherProps}) => {
    return <Button color={color} {...otherProps} children={deleteIcon} />
};
