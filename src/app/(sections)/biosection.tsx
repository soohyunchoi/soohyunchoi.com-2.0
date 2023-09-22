import 'remixicon/fonts/remixicon.css';
import { motion, useScroll, Variants, AnimatePresence } from "framer-motion";
import { IconFooter } from './worksection';
import { useState, useEffect } from "react";
import { BIO_SECTION_CONTENT } from '../constants';
import Head from 'next/head';

export default function AboutSection() {
    const [selected, setSelected] = useState(0);
    const [counter, setCounter] = useState(0); // key generator for AnimatePresence

    function handleLeftClick() {
        setSelected((selected - 1 + BIO_SECTION_CONTENT.length) % BIO_SECTION_CONTENT.length);
    }
    function handleRightClick() {
        setSelected((selected + 1) % BIO_SECTION_CONTENT.length);
    }
    function incrementCounter() {
        setCounter(counter + 1);
    }

	return (
		<section id='bio' className="mt-48 text-black grid grid-cols-2 h-screen w-full">
			<TitleColumn selected={selected} counter={counter}/>
            <BioPictureCarousel
                incrementCounter={incrementCounter}
                counter={counter}
                setSelected={setSelected} 
                selected={selected} 
                handleLeftClick={handleLeftClick} 
                handleRightClick={handleRightClick}
            />
		</section>
	);
}

export interface JobCardProps {
	startDate: Date;
	endDate?: Date;
	company: string;
	position: string;
	description: string;
	technologies: string[];
	logo: string;
}

interface TitleColumnProps {
    selected: number,
    counter: number, // key generator for AnimatePresence
}
function TitleColumn(props: TitleColumnProps) {
    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, 
            transition: { 
                // delay: 0.2, 
                duration: 0.5,
                type: "spring",
                damping: 20,
                stiffness: 300,
            } 
        },
        exit: {opacity: 0, y: 10, transition: { duration: 0.5 } }
    };

	return (
		<div className='w-full pr-32 relative flex flex-col justify-center'>
			<div className='flex flex-col space-y-5'>

				<h1 className="font-sans font-medium text-6xl">
					<span className='italic'>
						Right now, I'm <br/>
					</span>
                    <AnimatePresence key={props.counter}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={headerVariants}
                            key={props.counter}
                            className='font-serif font-medium text-7xl '
                            >
                            {
                                BIO_SECTION_CONTENT[props.selected].label
                            }
                        </motion.div>
                    </AnimatePresence>
                    
				</h1>

				<div className="font-serif font-light text-xl space-y-5">

					<p>
					People call me Sush. I graduated from UC Santa Barbara (go Gauchos!) with a bachelor's in Computer Science.
					</p>

					<p>
					I've always been a builder. I built my first PC when I was in middle school and my first calculator app when I was in elementary school. 
					</p>

					<p>
					Outside of work, I love listening, producing, and spinning house music, snowboarding, surfing, off-roading, golfing, watching movies, and playing Valorant!
					</p>

					<p>
					<span className='italic font-sans bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>hint:</span> click the arrows to try my over designed carousel :)
					</p>
					
				</div>

				<IconFooter className='pt-5'/>

			</div>

		</div>
	);
}

interface BioPictureCarouselProps {
    handleLeftClick: () => void,
    handleRightClick: () => void,
    selected: number,
    setSelected: (selected: number) => void,
    counter: number, // key generator for AnimatePresence
    incrementCounter: () => void, // key generator for AnimatePresence
}
function BioPictureCarousel(props: BioPictureCarouselProps) {

    const [direction, setDirection] = useState(0);

    function handleLeftClick() {
        setDirection(-1);
        props.handleLeftClick();
        props.incrementCounter();
    }
    function handleRightClick() {
        setDirection(1);
        props.handleRightClick();
        props.incrementCounter();
    }

    const imageVariants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: {
            zIndex: 0,
            opacity: 1,
            delay: 1,
        }
    };

	return (
		<div className='flex flex-col justify-center w-full -mt-12'>
            {/* preload images using nextjs Head */}
            {
                BIO_SECTION_CONTENT.map((content) => (
                    (
                        <Head>
                            <link
                                rel="preload"
                                href={content.img}
                                as="image"
                            />
                        </Head>
                    )
                ))
            }
            <div className='relative ml-32 w-[24rem]'>
                <CarouselButton direction={-1} selected={props.selected} handler={handleLeftClick}/>
                {/* <BioPicture src='/assets/images/2.0/surfing.jpg/'/> */}
                <div className='h-[35rem] w-[24rem] relative overflow-hidden rounded-xl'>
                    {/* <img className='absolute inset-0 w-full h-full object-cover' src={`${BIO_SECTION_CONTENT[props.selected].img}`} alt='sush'/> */}
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            className='absolute inset-0 w-full h-full object-cover select-none'
                            key={props.counter}
                            src={BIO_SECTION_CONTENT[props.selected].img}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            custom={direction}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            />
                    </AnimatePresence>
                </div>
                <CarouselButton direction={1} selected={props.selected} handler={handleRightClick}/>
                <CarouselIndicator num={BIO_SECTION_CONTENT.length} selected={props.selected} icon={BIO_SECTION_CONTENT[props.selected].icon ?? ''}/>
            </div>
        </div>
	);
}

