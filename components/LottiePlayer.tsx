'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

type Props = {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
};

export default function LottiePlayer({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
}: Props) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
      });
    }
  }, [animationData, loop, autoplay]);

  return <div ref={container} className={className} />;
}
