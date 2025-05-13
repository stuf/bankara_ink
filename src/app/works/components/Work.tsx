import { WorkItem } from '@/types/work';
import Image from 'next/image';
import { format } from 'date-fns';
import { ArrowBendUpRight } from '@phosphor-icons/react';

export interface Props {
  imageSize?: number;
  workItem: WorkItem;
}

export default function Work(props: Props) {
  const { imageSize = 640, workItem } = props;
  const { src, alt, id, posted, hasStory } = workItem;

  const fmtd = posted && format(posted, 'yyyy-MM-dd');

  return (
    <div className="relative">
      {/* <div className="absolute bottom-0 text-white px-2 py-1 bg-black ">
        {alt}
      </div> */}

      {hasStory && (
        <div className="absolute top-0 right-0 text-white">
          <ArrowBendUpRight size={32} weight="bold" />
        </div>
      )}

      {/* {postedTs && (
        <div className="absolute bottom-0 right-0 text-white px-2 py-1 bg-black">
          {postedTs}
        </div>
      )} */}

      <figure id={`img-${id}`}>
        <Image
          className="object-cover items-center mx-auto"
          src={src}
          alt={alt}
          width={imageSize}
          height={imageSize}
        />
        <figcaption className="flex justify-between pt-1 px-1">
          <div>{alt}</div>
          <div className="italic text-sm opacity-70">
            <time dateTime={fmtd}>{fmtd}</time>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
