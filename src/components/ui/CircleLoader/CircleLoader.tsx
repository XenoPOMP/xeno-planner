'use client';

import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import { type FC } from 'react';

import type { CircleLoaderProps } from './CircleLoader.props';

const Icon = motion(Loader);

const CircleLoader: FC<CircleLoaderProps> = () => {
  return (
    <Icon
      size={'1em'}
      initial={{
        rotate: '0turn',
      }}
      animate={{
        rotate: '1turn',
      }}
      transition={{
        ease: 'linear',
        duration: 2,
        delay: 0,
        repeat: Number.POSITIVE_INFINITY,
      }}
    />
  );
};

export default CircleLoader;
