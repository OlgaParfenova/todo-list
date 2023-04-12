import { Button } from '../Button';
import { lightModeIcon, darkModeIcon } from '../../assets/icons';

const titleForLight = 'Turn on the light';
const titleForDark = 'Turn off the light';

export const ButtonThemeMode = ({ color = 'primary', mode, ...otherProps }) => {
  return (
    <Button
      color={color}
      title={mode === 'light' ? titleForDark : titleForLight}
      {...otherProps}
      children={mode === 'light' ? darkModeIcon : lightModeIcon}
    />
  );
};
