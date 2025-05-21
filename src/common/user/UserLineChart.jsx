import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const UserLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    chart.setOption({
      title: { text: 'User Line Chart' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290],
          type: 'line',
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

export default UserLineChart;
