import React,{Component} from "react";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux"
import {pageData} from "../../api_helper/slice/homeSlice";
import poster1 from "../../Images/poster1.jpg"
import poster2 from "../../Images/poster2.jpg"
import poster3 from "../../Images/poster3.jpg"
import poster4 from "../../Images/poster4.jpg"
import poster5 from "../../Images/poster5.jpg"
import poster6 from "../../Images/poster6.jpg"
import poster7 from "../../Images/poster7.jpg"
import poster8 from "../../Images/poster8.jpg"
import poster9 from "../../Images/poster9.jpg"
import poster10 from "../../Images/posterthatismissing.png";
import Back from  "../../Images/Back.png";
import Search from "../../Images/search.png";

import InfiniteScroll from "react-infinite-scroll-component";
import "./index.css"


class Home extends Component {
    constructor(){
        super();
        this.state ={
         Data:[],
         page:1,
         loadmore:true
        }
    }
    componentDidMount(){
        const {dispatch}=this.props;
        dispatch(pageData(1))
    }
    fetchMoreData = () => {
        const {dispatch}=this.props;
        if(this.state.page>=1){
          let pages=this.state.page +1;
          
            setTimeout(() => { dispatch(pageData(pages)) },150);
            this.setState({page:pages})
        }
      };
    componentDidUpdate(prevProps){
        let newProps =this.props;
        let datas=[]
         let propsChanged =prevProps.home.status !==newProps.home.status;
         if(newProps.home.status ==="Success" && propsChanged){
             let data=newProps.home.movies.page;
             if(data["page-num-requested"]===1){
               datas=[...datas,data]
            this.setState({
                Data:[...datas]
            })}
            else{
                this.setState({
                    Data:this.state.Data.concat(data)
                })
            }
         }
    }
    render(){
        const {dispatch}=this.props;
        return(
            <div>
            <div  className="body">
               <header className="header" >
                    <div style={{float:"left",color:"#fff",display:"flex"}}>
                       <img src={Back} style={{height:20,width:15,paddingInlineStart:10,marginTop:15}}></img>&nbsp;<p style={{marginTop:15}}>Romatic Comedy</p>
                     </div>
                    <div style={{float:"right",color:"#fff"}}><img src={Search} style={{height:20,width:"auto",paddingInlineEnd:20,marginTop:20}}/></div>
                </header>
                
            <div id="scrollableDiv" style={{height:800,overflow:"auto"}}>
            {this.state.Data.length!==0 && 
            <InfiniteScroll
            dataLength={this.state.Data.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4 style={{color:"#fff"}}>Your List is Ended</h4>}
            scrollableTarget="scrollableDiv"
          >
              
              {this.state.Data.map(j=>{
                  return( <div className="moviecard"> 
            {j["content-items"].content.map(i=>{
            return (
                <div className="card">
               {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster1" &&
                <img src={poster1} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster2" &&
                <img src={poster2} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster3" &&
                <img src={poster3} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster4" &&
                <img src={poster4} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster5" &&
                <img src={poster5} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster6" &&
                <img src={poster6} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster7" &&
                <img src={poster7} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster8" &&
                <img src={poster8} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="poster9" &&
                <img src={poster9} style={{width:100,height:100}}/>}
                 {i["poster-image"].substr(0, i["poster-image"].lastIndexOf('.'))==="posterthatismissing" &&
                <img src={poster10} style={{width:100,height:100}}/>}
                 <p style={{color:"#FFFFFFF",float:"left",fontSize:"8pt"}}>{i.name}</p>
                </div>
              
            )   
        })}
        </div>)})}
        </InfiniteScroll>}
         </div>
              </div>
              <div className="body1">
                  <p style={{textAlign:'center',margin:'auto',color:"#fff"}}>This App Only View on Mobile Version Only .Please Switch The Mobile Version</p>

              </div>
              </div>

        )
    }
}

function mapStateToProps(state){
    const {home}=state;
    return {
        home
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Home)) 