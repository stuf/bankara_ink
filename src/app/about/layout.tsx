import ContentPageLayout from '@/layouts/ContentPageLayout';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

export default function AboutLayout(props: Props) {
  const { children } = props;

  return <ContentPageLayout title="About">{children}</ContentPageLayout>;
}
