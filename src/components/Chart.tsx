// Import required libraries
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  // Define data and options for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Data',
        data: [700, 950, 850, 600, 1050, 800, 750, 500, 850, 900, 1000, 700], // Your data here
        backgroundColor: 'rgba(91, 77, 255, 0.8)', // Set the color similar to the chart image
        borderColor: 'rgba(91, 77, 255, 1)', // Optional border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend if not needed
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div style={{ width: '800px', height: '600px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
