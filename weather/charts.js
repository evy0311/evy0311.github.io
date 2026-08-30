function createGauge(selector, options) {
  const defaults = {
    chart: {
      height: 350,
      type: 'gauge',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '70%',
        },
        dataLabels: {
          name: {
            show: true,
            offsetY: -20,
            fontSize: '16px',
            color: '#999',
          },
          value: {
            show: true,
            fontSize: '40px',
            fontWeight: 700,
            offsetY: 6,
            formatter: function (val) {
              return val + options.unit
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
  };

  return new ApexCharts(
    document.querySelector(selector),
    { ...defaults, series: [options.value], labels: [options.label] }
  );
}

var temperatureGauge = createGauge('#temperatureGauge', {
  value: 88,
  label: 'Temperature',
  unit: '°F',
})
temperatureGauge.render()

var humidtyGauge = createGauge('#humidtyGauge', {
  value: 55,
  label: 'Humidity',
  unit: '%',
})
humidtyGauge.render()

var pressureGauge = createGauge('#pressureGauge', {
  value: 30.14,
  label: 'Pressure',
  unit: ' inHg',
})
pressureGauge.render()

var windGauge = createGauge('#windGauge', {
  value: 2,
  label: 'Wind',
  unit: ' mph',
})
windGauge.render()
