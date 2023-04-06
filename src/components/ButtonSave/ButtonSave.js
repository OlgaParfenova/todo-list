import {Button} from '../Button';
import {saveIcon} from '../../assets/icons';

export const ButtonSave = ({color = 'success', ...otherProps}) => {
    return <Button color={color} {...otherProps} children={saveIcon} />
};
