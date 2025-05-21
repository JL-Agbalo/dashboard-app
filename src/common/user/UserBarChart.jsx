import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const UserBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    chart.setOption({
      title: { text: 'User Bar Chart' },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      },
      yAxis: { type: 'value' },
      series: [
        {
          data: [150, 230, 224, 218, 135],
          type: 'bar',
        },
      ],
    });

    window.addEventListener('resize', chart.resize);
    return () => {
      window.removeEventListener('resize', chart.resize);
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} className="h-full w-full" />;
};

export default UserBarChart;
