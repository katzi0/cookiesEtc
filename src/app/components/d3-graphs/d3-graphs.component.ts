import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DeveloperService} from '../../services/developer.service';
import {Observable} from 'rxjs/Observable';
import {Developer} from '../../models/developr.model';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import 'd3-transition';

export interface Stock {
  date: Date;
  value: number;
}

export interface ModifiedCookie {
  name: string;
  modifyCounter: number;
}

@Component({
  selector: 'd3-graphs',
  templateUrl: './d3-graphs.component.html',
  styleUrls: ['./d3-graphs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class D3GraphsComponent implements OnInit {

  developers$: Observable<Developer[]>;
  coordinates$: Observable<ModifiedCookie[]>;
  coordinates: ModifiedCookie[] = [];
  private margin = {top: 50, right: 10, bottom: 50, left: 10};
  private width = 400 - this.margin.left - this.margin.right;
  private height = 600 - this.margin.top - this.margin.bottom;
  private x: any;
  private y: any;
  private svg: any;

  constructor(private developerService: DeveloperService) {
    this.width = 300 - this.margin.left - this.margin.right;
    this.height = 300 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initSvg();
    this.getCoordinates();
  }

  getCoordinates() {
    this.coordinates$ = this.developerService.getDevelopersDashboard()
      .map(developers => developers.map(developer => {
        return <ModifiedCookie> {name: developer.name, modifyCounter: developer.modifiedCounter};
      }));
    this.coordinates$.subscribe(x => {
      this.coordinates = x, this.drawBarChart();
    });
  }

  private initSvg() {
    this.svg = d3.select('.chart')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');
  }

  private drawBarChart() {
    const that = this;
    const yScale = d3Scale.scaleLinear()
      .domain([0, 100])
      .range([this.height, 0]);

    const xScale = d3Scale.scaleBand()
      .padding(0.2)
      .domain(this.coordinates.map(d => d.name))
      .range([0, this.width]);

    const xAxis = d3Axis.axisBottom(xScale)
      .ticks(5)
      .tickSize(10)
      .tickPadding(5);

    this.svg
      .append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-45)');

    this.svg.selectAll('rect')

      .data(this.coordinates)
      .enter()
      .append('rect')
      .on('mouseover', function (d, i, elements) {
        d3.select(this)
          .call(that.setFill, 'orange')
        d3.selectAll(elements)
          .filter(':not(:hover)')
          .call(that.setOpacity, 0.5)
      })
      .on('mouseout', function (d, i, elements) {
        d3.selectAll(elements)
          .call(that.setOpacity, 1);

        d3.selectAll(elements)
          .call(that.setFill, 'steelblue');
      })
      .attr('x', d => xScale(d.name))
      .attr('y', yScale(0))
      .attr('y', d => yScale(d.modifyCounter))
      .attr('width', d => xScale.bandwidth())
      .attr('height', d => this.height - yScale(d.modifyCounter))
      // .call(that.setFill, 'steelblue');
  }

  setOpacity(selection, opacityValue) {
    selection.style('fill-opacity', opacityValue);
  }

  setFill(selection, color) {
    selection.style('fill', color);
  }
}
