import React from 'react';
import './App.css';

import ProjectItem from './components/Projects'

const projects = [
  {
    title:"Schwifty",
    imageUrl: "",
    linkUrl: ""
  },
  {
    title:"Interview Scheduler",
    imageUrl: "https://github.com/flave19/scheduler/blob/master/docs/Add.png",
    linkUrl: "https://github.com/flave19/scheduler"
  },
  {
    title:"Schwifty",
    imageUrl: "",
    linkUrl: ""
  },
  {
    title:"GOAT2 NOTES",
    imageUrl: "",
    linkUrl: "https://github.com/ShivamP96/Quick-Notes"
  },
  {
    title:"Tweeter",
    imageUrl: "https://github.com/flave19/tweeter/blob/master/docs/Too%20long%20error.png",
    linkUrl: "https://github.com/flave19/tweeter"
  },
  {
    title:"TinyApp",
    imageUrl: "https://github.com/flave19/TinyApp/blob/master/docs/URLs-logged-in.png",
    linkUrl: "https://github.com/flave19/TinyApp"
  }
]

function App() {
  return (
    <body>
     {
     projects.map((project, index)=>(
        <ProjectItem title={project.title} imageUrl={project.imageUrl} linkUrl={project.linkUrl} />
      ))
     }

    </body>
  );
}

export default App;
