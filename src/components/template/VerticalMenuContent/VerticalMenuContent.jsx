import {
    HiHome,
    HiCog,
    HiChartBar,
    HiLocationMarker,
    HiBriefcase
} from 'react-icons/hi';

import { GoGraph } from "react-icons/go";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiTwotoneExperiment } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import clsx from 'clsx';

const staticNavigationTree = [
    {
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        icon: <HiHome />,
        type: 'item'
    },
    {
        key: 'vipbags',
        title: 'VIP Bags',
        icon: <HiBriefcase />,
        type: 'collapse',
        subMenu: []
    },
    {
        key: 'insights',
        title: 'Insights',
        icon: <HiChartBar />,
        type: 'collapse',
        subMenu: [
            {
                key: 'locations',
                path: '/locations',
                title: 'Locations',
                icon: <HiLocationMarker />,
                type: 'item'
            },
            {
                key: 'interest',
                path: '/interest',
                title: 'Interest',
                icon: <FaShoppingCart />,
                type: 'item'
            }
        ]
    },
    {
        key: 'retention',
        path: '/retention',
        title: 'Retention',
        icon: <HiChartBar />,
        type: 'item'
    },
    {
        key: 'experiments',
        path: '/experiments',
        title: 'Experiments',
        icon: <AiTwotoneExperiment />,
        type: 'item'
    },
    {
        key: 'performance',
        path: '/performance',
        title: 'Performance',
        icon: <GoGraph />,
        type: 'item'
    },
    {
        key: 'billing',
        path: '/billing',
        title: 'Billing',
        icon: <LiaRupeeSignSolid />,
        type: 'item'
    },
    {
        key: 'settings',
        title: 'Settings',
        icon: <HiCog />,
        type: 'collapse',
        subMenu: []
    }
];

const VerticalMenuContent = ({ collapsed, currentPath }) => {
    return (
        <div className="flex flex-col h-full pt-4 text-sm text-gray-100 font-medium bg-gray-900">
            <div className="flex-1 overflow-y-auto space-y-1 pb-50">
                {staticNavigationTree.map((item) => {
                    const isSubmenuActive = item.subMenu?.some((sub) => sub.path === currentPath);
                    const isDirectActive = item.path ? item.path === currentPath : false;
                    const shouldHighlight = isDirectActive || isSubmenuActive;

                    return (
                        <div key={item.key} className="space-y-1">
                            <div
                                className={clsx(
                                    'flex items-center cursor-pointer px-4 py-2 rounded-md transition-colors duration-150',
                                    collapsed ? 'justify-center' : 'gap-3',
                                    shouldHighlight ? 'bg-gray-700 text-white' : 'text-white'
                                )}
                            >
                                {item.icon && <span className="text-xl">{item.icon}</span>}
                                {!collapsed && <span>{item.title}</span>}
                            </div>

                            {!collapsed &&
                                item.subMenu?.length > 0 &&
                                item.subMenu.map((sub) => {
                                    const isSubActive = sub.path === currentPath;
                                    return (
                                        <div
                                            key={sub.key}
                                            className={clsx(
                                                'flex items-center gap-3 px-8 py-2 text-sm',
                                                isSubActive ? 'bg-gray-700 text-white' : 'text-gray-300'
                                            )}
                                        >
                                            {sub.icon && <span className="text-base">{sub.icon}</span>}
                                            <span>{sub.title}</span>
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}


            </div>
        </div>
    );
};

export default VerticalMenuContent;
