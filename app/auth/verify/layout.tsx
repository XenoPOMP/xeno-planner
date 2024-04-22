import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { type FC } from 'react';

import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';

const VerificationPageLayout: FC<PropsWith<'children', {}>> = ({
  children,
}) => {
  return (
    <AuthForm>
      <FieldList className={cn('items-center')}>{children}</FieldList>
    </AuthForm>
  );
};

export default VerificationPageLayout;
