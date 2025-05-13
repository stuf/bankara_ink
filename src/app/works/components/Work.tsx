import Image from 'next/image';

export interface Props {
  src: string;
  alt: string;
  id: string;
  posted?: Date;

  imageSize?: number;
}

export default function Work(props: Props) {
  const { src, alt, id, posted, imageSize = 640 } = props;

  const postedParts = [
    posted?.getFullYear(),
    posted ? posted?.getMonth() + 1 : undefined,
    posted?.getDate(),
  ];

  const postedTs = postedParts.filter(x => x).join('-');

  return (
    <div className="relative border-2 rounded-xl overflow-hidden">
      <div className="absolute bottom-0 text-white px-2 py-1 bg-black ">
        {alt}
      </div>

      {postedTs && (
        <div className="absolute top-0 left-0 text-white px-2 py-1 bg-black">
          {postedTs}
        </div>
      )}

      <Image
        className="object-cover items-center mx-auto"
        src={src}
        alt={alt}
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
