import axios from 'axios'
import React from 'react'
import './App.css'
import RenderGoogleMap from './RenderGoogleMap'

class Map extends React.Component{
    state = {
        pontos: ''
    }

    componentDidMount = () =>{
        axios.get("http://localhost:4000/pontos")
            .then(response => {
                this.setState({pontos : response.data})
            }).catch(erro => {

            })
    }

    render(){
        return(
            <RenderGoogleMap pontos={this.state.pontos}/>
        )
    }
}

export default Map