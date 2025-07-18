import React, { useState } from 'react'
import mockData from '@/mock/data/customerLocationData'
import { FaStar } from 'react-icons/fa'
import classNames from 'classnames'

const CustomerLocation = () => {
    const [search, setSearch] = useState('')
    const [entries, setEntries] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const filteredData = mockData.filter(item =>
        item.district.toLowerCase().includes(search.toLowerCase())
    )

    const startIndex = (currentPage - 1) * entries
    const paginatedData = filteredData.slice(startIndex, startIndex + entries)
    const pageCount = Math.ceil(filteredData.length / entries)

    return (
        <div className="p-6">
            <h1 className="text-[26px] font-semibold text-gray-800 mb-1">Where are your customers located ?</h1>
            <p className="text-gray-400 text-sm mb-6">
                Here’s the consumer location intel we've discovered through our network data!
            </p>

            <div className="mb-4">
                <button className="bg-[#020617] text-white text-sm px-4 py-1.5 rounded-md">Tier 1</button>
            </div>

            <div className="flex justify-between items-center mb-4">
                <div className="text-sm">
                    <label className="mr-2">Show</label>
                    <select
                        value={entries}
                        onChange={(e) => setEntries(Number(e.target.value))}
                        className="border rounded px-2 py-1 text-sm"
                    >
                        {[10, 25, 50].map(n => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                    <span className="ml-2">entries</span>
                </div>
                <input
                    type="text"
                    placeholder="Search by district"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded px-3 py-1 text-sm w-48"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto text-sm border-collapse">
                    <thead>
                        <tr className="bg-[#020617] text-white text-left">
                            {['Rank', 'District', 'Potential', 'Store(s)', 'Buyer Share', 'Customer Share', 'Reach', 'Saturation', 'Action']
                                .map(header => (
                                    <th key={header} className="px-3 py-2">{header}</th>
                                ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {paginatedData.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-3 py-2">{item.rank}</td>
                                <td className="px-3 py-2">
                                    {item.district}
                                    {item.benchmark && (
                                        <span className="ml-2 bg-[#fff1f2] text-[#ec4899] px-2 py-0.5 rounded-full text-xs border border-[#fecdd3]">
                                            Benchmark
                                        </span>
                                    )}
                                </td>
                                <td className="px-3 py-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={classNames('inline mr-0.5', {
                                                'text-black': i < item.potential,
                                                'text-gray-300': i >= item.potential
                                            })}
                                        />
                                    ))}
                                </td>
                                <td className="px-3 py-2">{item.stores}</td>
                                <td className="px-3 py-2">{item.buyerShare}</td>
                                <td className="px-3 py-2">{item.customerShare}</td>
                                <td className="px-3 py-2">{item.reach || '--'}</td>
                                <td className="px-3 py-2">{item.saturation}</td>
                                <td className="px-3 py-2">
                                    <button className="text-[#f472b6] border border-[#fbcfe8] px-3 py-1 rounded text-xs hover:bg-[#fff1f2] transition">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-between items-center text-sm">
                <span className="text-gray-500">
                    Showing {startIndex + 1} to {Math.min(startIndex + entries, filteredData.length)} of {filteredData.length} entries
                </span>
                <div className="flex gap-2">
                    {Array.from({ length: pageCount }, (_, i) => (
                        <button
                            key={i + 1}
                            className={classNames('px-3 py-1 rounded border', {
                                'bg-black text-white': currentPage === i + 1,
                                'bg-white text-black': currentPage !== i + 1
                            })}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CustomerLocation
