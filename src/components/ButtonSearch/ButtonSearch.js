import {Button} from '../Button';
import {searchIcon} from '../../assets/icons';

export const ButtonSearch = ({color = 'primary', ...otherProps}) => {
    return <Button color={color} title='Search' {...otherProps} children={searchIcon} />
};
