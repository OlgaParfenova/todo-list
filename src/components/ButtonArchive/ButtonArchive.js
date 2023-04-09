import {Button} from '../Button';
import {archiveIcon} from '../../assets/icons';

export const ButtonArchive = ({color = 'primary', ...otherProps}) => {
    return <Button color={color} title='Archive' {...otherProps} children={archiveIcon} />
};
