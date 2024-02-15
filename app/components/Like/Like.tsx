import { LikeProps } from './Like.props';
import styles from './Like.module.css';
import cn from 'classnames';
import LikeIcon from './like.svg';

export const Like = ({
  numberLikes = 0,
  like = 'no',
  className,
  ...props
}: LikeProps): JSX.Element => {
  return (
    <div {...props}>
      <span
        className={cn(styles.like, className, {
          [styles.ghost]: like == 'no',
          [styles.blue]: like == 'yes',
        })}
      >
        {numberLikes}
        <LikeIcon like={like} />
      </span>
    </div>
  );
};
