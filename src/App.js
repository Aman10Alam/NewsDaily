
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import {key} from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  BrowserRouter as Router,
  Routes,
  RouterProvider,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
   pageSize=6;
   apiKey=process.env.REACT_APP_NEWS_API;
   state = {
    progress: 0,
   }
   setProgress=(progress)=>{
    this.setState({
      progress: progress,
    })
   }
  render() {
    return (
      <div>
        <Router>
         <Navbar/>
         <LoadingBar
        color='#98EECC'
        height={2}
        progress={this.state.progress}
        
        />
         <Routes>
            <Route exact path="/"element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={"general"} pagesize={this.pageSize} country="in" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={"business"} pagesize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={"entertainment"} pagesize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={"general"} pagesize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={"health"} pagesize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={"science"} pagesize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={"sports"} pagesize={this.pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={"technology"} pagesize={this.pageSize} country="in" category="technology"/>}/>
         </Routes>
        </Router>
      </div>
    )
  }
}

 