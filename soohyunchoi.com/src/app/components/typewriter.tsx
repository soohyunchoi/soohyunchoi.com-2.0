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
    console.log(words);
    return (
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
            className={`text-white text-5xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-mono italic  font-extralight`}
            repeat={Infinity}
      />
    );
  }
  