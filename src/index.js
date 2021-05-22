import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./index.css";

class App extends React.Component{
    render(){
        return(
            <BrowserRouter  >
                <Routes />
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));