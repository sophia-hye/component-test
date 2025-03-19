import React, { useRef, useEffect, useState } from 'react';
import { sysColor } from '@/designtokens/systems/sysColor';

interface DividerProps {
  direction: 'horizontal' | 'vertical';
  length?: number;
}

export default function Divider({ direction, length }: DividerProps) {
  const dividerRef = useRef<SVGSVGElement>(null);
  const [finalLength, setFinalLength] = useState<number>(0);

  useEffect(() => {
    if (length) return setFinalLength(length);

    if (!dividerRef.current) return;

    const dividerElement = dividerRef.current;
    const parentElement = dividerElement.parentElement;

    if (!parentElement) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === parentElement) {
          setFinalLength(entry.contentRect.height);
        }
      }
    });

    resizeObserver.observe(parentElement);

    setFinalLength(parentElement.clientHeight);
    console.log(
      'length',
      length,
      '\nfinalLength',
      finalLength,
      '\ndividerElement',
      dividerElement,
      '\nparentElement',
      parentElement,
      '\nparent height',
      parentElement.clientHeight,
    );

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const width = direction === 'horizontal' ? finalLength : 1;
  const height = direction === 'vertical' ? finalLength : 1;

  const x2 = direction === 'horizontal' ? `${width}` : '0';
  const y2 = direction === 'horizontal' ? '0' : `${height}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={{ display: 'block' }}
      ref={dividerRef}
    >
      <line x1="0" y1="0" x2={x2} y2={y2} stroke={sysColor.common.line} />
    </svg>
  );
}
