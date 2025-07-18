'use client'

import { APP_NAME } from '@/constants/app.constant'
import clsx from 'clsx'

const Logo = ({ className = '', imgClass = 'w-10 h-10' }) => {
    return (
        <div className={clsx("bg-black rounded flex items-center justify-center", className)}>
            <img
                className={clsx("block object-contain", imgClass)}
                src="/img/logo/xlogo.webp"
                alt={`${APP_NAME} logo`}
            />
        </div>
    )
}

export default Logo
