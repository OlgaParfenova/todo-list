import {Button} from '../Button';
import {doneIcon} from '../../assets/icons';

export const ButtonDone = ({color = 'primary', ...otherProps}) => {
    return <Button color={color} title='Done' {...otherProps} children={doneIcon} />
};
