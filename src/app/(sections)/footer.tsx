'use client';
import TypeWriter from '../../components/typewriter'
import { useRef } from "react";

export default function Footer() {
	const ref = useRef(null);
	return (
        <div className="flex flex-col items-center text-black font-serif justify-center mt-32 space-y-5">
                <div className='space-y-2 flex flex-col items-center'>
                    <p>
                        Thanks for visiting :)
                    </p>
                    <p>
                        Don't hesitate to reach out to chat, ask a question, or just say hey!
                    </p>
                </div>
                <div className='space-y-2 flex flex-col items-center'>
                    <p className='font-light'>
                        Made with <i className="ri-mouse-line"></i> and <i className="ri-keyboard-box-line"></i> {'<'}3
                    </p>
                    <p className='font-light'>
                        © Soohyun Choi 2024
                    </p>
                </div>
			</div>
	);
}