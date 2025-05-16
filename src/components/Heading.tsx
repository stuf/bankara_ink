import { ReactNode } from 'react';

type Level = 'title' | 'subtitle';

export interface Props {
  level: Level;
  children?: ReactNode;
}

export default function Heading(props: Props) {
  const { level, children } = props;

  if (level === 'title') {
    return <h1>{children}</h1>;
  }

  if (level === 'subtitle') {
    return <h2>{children}</h2>;
  }
}
