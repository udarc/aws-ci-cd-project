

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Pages = () => (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
              <Link className="navbar-brand" to="/">AWS CI/CD</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/learn">Learn</Link>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="https://github.com/udarc/aws-ci-cd-project" target="_blank">Project Repo</a>
           </li>
        </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/learn">
            <Learning />
          </Route>
        </Switch>
      </div>
    </Router>
  );


// You can think of these components as "pages"
// in your app.

const  Home = () =>(
    <div>
    <main class="row">
    <div class=" container jumbotron">
    <h1> AWS CI/CD Project Objectives</h1>
     <h2> Jeanne d'Arc Uwimana</h2>
     </div>
<div class="col-md-6 offset-md-3">
     <ul className="list-grooup">
       <li className="list-group-item">Managing Source Code using GIT & GitHub</li>
       <li className="list-group-item">Create a build process using CodeBuild</li>
       <li className="list-group-item"> Create a deployment process</li>
     </ul>
     </div>
     </main>
    </div>
  );

const Learning = () =>(
    <div>
    <main class="row">
    <div class="col-md-6 offset-md-3">
    <h1>Key Learnings</h1>

         <ul className="list-grooup">
           <li className="list-group-item">Creating and managing a GitHub repository</li>
           <li className="list-group-item">Using GitHub to trigger a CodePipeline deployment</li>
           <li className="list-group-item">Create a simple react App</li>
           <li className="list-group-item"> Setting up S3 to host a ReactJS application</li>
         </ul>
         </div>
         </main>
    </div>
  );



export default Pages;
