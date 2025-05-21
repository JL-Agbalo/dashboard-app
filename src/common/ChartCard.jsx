import React from 'react'

function ChartCard({ title, children }) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm p-6 h-full shadow-lg shadow-gray-200">
      <h3 className="text-lg font-medium text-gray-700 mb-4">{title}</h3>
      <div className="h-[350px]">
        {children}
      </div>
    </div>
  )
}

export default ChartCard