const chartData = {
  labels: ["BitCoin", "Ethereum", "Dash"],
  data: [64, 18, 18]
}

const doughnutChart = document.getElementById('myChart');
  new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Language Popularity",
          data: chartData.data
        }
      ] 
    },
    options: {
      borderWidth: false,
      hoverBorderWidth: 2,
      backgroundColor: ["#010155", "#642999", "#912491"],
      rotation: 200,
      cutout: 55,
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });

  const lineChart = document.getElementById('lineChart');
  new Chart(lineChart, {
    type: "line",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Language Popularity",
          data: chartData.data
        }
      ] 
    },
    options: {
      borderWidth: false,
      hoverBorderWidth: 2,
      borderWidth: 1,
      borderColor: "grey",
      pointBorderColor: "white",
      pointRadius: 5,
      backgroundColor: ["#010155", "#642999", "#912491"],
      rotation: 200,
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });

  let ul = document.querySelector('.card ul')

  function balancePercent() {
    chartData.labels.forEach((el, i) => {
      let li = document.createElement('li');
      li.innerHTML = `${el}: <span>${chartData.data[i]}%</span>`;
      ul.appendChild(li)
    })
  }

  balancePercent();