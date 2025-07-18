import Logo from '@/components/template/Logo'
import VerticalMenuContent from '@/components/template/VerticalMenuContent'
import { useThemeStore } from '@/store/themeStore'
import { Link } from 'react-router'

const SideNav = ({ mode }) => {
    const defaultMode = useThemeStore((state) => state.mode)
    const sideNavCollapse = useThemeStore((state) => state.layout.sideNavCollapse)

    return (
        <div className={`h-full flex flex-col transition-all duration-300 ${sideNavCollapse ? 'w-20' : 'w-64'} bg-white border-r`}>
            <Link to="/" className="p-4 flex items-center gap-2 bg-gray-900">
                <Logo
                    className="w-auto h-8"
                    imgClass="h-8"
                />
                {!sideNavCollapse && (
                    <span className="text-white text-lg font-semibold">XpertAds</span>
                )}
            </Link>
            <div className="flex-1 overflow-hidden">
                <VerticalMenuContent collapsed={sideNavCollapse} />
            </div>
        </div>
    )
}

export default SideNav
