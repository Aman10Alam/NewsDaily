import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, setotalResults] = useState(0)

  // static defaultProps ={
  //   country: 'in',
  //   pagesize: 5,
  //   category: 'general',
  // }
  // static propTypes={
  //   country: PropTypes.string,
  //   pagesize: PropTypes.number,
  //   category: PropTypes.string,
  // }
  const capitalizerFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  //WORKS ONLY IN CLASS BASED COMPONENT
  // constructor(props){
  //   super(props);
  //   this.state={
  //        articles: [],
  //        page:1,
  //        loading:false,
  //        totalResults:0,
  //   }
  //   document.title=`${this.capitalizerFisrtLetter(props.category)}-News_Daily`;
  // }

  
  const updateNews= async () =>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setloading(true);
    let data= await fetch(url);
    props.setProgress(30);
    let parsedData=await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setarticles(parsedData.articles);
    setotalResults(parsedData.totalResults)

     //CLASS BASED
    // setloading(false)
    // this.setState({articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })


    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizerFirstLetter(props.category)} - News_Daily`;
     updateNews();
  },[])


  //CLASS BASED
  // async componentDidMount(){
  //   this.updateNews()
  // }
  
  // handlePrevClick =async ()=>{
  //      console.log("Previous");
  //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page-1}&pageSize=${props.pagesize}`;
  //     this.setState({loading:true});
  //     let data= await fetch(url);
  //     let parsedData=await data.json();
  //     console.log(parsedData);
  //      this.setState({
  //        page: this.state.page-1,
  //        articles: parsedData.articles,
  //        loading: false,
         
  //      })
  //     //  this.setState({page: this.state.page-1});
  //     //  this.updateNews();

  // }
  
  // handleNextClick = async ()=>{
  //      console.log("Next");
  //         let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page+1}&pageSize=${props.pagesize}`;
  //         this.setState({loading:true});
  //         let data= await fetch(url);
  //         let parsedData=await data.json();
  //         console.log(parsedData);
  //         this.setState({
  //           page: this.state.page+1,
  //           articles: parsedData.articles,
  //           loading: false,

  //         })
  //         // this.setState({page: this.state.page+1});
  //         // this.updateNews();
      
  // }

  const fetchMoreData = async ()=>{
      // this.setState({
      //   page: this.state.page+1,
      // })

      setpage(page+1);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pagesize}`;
      setloading(true); 
      let data= await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      setarticles(articles.concat(parsedData.articles));
      setotalResults(parsedData.totalResults)
      setloading(false);



      // this.setState({
      //   articles: this.state.articles.concat(parsedData.articles),
      //   totalResults: parsedData.totalResults,
      //   loading: false
      // })
  }

    return (
      <>
      <h1 className="text-center " style={{marginLeft:'-5%', marginTop:'80px'}}>News_Daily - Top {capitalizerFirstLetter(props.category)} Headlines</h1>
      <div className="container my-3" style={{width:'100%',padding:'0px'}} >
          {/* {loading && <Spinner/>} */}

          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner/>}
          >
          <div className="container">
          <div className="row" style={{marginRight:'-20%'}}>
          {(articles) && articles.map((element)=>{
                return <div className="col-md-3 mr-5" key={element.url}>
                <NewsItem  title={element.title} description={(element.description)?element.description.slice(0,80)+"..":element.discription} imageurl={element.urlToImage} 
                newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
          })}    
          </div>
          </div>
          </InfiniteScroll>

          {/* <div class="container d-flex justify-content-between">
             <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
             <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)}type="button" class="btn btn-dark"  onClick={this.handleNextClick}>Next&rarr;</button>
          </div> */}
      </div>
      </>
    )

}

//In function based components proptypes comes at last
News.defaultProps ={
  country: 'in',
  pagesize: 5,
  category: 'general',
}
News.propTypes={
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}
export default News