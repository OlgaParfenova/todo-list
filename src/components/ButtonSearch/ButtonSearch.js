import {Button} from '../Button';
import {searchIcon} from '../../assets/icons';

export const ButtonSearch = ({color = 'secondary', ...otherProps}) => {
    return <Button color={color} {...otherProps} children={searchIcon} />
};
