import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      // TODO: classnames (cn) is used to combine different properties
      className={cn(
        // TODO: general properties
        styles.button,
        className,
        {
          // TODO: properties by condition
          [styles.primary]: appearance == 'primary',
          [styles.ghost]: appearance == 'ghost',
        }
      )}
      // TODO: other properties, incl. onClick
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
            [styles.right]: arrow == 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
