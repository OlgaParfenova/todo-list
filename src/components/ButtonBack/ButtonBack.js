import {Button} from '../Button';
import {backIcon} from '../../assets/icons';

export const ButtonBack = ({color = 'info', ...otherProps}) => {
    return <Button color={color} {...otherProps} children={backIcon} />
};
