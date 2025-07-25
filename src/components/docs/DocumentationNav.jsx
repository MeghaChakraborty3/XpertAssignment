import { useState } from 'react'
import Drawer from '@/components/ui/Drawer'
import Button from '@/components/ui/Button'
import NavToggle from '@/components/shared/NavToggle'
import { NavLink } from 'react-router'

const NavContent = ({ onLinkClick, routes, basePath = '' }) => {
    const activeClass = 'text-primary hover:text-primary'

    return (
        <>
            {routes.map((group) => (
                <div key={group.groupName} className="mb-6">
                    <div className="mb-4 heading-text font-bold">
                        {group.groupName}
                    </div>
                    <div className="ltr:border-l rtl:border-r border-gray-200 dark:border-gray-600">
                        {group.nav.map((menu) => (
                            <NavLink
                                key={menu.label}
                                className={({ isActive }) =>
                                    `cursor-pointer font-semibold ltr:border-l rtl:border-r px-4 h-6 mb-4 flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 ltr:-ml-px rtl:-mr-px ${
                                        isActive
                                            ? activeClass
                                            : 'border-transparent'
                                    }`
                                }
                                to={`${basePath}${menu.path}`}
                                onClick={onLinkClick}
                            >
                                <span>{menu.label}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

const MobileNav = ({ routes, basePath }) => {
    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                className="lg:hidden"
                shape="circle"
                variant="plain"
                icon={<NavToggle className="text-2xl" toggled={isOpen} />}
                onClick={openDrawer}
            />
            <Drawer
                title="Navigation"
                isOpen={isOpen}
                width={300}
                placement="left"
                onClose={onDrawerClose}
                onRequestClose={onDrawerClose}
            >
                <NavContent
                    basePath={basePath}
                    routes={routes}
                    onLinkClick={onDrawerClose}
                />
            </Drawer>
        </>
    )
}

const DocumentationNav = ({ routes, basePath }) => {
    return (
        <div className="flex flex-col">
            <div className="hidden lg:block">
                <NavContent routes={routes} basePath={basePath} />
            </div>
            <MobileNav basePath={basePath} routes={routes} />
        </div>
    )
}

export default DocumentationNav
