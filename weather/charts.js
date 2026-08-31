function createGauge(selector, options) {
  const defaults = {
    chart: {
      height: 300,
      type: 'gauge',
      parentHeightOffset: 0,
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
            offsetY: 42,
            fontSize: '14px',
            fontWeight: 600,
            color: '#64748b',
          },
          value: {
            show: true,
            fontSize: '34px',
            fontWeight: 700,
            offsetY: -6,
            formatter: function (val) {
              return val
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
        gradientToColors: [options.gradientColor],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    colors: [options.color],
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          height: 220,
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '12px',
              },
              value: {
                fontSize: '26px',
              },
            },
          },
        },
      },
    }],
  };

  return new ApexCharts(
    document.querySelector(selector),
    { ...defaults, series: [options.value], labels: [options.unit] }
  );
}

var temperatureGauge = createGauge('#temperatureGauge', {
  value: 88,
  label: 'Temperature',
  unit: '°F',
  color: '#f97316',
  gradientColor: '#facc15',
})
temperatureGauge.render()

var humidtyGauge = createGauge('#humidtyGauge', {
  value: 55,
  label: 'Humidity',
  unit: '%',
  color: '#0284c7',
  gradientColor: '#38bdf8',
})
humidtyGauge.render()

var pressureGauge = createGauge('#pressureGauge', {
  value: 30.14,
  label: 'Pressure',
  unit: 'inHg',
  color: '#7c3aed',
  gradientColor: '#a78bfa',
})
pressureGauge.render()

var windGauge = createGauge('#windGauge', {
  value: 2,
  label: 'Wind',
  unit: 'mph',
  color: '#0f766e',
  gradientColor: '#5eead4',
})
windGauge.render()
