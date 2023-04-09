import styles from './styles.module.css';

const getVariantClassName = variant => {
  switch (variant) {
    case 'h1':
      return styles.h1;
    case 'h2':
      return styles.h2;
    case 'h3':
      return styles.h3;
    case 'h4':
      return styles.h4;
    case 'h5':
      return styles.h5;
    case 'h6':
      return styles.h6;
    case 'body2':
      return styles.body2;
    case 'caption':
      return styles.caption;
    default:
      return styles.body1;
  }
};

const getColorClassName = color => {
  switch (color) {
    case 'primary':
      return styles.primary;
    case 'secondary':
      return styles.secondary;
    case 'error':
      return styles.error;
    case 'warning':
      return styles.warning;
    case 'info':
      return styles.info;
    case 'success':
      return styles.success;
    case 'textSecondary':
      return styles.textSecondary;
    case 'textDisabled':
      return styles.textDisabled;
    default:
      return styles.textPrimary;
  }
};

export const Typography = ({
  variant,
  children,
  className,
  color = 'textPrimary',
  ...otherProps
}) => {
  return (
    <p
      {...otherProps}
      className={`${getVariantClassName(variant)} ${className || ''} ${
        styles[color]
      }`}
    >
      {children}
    </p>
  );
};
