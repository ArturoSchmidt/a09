import React from 'react';
import './App.css';
import Tweet from './components/tweet.js'
import './components/componentStyles.css'

const axios = require('axios')

export default class App extends React.Component {

  constructor(){
    super()

    this.state = {
      tweets : []
    }

    this.getTweets = this.getTweets.bind(this)
    //this.scrollListener = this.scrollListener.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollHandler)
    window.addEventListener('click', this.clickHandler)
    this.getTweets(10).then( (result) => {
      console.log(result.data)
      this.setState({
        tweets: result.data
      })
    })
    
  }

  getTweets = async (numOfTweets) =>{
    console.log("in getwett")
    //axios call to api to get tweets
    try{
      let result = axios({
        method: 'get',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        params:{
          limit: numOfTweets
        },
        withCredentials: true,
      })
      return result
    }catch(error){
      console.log(error)
    }
    
  
  }
  //EVENT HANDLERS
  scrollHandler = (event) =>{
  
    var element = event.target;
  
    let lenState = this.state.tweets.length -1
    let id = this.state.tweets[lenState].id
    let el = document.getElementById(id)
    

    let bodyRect = document.body.getBoundingClientRect(),
    elemRect = el.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;


console.log('Element is ' + offset + ' vertical pixels from <body>' + bodyRect.top);
    console.log(el.getBoundingClientRect())
    console.log(bodyRect.top + elemRect.top)
    /*
    if(position == parseInt(3*height/4, 10)){
      this.getTweets(3).then( response =>{
        this.setState(prevState => {

          console.log("prev state")
          console.log(prevState)
          return {
            tweets: prevState.tweets.concat(response.data)
          }
        })
        console.log('state changed')
        console.log(this.state)
      })
    }
*/
  }

  clickHandler = (event) =>{
    console.log("click handler")
    console.log(event)
  }
 
  render(){
    console.log("initial render of app")
    console.log(this.state.tweets)

    let tweets = this.state.tweets.map( tweet =><div id={tweet.id}> <Tweet className="tweet" key={tweet.id} elements={tweet}/> </div>)
    console.log(tweets)
    return(
      
      <div>
        {tweets}
      </div>
    )
  }
}

