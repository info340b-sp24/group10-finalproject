import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'

export default function CreateProject (props) {
  return (
    <div>
      <NavBar />
      <MainCreateProject />
      <Footer />
    </div>
  );
}

function MainCreateProject (props) {
  return (
    <main className="container-fluid">
      <h1>New Project</h1>
      <p className="small-text">Enter in information to post a new project</p>
      <form>
        <section>
          <h2>Project Introduction</h2>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="project-name" placeholder="ex: Cooking Master App" />
            <label for="project-name">Project Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="project-authors" placeholder="ex: Joe and Laura" />
            <label for="project-authors">Author Name(s)</label>
          </div>

          <div>
            <label for="project-type-option1" className="form-label mb-3">Type of Project: </label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="project-type-option1" value="option1" />
              <label className="form-check-label" for="project-type-option1">For School</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="project-type-option2" value="option2" />
              <label className="form-check-label" for="project-type-option2">For a Client</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="project-type-option3" value="option3" />
              <label className="form-check-label" for="project-type-option3">For Fun</label>
            </div>
          </div>

          <div className="form-floating mb-3">
            <textarea className="form-control"
              placeholder="Write a Description"
              id="project-description"
              style={{height: "100px"}}>
            </textarea>
            <label for="project-description">Give an introduction to the project</label>
          </div>

          <div className="mb-3">
            <label for="project-images" className="form-label">Add images</label>
            <input className="form-control" type="file" id="project-images" multiple />
          </div>
        </section>

        <section>
          <h2>Problem</h2>
          <div className="form-floating mb-3">
            <textarea className="form-control"
              placeholder="Write a Description"
              id="project-problem"
              style={{height: "100px"}}>
            </textarea>
            <label for="project-problem">Give a description of the problem</label>
          </div>
          <div className="mb-3">
            <label for="project-problem-images" className="form-label">Add Images</label>
            <input className="form-control" type="file" id="project-problem-images" multiple />
          </div>
        </section>

        <section>
          <h2>Solution</h2>
          <div className="form-floating mb-3">
            <textarea className="form-control"
              placeholder="Write a Description"
              id="project-solution"
              style={{height: "100px"}}>
            </textarea>
            <label for="project-solution">Give a description of the solution</label>
          </div>
          <div className="mb-3">
            <label for="project-solution-images" className="form-label">Add Images</label>
            <input className="form-control" type="file" id="project-solution-images" multiple />
          </div>
        </section>

        <section>
          <h2>Technical Details</h2>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="project-date" placeholder="ex: March 2021" />
            <label for="project-date">Month and year of project</label>
          </div>
          <div className="mb-3">
            <h3 className="fs-5">Tools Used</h3>

            <input type="checkbox" className="btn-check" id="btn-check-1" autocomplete="off" />
            <label className="btn" for="btn-check-1">Figma</label>

            <input type="checkbox" className="btn-check" id="btn-check-2" autocomplete="off" />
            <label className="btn" for="btn-check-2">Adobe XD</label>

            <input type="checkbox" className="btn-check" id="btn-check-3" autocomplete="off" />
            <label className="btn" for="btn-check-3">Framer</label>

            <input type="checkbox" className="btn-check" id="btn-check-4" autocomplete="off" />
            <label className="btn" for="btn-check-4">WebFlow</label>

            <input type="checkbox" className="btn-check" id="btn-check-5" autocomplete="off" />
            <label className="btn" for="btn-check-5">Sketch</label>
          </div>
        </section>

        <a className="btn rounded px-4 py-3 bg-dark text-white"
          href="profile-finished.html"
          role="button">
          Sumbit Project
        </a>
      </form>
    </main>
  );
}