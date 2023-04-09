import {Button} from '../Button';
import {addIcon} from '../../assets/icons';

export const ButtonAdd = ({color = 'primary', ...otherProps}) => {
    return <Button color={color} title='Add' {...otherProps} children={addIcon} />
};
