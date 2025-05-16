import Image from 'next/image';
import pictures from '@/data/pictures.json';
import { notFound } from 'next/navigation';

export interface Props {
  params: Promise<{ workId: string }>;
}

export async function generateStaticParams() {
  return pictures.map(it => ({ workId: it.id }))
}

export default async function WorkDetailPage(props: Props) {
  const { params } = props
  const { workId } = await params

  const work = pictures.find(it => it.id === workId)

  if (!work) {
    notFound();
  }

  return (
    <div className="container mx-auto">work {workId}
    <Image src={work.src} alt={work.alt} width={1200} height={800} />
    <pre><code>{JSON.stringify(work, null, 2)}</code></pre></div>
  )
}