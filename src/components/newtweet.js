import React from 'react'
import axios from 'axios'
export default class NewTweet extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            unchecked:true,
            text: ""
        }
    }

    clickHandler = (event) => {
        event.preventDefault()
        this.setState({
            unchecked: false
        })
    }

    formSubmit = (event) =>{
        event.preventDefault()
        axios({
            method: 'post',
            url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
            withCredentials: true,
            data: {
              body: this.state.text
            },
          }).then(response =>{
              console.log("tweet posted")
              console.log(response)
          })
    }

    changeText = (event) =>{
        this.setState({

            text: event.target.value
        })
    }


    render(){
        let styles = {
            textAlign: 'center',
            width:'50vw',
            backgroundColor:'lightblue',
            height:'10vh',
            color:'white'
        }
        let formStyles = {
            textAlign:'center'
        }
        let buttonStyles = {
            maringBottom: '5px'
        }
        let divStyle = {
            margin: 'auto',
            width:'70vw',
            textAlign: 'center',
            paddingBottom: '6vh'

        }
        
        if(this.state.unchecked){
            return(
                <div style={divStyle}>
                    <button onClick={this.clickHandler} style={styles}>Post New Tweet</button>

                </div>
            )
        }else{
            return( 
                <form onSubmit={this.formSubmit} style={formStyles}>
                    <textarea onChange={this.changeText}>{this.state.text}</textarea>
                    <br></br>
                    <button type="submit" style={buttonStyles}>Post Tweet</button>
                </form>

            )
        }
      
    }
}