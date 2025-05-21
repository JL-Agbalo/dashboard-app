import React from 'react'
import UserBarChart from '../common/user/UserBarChart'
import UserLineChart from '../common/user/UserLineChart'
import ChartCard from '../common/ChartCard'

function UserStats() {
  return (
    <div className="w-full min-h-screen px-8 py-10 bg-white">
      <h2 className="text-2xl font-medium mb-8 text-gray-800">
        User Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ChartCard title="Monthly User Growth">
          <UserLineChart />
        </ChartCard>
        <ChartCard title="User Acquisition By Month">
          <UserBarChart />
        </ChartCard>
      </div>
    </div>
  )
}

export default UserStats