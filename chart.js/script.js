const labelsHora = [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
];

const dataHora = {
    labels: labelsHora,
    datasets: [
        {
            label: 'Temperatura',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 29, 28, 25, 22, 23],
        },
        {
            label: 'Umidade',
            backgroundColor: 'rgb(0, 0, 255)',
            borderColor: 'rgb(0, 0, 255)',
            data: [80, 82, 80, 85, 80, 83],
        }
    ]
};

const labelsMes = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
];

const dataMes = {
    labels: labelsMes,
    datasets: [
        {
            label: 'Temperatura',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [22,24,27,23,20,18],
        },
        {
            label: 'Umidade',
            backgroundColor: 'rgb(0, 0, 255)',
            borderColor: 'rgb(0, 0, 255)',
            data: [90,89,93,87,88,82],
        }
    ]
};

const configLinha = {
    type: 'line',
    data: dataHora,
    options: {}
};

const configBar = {
    type: 'bar',
    data: dataMes,
    options: {}
};

const myChart = new Chart(
    document.getElementById('Linha'),
    configLinha
);

const myChart2 = new Chart(
    document.getElementById('Bar'),
    configBar
);