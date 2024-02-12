import { LikeProps } from './Like.props';
import styles from './Like.module.css';
import cn from 'classnames';
import LikeIcon from './like.svg';

export const Like = ({
  numberLikes = 0,
  like,
  className,
  ...props
}: LikeProps): JSX.Element => {
  return (
    <div {...props}>
      <span
        className={cn(styles.like, className, {
          [styles.ghost]: like == false,
          [styles.blue]: like == true,
        })}
      >
        {numberLikes}
        <LikeIcon like={like} />
      </span>
    </div>
  );
};
