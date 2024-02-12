import { Button, Card, Tag } from './components';
import { Htag } from './components/Htag/Htag';
import { Paragraph } from './components/Paragraph/Paragraph';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Header</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <div>
        <Paragraph size="m">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </div>
      <Tag size="m" color="ghost">
        My Tag
      </Tag>
      <Tag size="m" color="primary">
        My Tag
      </Tag>
      <Tag size="m" color="green">
        My Tag
      </Tag>
      <Tag size="m" color="red">
        My Tag
      </Tag>
      <Tag size="m" color="blue">
        My Tag
      </Tag>
      <hr />
      <div>.my_blog</div>
      <Card
        children={undefined}
        name="Front-end"
        lastLikeDuration={1}
        numberLikes={4}
        like={true}
        header="Как работать с CSS Grid"
        paragraph="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
        readDuration={3}
        link="Читать"
      ></Card>
    </>
  );
}
