$(document).ready(function() {
  var ctx = $("#line-chartcanvas");

  var data = {
    labels: [
      'match1', 'match2', 'match3', 'match4', 'match5'
    ],
    datasets: [
      {
        label: 'Host score',
        data: [
          10, 50, 25, 70, 40
        ],
        backgroundColor: '#00E0C1',
        borderColor: '#006E5E',
        fill: false,
        lineTension: 0,
        pointRadius: 5
      }, {
        label: 'Away score',
        data: [
          30, 50, 95, 20, 70
        ],
        backgroundColor: '#009FE5',
        borderColor: '#005A84',
        fill: false,
        lineTension: 0,
        pointRadius: 5
      }
    ]
  };

  var options = {
    title: {
      display: true,
      position: 'top',
      text: 'Line Gragh',
      fontSize: 18,
      fontColor: '#111'
    },
    legend: {
      display: true,
      position: 'bottom'
    }
  }

  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  })
});

$(document).ready(function() {
  var ctx = $("#bar-chartcanvas");

  var data = {
    labels: [
      'match1', 'match2', 'match3', 'match4', 'match5'
    ],
    datasets: [
      {
        label: 'Host score',
        data: [
          10, 50, 25, 70, 40
        ],
        backgroundColor: '#00E0C1',
        borderColor: '#006E5E',
        fill: false,
        lineTension: 0,
        pointRadius: 5
      }, {
        label: 'Away score',
        data: [
          30, 50, 95, 20, 70
        ],
        backgroundColor: '#009FE5',
        borderColor: '#005A84',
        fill: false,
        lineTension: 0,
        pointRadius: 5
      }
    ]
  };

  var options = {
    title: {
      display: true,
      position: 'top',
      text: 'Line Gragh',
      fontSize: 18,
      fontColor: '#111'
    },
    legend: {
      display: true,
      position: 'bottom'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0
          }
        }
      ]
    }
  }

  var chart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
  })
});

$(document).ready(function() {
  var ctx1 = $("#pie-chartcanvas-1");
  var ctx2 = $("#pie-chartcanvas-1");

  var data1 = {
    labels: [
      'match1', 'match2', 'match3', 'match4', 'match5'
    ],
    datasets: [
      {
        label: 'Host score',
        data: [
          10, 50, 25, 70, 40
        ],
        backgroundColor: '#00E0C1',
        borderColor: '#006E5E',
        fill: false,
        lineTension: 0,
        pointRadius: 5
      }
    ]
  };

  var data2 = {
    labels: [
      'match1', 'match2', 'match3', 'match4', 'match5'
    ],
    datasets: [
      {
        label: 'Away score',
        data: [
          30, 50, 95, 20, 70
        ],
        backgroundColor: '#009FE5',
        borderColor: '#005A84',
        fill: false,
        lineTension: 0,
        pointRadius: 5
      }
    ]
  };

  var options = {
    title: {
      display: true,
      position: 'top',
      text: 'Pie Chart',
      fontSize: 18,
      fontColor: '#111'
    },
    legend: {
      display: true,
      position: 'bottom'
    }
  }

  var chart1 = new Chart(ctx1, {
    type: "pie",
    data: data1,
    options: options
  });
  var chart2 = new Chart(ctx2, {
    type: "pie",
    data: data2,
    options: options
  });
});
