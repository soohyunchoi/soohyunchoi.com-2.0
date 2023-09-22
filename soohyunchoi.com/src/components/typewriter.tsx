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
        <span className="z-0 before:block before:absolute before:-bottom-5 before:-inset-2 before:-skew-y-3 relative inline-block before:bg-gradient-to-r from-purple-500 to-pink-500">
            <TypeAnimation
                preRenderFirstString={true}
                sequence={words}
                wrapper="span"
                speed={12}
                deletionSpeed={10}
                style={{
                    fontWeight: 100,
                }}
                // style={{ fontSize: '2em', display: 'inline-block' }}
                className={`relative text-white text-7xl font-mono italic font-extralight`}
                repeat={Infinity}
        />
      </span>
    );
  }
  