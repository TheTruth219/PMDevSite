import React,{Component} from 'react'
import {window} from 'browser-monads'
import Highcharts from 'highcharts';
import addSankeyModule from 'highcharts/modules/sankey';
import addDependencyWheelModule from 'highcharts/modules/dependency-wheel';
import {HighchartsChart, XAxis, YAxis, DependencyWheelSeries, Tooltip,withHighcharts} from 'react-jsx-highcharts';



  class DependencyWheel extends Component  {
        
      componentDidMount(){
             
          this.formattedData = Object.keys(this.props.data).reduce((arr, from) => {
            const weights = this.props.data[from];
            return arr.concat(Object.keys(weights).map(to => [from, to, weights[to]]));
          }, []);
            if(window !==`undefined`){
              addSankeyModule(Highcharts);
              addDependencyWheelModule(Highcharts);
              this.DependencyChart = 
           
              <HighchartsChart>                
                  <XAxis type="category" />     
                  <YAxis>
                      <DependencyWheelSeries name="Dependency Wheel demo series" colors={this.props.colors} data={this.formattedData} keys={['from', 'to', 'weight']} />
                  </YAxis>         
                  <Tooltip enabled={false}/>
              </HighchartsChart>
        }
    }
      render(){
    return (
        <>
             {this.DependencyChart}
        </>
    );
  }
}
  export default withHighcharts(DependencyWheel,Highcharts);