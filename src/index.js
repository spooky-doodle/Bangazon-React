import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import "./index.css";
import Bangazon from "./Bangazon";
import AWS from 'aws-sdk';


ReactDOM.render(
    <Router>
        <Bangazon />
    </Router>,
    document.getElementById("root")
);
