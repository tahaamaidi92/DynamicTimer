import React, { Component } from 'react';
import './timer.css'
class Timer extends Component {
    state = {  }
    render() { 
        let sec=this.props.nombres;
         let h=0;
         let m=0;
         let s=0;
         let x=function(y){
             return y<10 ? '0'+ y : y;
         };
         if (sec<86400){
            h= Math.floor(sec / 3600);
            m= Math.floor((sec - (h * 3600)) / 60);
            s= Math.floor(sec - (h * 3600) - (m * 60));
         } 
        return (  
           <div className="App">
           <div className="div-g">
          <div className="div1">
           <span className="s1">{x(h)}</span>
           <span className="points">:</span>
           <span className="s1">{x(m)}</span>
           <span className="points">:</span>
           <span className="s1">{x(s)}</span>
          </div>
          <div className="div2">
          <span className='s2'>Hours</span>
           <span className='s2'>Minutes</span>
           <span className='s2'>Seconds</span>
          </div>
           </div>
           </div> 
        );
    }
}
 
export default Timer;