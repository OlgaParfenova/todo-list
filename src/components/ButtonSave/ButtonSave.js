import {Button} from '../Button';
import {saveIcon} from '../../assets/icons';

export const ButtonSave = ({color = 'primary', ...otherProps}) => {
    return <Button color={color} title='Save' {...otherProps} children={saveIcon} />
};
