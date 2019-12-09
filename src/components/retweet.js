import React from 'react'
import axios from 'axios'
export default class Retweet extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            retweeting: false,
            text:""
        }

    }


    componentDidMount(){


    }

    updateTextArea = (event) =>{
        this.setState({
            text: event.target.value
        })
    }

    formSubmit = (event) =>{
        event.preventDefault()
        console.log("in form submit")
        console.log(this.state.text)
        axios({
            method: 'post',
            url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
            withCredentials: true,
            data: {
              "type": "retweet",
              "parent": this.props.id,
              "body": "ReTweet: " +  this.state.text
            },
          }).then(response => {
              this.setState({
                    retweeting:false,
                    text:""
              })
          })
    }
    retweetStart = () =>{
        this.setState({
            retweeting :true,
            text: this.props.text
        })
    }


    render(){
        if(this.state.retweeting){
            console.log("made it here")
            return(
          
                <form onSubmit={this.formSubmit}>
                    <textarea value={this.state.text} onChange={this.updateTextArea}>{this.state.text}</textarea>
                    <button type="submit">Post</button>
                </form>
            )
        }else{
            return(
                <button onClick={this.retweetStart}>ReTweet</button>
            )
        }

       
    }
}
