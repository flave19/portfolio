import React from 'react';
import '../App.css';

export default function ProjectItem(props) {
  return (
    <a href={props.linkUrl}>
      <div class="project-container">
        <img src={props.imageUrl}
        className="project-item" />
        </div>
        </a>
  )
}