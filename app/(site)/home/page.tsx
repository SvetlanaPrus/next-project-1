import { Suspense } from 'react';
import { Card } from '@/app/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Курсы по Photoshop',
  description: 'Профессия дизайнер от 0 до PRO',
};

export default function Home(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <Card
        name="Front-end"
        lastLikeDuration={1}
        numberLikes={4}
        like="yes"
        header="Как работать с CSS Grid"
        paragraph="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
        readDuration={3}
        link="Читать"
      />
    </Suspense>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
