import React from 'react'
import Stats from './stats'
import Body from './body'
import Author from './author'
export default class Tweets extends React.Component{

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
       console.log("in tweet")
       console.log(this.props)
        return(
            <div>
                <Author name={this.props.elements.author}/>
                <Body body={this.props.elements.body} />
                <Stats likeCount={this.props.elements.likeCount} createdAt={this.props.elements.createdAt} retweetCount={this.props.elements.retweetCount}/>
            </div>
           
            
        )
    }
}