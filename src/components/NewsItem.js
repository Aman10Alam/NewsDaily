import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className="my-4" >
        <div className="card" style={{width : '20rem'}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white" style={{right:'0%'}}>
            {source}
          </span>
        <img src={imageurl?imageurl:"https://manavrachna.edu.in/wp-content/uploads/2022/05/img.png"} 
        className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>{author?"By "+author+" on":"On"} {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} target="_blank" className="btn btn-sm btn-outline-danger">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem