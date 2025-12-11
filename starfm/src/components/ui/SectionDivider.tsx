interface SectionDividerProps {
    fillColor?: string
    className?: string
    flip?: boolean
}

export function SectionDivider({
    fillColor = "fill-background",
    className = "",
    flip = false
}: SectionDividerProps) {
    return (
        <div
            className={`relative w-full overflow-hidden pointer-events-none ${flip ? 'rotate-180' : ''} ${className}`}
            style={{ marginTop: '-1px', marginBottom: '-1px' }}
        >
            <svg
                className="relative block w-full h-[60px] sm:h-[80px] lg:h-[100px]"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Main Wave */}
                <path
                    d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
                    className={fillColor}
                />
                {/* Secondary subtle wave for depth */}
                <path
                    d="M0,60 C360,20 720,80 1080,40 C1260,20 1380,50 1440,45 L1440,100 L0,100 Z"
                    className={fillColor}
                    style={{ opacity: 0.7 }}
                />
            </svg>
        </div>
    )
}

// Alternative: Curved divider that overlays sections
export function CurvedDivider({
    fillColor = "fill-brand-deep",
    className = ""
}: SectionDividerProps) {
    return (
        <div
            className={`relative w-full overflow-hidden pointer-events-none z-10 -my-1 ${className}`}
        >
            <svg
                className="relative block w-full h-[40px] sm:h-[60px] lg:h-[80px]"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse
                    cx="720"
                    cy="80"
                    rx="900"
                    ry="80"
                    className={fillColor}
                />
            </svg>
        </div>
    )
}

// Slant divider
export function SlantDivider({
    fillColor = "fill-brand-deep",
    className = "",
    flip = false
}: SectionDividerProps) {
    return (
        <div
            className={`relative w-full overflow-hidden pointer-events-none z-10 ${flip ? 'rotate-180' : ''} ${className}`}
            style={{ marginTop: '-1px' }}
        >
            <svg
                className="relative block w-full h-[50px] sm:h-[70px] lg:h-[100px]"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon
                    points="0,100 1440,0 1440,100"
                    className={fillColor}
                />
            </svg>
        </div>
    )
}
