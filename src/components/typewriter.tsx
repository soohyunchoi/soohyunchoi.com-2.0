"use client"
import { TypeAnimation } from 'react-type-animation';

export interface TypeWriterProps {
    words: (number | string | (() => void ))[];
    delay: number;
}

export default function TypeWriter(props: TypeWriterProps) {
    const words = [];
    for (const word of props.words) {
        words.push(word);
        words.push(props.delay as number);
    }
    return (
        <span className="z-0 relative inline-block">
            <span
                className="absolute -bottom-5 -inset-2 -skew-y-3 -z-10"
                style={{ background: 'linear-gradient(to right, #0024d7 0%, #ed264a 100%)' }}
            />
            <TypeAnimation
                preRenderFirstString={true}
                sequence={words}
                wrapper="span"
                speed={12}
                deletionSpeed={10}
                style={{
                    fontWeight: 100,
                }}
                className={`relative text-white text-7xl font-mono italic font-extralight`}
                repeat={Infinity}
        />
      </span>
    );
  }
