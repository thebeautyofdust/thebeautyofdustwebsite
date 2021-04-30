import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import "./index.css";

class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <Routes />
            </HashRouter>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));