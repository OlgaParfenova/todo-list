import {Button} from '../Button';
import {backIcon} from '../../assets/icons';

export const ButtonBack = ({color = 'primary', ...otherProps}) => {
    return <Button color={color} title='Back' {...otherProps} children={backIcon} />
};
