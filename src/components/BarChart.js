import { Bar } from "react-chartjs-2";
import   'chart.js/auto'; // ADD THIS

const BarChart = () => {
    
    

    const dataBar = {
        labels: ["A", "B", "C", "D"],
        datasets: [
          {
            label: "Causes",
            backgroundColor: ["#92F966", "#D1FFBD", "#EDFF79", "#F6FFBE"],
            borderColor: ["#92F966", "#D1FFBD", "#EDFF79", "#F6FFBE"],
            borderWidth: 1,
            hoverBackgroundColor: ["#92F966", "#D1FFBD", "#EDFF79", "#F6FFBE"],
            hoverBorderColor: ["#92F966", "#D1FFBD", "#EDFF79", "#F6FFBE"],
            data: [13,6,4,2]
          }
        ]
      };

      const options = {
        plugins: {
          datalabels: {
            display: true,
            color: "black",
            formatter: Math.round,
            anchor: "end",
            offset: -20,
            align: "start"
          }
        },
        legend: {
          display: false
        },
        scales:{
               // to remove the y-axis labels
            y: {
                ticks: {
                display: false,
                beginAtZero: true,
                },
                // to remove the y-axis grid
                grid: {
                drawBorder: false,
                display: false,
                },
            },
                // to remove the labels
            x: {
               
        
                // to remove the x-axis grid
                grid: {
                drawBorder: false,
                display: false,
                },
            },
        }
      };
  

    return(
      <>
        <Bar data={dataBar}  options={options} width={600} height={140} />
      </>
    )
}

export default BarChart;