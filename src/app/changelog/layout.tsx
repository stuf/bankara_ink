import { ReactNode } from 'react';

import ContentPageLayout from '@/layouts/ContentPageLayout';

export interface Props {
  children?: ReactNode;
}

export default function ChangelogLayout(props: Props) {
  const { children } = props;

  return <ContentPageLayout title="Changelog">{children}</ContentPageLayout>;
}
