
import React,{Component} from 'react'
import './index.scss'
class CommitBook extends Component{
    state={}
    render(){
        //console.log(this.props.Detail,"props")
        if(this.props.Detail.length>0){
            var res = this.props.Detail[0]
            console.log(res)
            return (<div className="w-book">
               <dl>
                <dt><img src={res.servicePriceImg} alt=""/></dt>
                <dd><h2>{res.servicePriceName}</h2>
                <p>{res.servicePriceTxt}</p>
                <div>
                    <span>价格:{res.servicePrice}</span>
                    <span>支付宝付款</span>
                </div>
                
                
                </dd>  
                </dl> 
             
             
            </div>)
        }else{
            return (
                <div>222</div>
            )
        }
       
    }
   
}
export default CommitBook; 
