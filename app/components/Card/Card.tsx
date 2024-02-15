import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { Htag, Like, Paragraph, Tag } from '..';
// For import images, see: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets
// Note: all images should be stored in "public" folder. See "Static Assets" section by link above.
import Image from 'next/image';
import ArrowRightIcon from './arrow-right.svg';

export const Card = ({
  name,
  lastLikeDuration,
  numberLikes,
  like,
  header,
  paragraph,
  readDuration,
  link,
  // children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <div className={cn(styles.picture, className)} {...props}>
        <Image
          src={`/smallCardImage.png`}
          alt={''}
          width="300"
          height="192"
          // When true, the image will be considered high priority and preload.
          // Lazy loading is automatically disabled for images using priority.
          priority={true}
        />
      </div>

      <div>
        <div className={cn(styles.like, className)} {...props}>
          <Tag
            className={cn(styles.likeDuration, className)}
            {...props}
            size="s"
            color="ghost"
          >
            {name} &#183; {lastLikeDuration} месяц назад
          </Tag>
          <Like numberLikes={numberLikes} like={like} />
        </div>
        <Htag tag="h4">{header}</Htag>
        <Paragraph size="s">{paragraph}</Paragraph>
      </div>

      <div className={cn(styles.read, className)} {...props}>
        <Tag
          className={cn(styles.duration, className)}
          {...props}
          size="s"
          color="ghost"
        >
          {readDuration} минуты
        </Tag>
        <Tag
          className={cn(styles.link, className)}
          {...props}
          size="s"
          color="blue"
        >
          {link}
          <ArrowRightIcon />
        </Tag>
      </div>
      {/* {children} */}
    </div>
  );
};
