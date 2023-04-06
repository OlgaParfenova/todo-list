import {Button} from '../Button';
import {doneIcon} from '../../assets/icons';

export const ButtonDone = ({color = 'success', ...otherProps}) => {
    return <Button color={color} {...otherProps} children={doneIcon} />
};
