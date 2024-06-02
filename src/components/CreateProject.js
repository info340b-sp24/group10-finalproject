import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer'

export default function CreateProject (props) {
  const { uploadProject } = props;

  return (
    <div>
      <MainCreateProject uploadProject={uploadProject}/>
    </div>
  );
}

function MainCreateProject (props) {
  const { uploadProject } = props;

  // saves each section of the form in a single object
  const [ newProject, setNewProject ] = useState();
  // individual sections of the form
  const [ introDetails, setIntroDetails ] = useState({});
  const [ metadataDetails, setMetadataDetails ] = useState({});
  const [ problemDetails, setProblemDetails] = useState({});
  const [ solutionDetails, setSolutionDetails ] = useState({});
  const [ technicalDetails, setTechnicalDetails ] = useState({});
  // TO DO: create a callback function for each of these that
  // ADDS/REPLACES key value pairs in the object

  // wrapper callbacks for state var setters,
  // which are passed to form children Components
  const addIntroDetails = (details) => {
    // MAKE SPECIFIC TO FORM FOR INTRO
    setIntroDetails();
  }

  const addMetadataDetails = (details) => {
    // MAKE SPECIFIC TO FORM FOR INTRO
    setMetadataDetails();
  }

  const addProblemDetails = (details) => {
    // PASSED TO PROBLEMCREATE PROBEJCT
    setProblemDetails();
  }

  const addSolutionDetails = (details) => {
    // PASSED TO SOLUTION CREATE PROBEJCT
    setSolutionDetails();
  }

  const addTechnicalDetails = (details) => {
    // pASSED TO TECHNICAL CREATE PROBEJCT
    setTechnicalDetails();
  }

  // we might not need to use effect
  // useEffect(() => {

  //   setNewProject();
  // }, []);

  // adds project to firebase database
  const handleSubmit = function () {
    uploadProject(newProject);
  }

  return (
    <main className="container-fluid">
      <h1>New Project</h1>
      <p className="small-text">Enter in information to post a new project</p>
      <form>
        <IntroCreateProject />
        <ProblemCreateProject />
        <SolutionCreateProject />
        <TechnicalCreateProject />

        <button
          className="rounded px-4 py-3 bg-dark text-white"
          href="profile-finished.html"
          type="submit"
          onSubmit={handleSubmit}
        >
          Sumbit Project
        </button>
      </form>
    </main>
  );
}

function IntroCreateProject (props) {
  return (
    <section>
      <h2>Project Introduction</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-name" placeholder="ex: Cooking Master App" />
        <label htmlFor="project-name">Project Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-authors" placeholder="ex: Joe and Laura" />
        <label htmlFor="project-authors">Author Name(s)</label>
      </div>

      <div>
        <label htmlFor="project-type-option1" className="form-label mb-3">Type of Project: </label>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="project-type-option1" value="option1" />
          <label className="form-check-label" htmlFor="project-type-option1">For School</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="project-type-option2" value="option2" />
          <label className="form-check-label" htmlFor="project-type-option2">For a Client</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="project-type-option3" value="option3" />
          <label className="form-check-label" htmlFor="project-type-option3">For Fun</label>
        </div>
      </div>

      <div className="form-floating mb-3">
        <textarea className="form-control"
          placeholder="Write a Description"
          id="project-description"
          style={{height: "100px"}}>
        </textarea>
        <label htmlFor="project-description">Give an introduction to the project</label>
      </div>

      <div className="mb-3">
        <label htmlFor="project-images" className="form-label">Add images</label>
        <input className="form-control" type="file" id="project-images" multiple />
      </div>
    </section>
  );
}

function ProblemCreateProject (props) {
  return (
    <section>
      <h2>Problem</h2>
      <div className="form-floating mb-3">
        <textarea className="form-control"
          placeholder="Write a Description"
          id="project-problem"
          style={{height: "100px"}}>
        </textarea>
        <label htmlFor="project-problem">Give a description of the problem</label>
      </div>
      <div className="mb-3">
        <label htmlFor="project-problem-images" className="form-label">Add Images</label>
        <input className="form-control" type="file" id="project-problem-images" multiple />
      </div>
    </section>
  );
}

function SolutionCreateProject (props) {
  return (
    <section>
      <h2>Solution</h2>
      <div className="form-floating mb-3">
        <textarea className="form-control"
          placeholder="Write a Description"
          id="project-solution"
          style={{height: "100px"}}>
        </textarea>
        <label htmlFor="project-solution">Give a description of the solution</label>
      </div>
      <div className="mb-3">
        <label htmlFor="project-solution-images" className="form-label">Add Images</label>
        <input className="form-control" type="file" id="project-solution-images" multiple />
      </div>
    </section>
  );
}

function TechnicalCreateProject (props) {
  return (
    <section>
      <h2>Technical Details</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-date" placeholder="ex: March 2021" />
        <label htmlFor="project-date">Month and year of project</label>
      </div>
      <div className="mb-3">
        <h3 className="fs-5">Tools Used</h3>

        <input type="checkbox" className="btn-check" id="btn-check-1" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-1">Figma</label>

        <input type="checkbox" className="btn-check" id="btn-check-2" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-2">Adobe XD</label>

        <input type="checkbox" className="btn-check" id="btn-check-3" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-3">Framer</label>

        <input type="checkbox" className="btn-check" id="btn-check-4" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-4">WebFlow</label>

        <input type="checkbox" className="btn-check" id="btn-check-5" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-5">Sketch</label>
      </div>
    </section>
  );
}