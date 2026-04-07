'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { BannerItem, GRADIENT_COLORS } from '@/app/constants';

// ─── Easy-adjust constants ────────────────────────────────────────────────────
const DEFAULT_TILT  = -3;  // degrees — negative = left side up, positive = left side down
const BAND_HEIGHT   = 130;  // px — thickness of the stripe
const BAND_WIDTH_VW = 150;  // vw — wider than 100vw so rotation never exposes background at corners

// Gradient stop positions — one % per color in GRADIENT_COLORS
const GRADIENT_STOPS = [20, 80, 100]; // %
// ─────────────────────────────────────────────────────────────────────────────

const REPEAT_COUNT = 12;

interface ScrollBannerProps {
    items: BannerItem[];
    backgroundColor?: string;
    gradient?: boolean;  // true = use GRADIENT_COLORS, false = use backgroundColor
    speed?: number;      // px of x-movement per px of scroll
    direction?: 1 | -1; // 1 = moves left on scroll-down, -1 = moves right
    tilt?: number;       // degrees of rotation, positive = clockwise
    gradientStops?: number[]; // % positions for each color in GRADIENT_COLORS, only used if gradient=true
}

export default function ScrollBanner({
    items,
    backgroundColor = '#0024d7',
    gradient = true,
    speed = 5,
    direction = 1,
    tilt = DEFAULT_TILT,
    gradientStops = GRADIENT_STOPS,
}: ScrollBannerProps) {
    const background = gradient
        ? `linear-gradient(to right, ${GRADIENT_COLORS.map((c, i) => `${c} ${gradientStops[i]}%`).join(', ')})`
        : backgroundColor;
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, (v) => -v * speed * direction);
    const springX = useSpring(x, { stiffness: 100, damping: 15, mass: 0.1 });

    const repeated = Array(REPEAT_COUNT).fill(items).flat() as BannerItem[];

    return (
        // The rotated div IS the banner — its diagonal shape is the visual.
        // overflow-hidden clips the scrolling content to the rotated frame.
        // my-32 creates breathing room for the diagonal corners that extend past the layout box.
        <div
            className="flex items-center my-32 overflow-hidden"
            style={{
                background,
                transform: `rotate(${tilt}deg)`,
                width: `${BAND_WIDTH_VW}vw`,
                marginLeft: `-${(BAND_WIDTH_VW - 100) / 2}vw`,
                height: `${BAND_HEIGHT}px`,
            }}
        >
            <motion.div className="flex items-center flex-nowrap h-full" style={{ x: springX }}>
                {repeated.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <span key={i} className="flex items-center flex-nowrap gap-2 px-2">
                            <span className="font-light text-white whitespace-nowrap text-6xl leading-none italic font-sans uppercase font-bold select-none">
                                {item.label}
                            </span>
                            <Icon size={30} className="mx-10 text-white flex-shrink-0" />
                        </span>
                    );
                })}
            </motion.div>
        </div>
    );
}