interface CarouselButtonProps {
    direction: number,
    selected: number,
    handler: () => void,
};
function CarouselButton(props: CarouselButtonProps) {
    const spring = {
        x: {
            type: "spring",
            damping: 20,
            stiffness: 500
        },
    };
    const buttonVariants: Variants = {
        initial: {
            backgroundColor: "#FFFFFF", // White background on hover
        },
        hoverLeft: {
            x: "-5px", // Move arrow 5 pixels to the left
            backgroundColor: BIO_SECTION_CONTENT[props.selected].secondaryColor,
        },
        activeLeft: {
            backgroundColor: BIO_SECTION_CONTENT[props.selected].color, // Darker background on active (click)
            x: "-2px",
            y: "1px",
        },
        hoverRight: {
            x: "5px", // Move arrow 5 pixels to the left
            backgroundColor: BIO_SECTION_CONTENT[props.selected].secondaryColor,
        },
        activeRight: {
            backgroundColor: BIO_SECTION_CONTENT[props.selected].color, // Darker background on active (click)
            x: "2px",
            y: "1px",
        }
    };
    
    const arrowVariants: Variants = {
        initial: {
            stroke: "#111", // Black arrow on hover
        },
        hoverLeft: {
            stroke: "#111", // Black arrow on hover
            x: "-1.5px",
        },
        activeLeft: {
            stroke: "#FFFFFF", // Black arrow on hover
            x: "-1.5px",
        },
        hoverRight: {
            stroke: "#111", // Black arrow on hover
            x: "1.5px",
        },
        activeRight: {
            stroke: "#FFFFFF", // Black arrow on hover
            x: "1.5px",
        },
    };

    const iconVariants = {
        initial: {
            opacity: 0,
        },
        hoverLeft: {
            opacity: 1,
            x: "-3rem", // Move arrow 5 pixels to the left
        },
        activeLeft: {
            x: "0",
        },
        hoverRight: {
            opacity: 1,
            x: "3rem", // Move arrow 5 pixels to the left
        },
        activeRight: {
            x: "0",
        }
    };

    const icon = props.direction > 0 ? BIO_SECTION_CONTENT[(props.selected + 1) % BIO_SECTION_CONTENT.length].icon : (BIO_SECTION_CONTENT[(props.selected - 1 + BIO_SECTION_CONTENT.length) % BIO_SECTION_CONTENT.length].icon);

    return (
        <motion.div className={`absolute z-10 top-[14rem] ${props.direction > 0 ? '-right-16' : '-left-16'}`}
            whileHover={props.direction > 0 ? "hoverRight" : "hoverLeft"}
            whileTap={props.direction > 0 ? "activeRight" : "activeLeft"}
            initial="initial"
            transition={spring}
        >
            <motion.button
                onClick={props.handler}
                whileHover={props.direction > 0 ? "hoverRight" : "hoverLeft"}
                whileTap={props.direction > 0 ? "activeRight" : "activeLeft"}
                initial="initial"
                className='relative p-2 rounded-lg'
                variants={buttonVariants}
                >
                <motion.svg variants={arrowVariants} xmlns="http://www.w3.org/2000/svg" width="28" height="97" viewBox="0 0 28 97" fill="none">
                    {props.direction > 0 ? <path d="M2 96L25 48.5L2 0.999996" stroke-width="4"/> : <path d="M26 1L3 48.5L26 96" stroke-width="4"/>}
                </motion.svg>
            </motion.button>
            <motion.div 
                className={`-z-20 absolute top-[32%] ${props.direction > 0 ? 'left-1/4' : 'right-1/4'}`}
                variants={iconVariants}
            >
                <i className={`text-3xl ${icon}`}/>
            </motion.div>
        </motion.div>
    );
}

interface CarouselIndicatorProps {
    num: number,
    selected: number,
    icon: string,
}
function CarouselIndicator(props: CarouselIndicatorProps) {
    const draw: Variants = {
        initial: {
            fill: "#FFFFFF", // Black arrow on hover
        },
        selected: {
            fill: BIO_SECTION_CONTENT[props.selected].color,
            translateY: '-3px'
        },
    };
    const spring = {
        translateY: {
            type: "spring",
            damping: 10,
            stiffness: 500
        }
    }
    return (
        <div className='left-1/2 absolute transform -translate-x-1/2 bottom-4 z-20'>
            <div className='flex flex-row space-x-4 '>
                {Array.from({ length: props.num }).map((_, i) => (
                        <motion.svg
                            initial='initial'
                            transition={spring}
                            animate={props.selected % props.num === i ? 'selected' : 'initial'}
                            key={i}
                            width="0.6rem"
                            height="1rem"
                        >
                            <motion.circle
                                cx="0.3rem"
                                cy="0.5rem"
                                r="0.3rem"
                                transition={spring}
                                variants={draw}
                            />
                        </motion.svg>
                    ))}
            </div>
        </div>
    );
}