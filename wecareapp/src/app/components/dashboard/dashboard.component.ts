import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    barChartData: ChartDataset<"bar",(number|[number,number]|null)[]>[]|undefined;
    pieChartData: ChartDataset<"pie",number[]>[]|undefined;
    barLabels: string[] = [];
    pieLabels: string[] = [];

  constructor() { }

  ngOnInit() {
    const barData = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
        label: 'Reservations per Day',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(68, 97, 155, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
    };

    const pieData = {
    labels: ['Users', 'Doctors'],
    datasets: [{
        label: 'Users VS Doctors',
        data: [65, 59],
        backgroundColor: [
        'rgba(255, 162, 0, 0.2)',
        'rgba(0, 149, 255, 0.2)'
        ],
        borderColor: [
        '#ffac63',
        'rgb(34, 133, 255)',
        ],
        borderWidth: 1
    },]
    };

    this.barChartData = barData.datasets;
    this.barLabels = barData.labels;
    this.pieChartData = pieData.datasets
    this.pieLabels = pieData.labels
  }

}
