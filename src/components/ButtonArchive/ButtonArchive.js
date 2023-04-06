import {Button} from '../Button';
import {archiveIcon} from '../../assets/icons';

export const ButtonArchive = ({color = 'secondary', ...otherProps}) => {
    return <Button color={color} {...otherProps} children={archiveIcon} />
};
