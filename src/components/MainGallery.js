let PROJECT_DATA;
let PORTFOLIO_DATA;

export default function MainGallery (props) {
  PROJECT_DATA = props.projectData;
  PORTFOLIO_DATA = props.portfolioData;

  return (
    <div>
      <main className = "container-fluid">
        <GalleryHeader />
        <GalleryContent />
      </main>
    </div>
  )
}

function GalleryHeader (props) {
  return (
    <header className="gallery">
      <h1>Gallery</h1>
    </header>
  );
}

function GalleryContent(props) {
  return (
    <div className="container-fluid">
      <GalleryFilter />
      <GalleryProjects />
      {/* <GalleryPortfolios /> */}
    </div>
  );
}

function GalleryProjects(props) {
  return (
    <section className="projects container">
      <h2 className="mt-5">Projects</h2>
      <ProjectCardRow data={PROJECT_DATA} />
    </section>
  );
}

function GalleryFilter(props) {
  return (
    <div className="card" style={{"width" : "15rem"}}>
      <div className="card-header">
        <h5 className="card-title">Filter</h5>
      </div>

      <div className="card-body">
        <div className="my-3">
          <h6 className="card-subtitle">Type</h6>
          <div>
            <input id="projectCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="projectCheckbox" className="form-check-label"> Project</label>
          </div>
          
          <div>
            <input id="portfolioCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="portfolioCheckbox" className="form-check-label"> Portfolio</label>
          </div>
        </div>
        
        <div className="my-3">
          <h6 className="card-subtitle">Purpose</h6>

          <div>
            <input id="schoolCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="schoolCheckbox" className="form-check-label"> School</label>
          </div>
          
          <div>
            <input id="clientCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="clientCheckbox" className="form-check-label"> Client</label>
          </div>
          
          <div>
            <input id="funCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="funCheckbox" className="form-check-label"> Fun</label>
          </div>
        </div>

        <div className="my-3">
          <h6 className="card-subtitle">Tools</h6>

          <div>
            <input id="adobeCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="adobeCheckbox" className="form-check-label"> Adobe XD</label>
          </div>
          
          <div>
            <input id="figmaCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="figmaCheckbox" className="form-check-label"> Figma</label>
          </div>
          
          <div>
            <input id="framerCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="framerCheckbox" className="form-check-label"> Framer</label>
          </div>
          
          <div>
            <input id="sketchCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="sketchCheckbox" className="form-check-label"> Sketch</label>
          </div>

          <div>
            <input id="webflowCheckbox" type="checkbox" className="form-check-input" value=""/>
            <label htmlFor="webflowCheckbox" className="form-check-label"> Webflow</label>
          </div>
        </div>

        <div className="my-3">
          <h6 className="card-subtitle">Major</h6>

          <div>
            <input id="allRadioBtn" type="radio" className="form-check-input" value="allMajors" />
            <label htmlFor="allRadioBtn" className="form-check-label"> All</label>
          </div>

          <div>
            <input id="designRadioBtn" type="radio" className="form-check-input" value="design" />
            <label htmlFor="designRadioBtn" className="form-check-label"> Design</label>
          </div>

          <div>
            <input id="hcdeRadioBtn" type="radio" className="form-check-input" value="hcde" />
            <label htmlFor="hcdeRadioBtn" className="form-check-label"> HCDE</label>
          </div>

          <div>
            <input id="informaticsRadioBtn" type="radio" className="form-check-input" value="informatics" />
            <label htmlFor="informaticsRadioBtn" className="form-check-label"> Informatics</label>
          </div>
          
        </div>
      </div>
    </div>
  )
}

function ProjectCardRow(props) {
  let data = props.data;
  const row = data.map((currData) => {
    let {metadata, authorData} = currData;
    return (
      <ProjectCard
        data={currData}
        key={authorData.author + metadata.title}
      />
    );
  });

  return (
    <div className="row row-cols-1 row-cols-md-4">
      {row}
    </div>
  )
}

function ProjectCard(props) {
  let {metadata, authorData, intro} = props.data;

  return (
    <div className="col">
      <div className="card block">
        <a href="project_example.html">
          <img src={"img/projects/" + intro.imgSrc} className="card-img-top" alt={intro.imgAlt} />
        </a>
        <div className="card-body">
          <h3 className="card-title">{metadata.title}</h3>
          <img className="arrow" src="img/icons/arrow.png" />
          <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
          <p className="card-text">{authorData.author + " " + authorData.authorMajor + " " + authorData.authorGrad}</p>
        </div>
      </div>
    </div>
  );
}

// function GalleryPortfolios(props) {
//   console.log(PORTFOLIO_DATA);
//   return (
//     <section className="projects container">
//       <h2 className="mt-5">Portfolios</h2>
//       <PortfolioCardRow data={PORTFOLIO_DATA} />
//     </section>
//   )
// }

// function GalleryPortfolios(props) {
//   return (
//     <section className="portfolios container">
//       <h2 className="mt-5">Portfolios</h2>
//       <div className="row row-cols-1 row-cols-md-4">
//         <div className="col">
//           <div className="card block">
//             <a href="portfolio_example.html">
//               <img src="img/portfolios/port1.jpeg" className="card-img-top" alt="Maya Patel's Portfolio" />
//             </a>
//             <div className="card-body">
//               <h3 className="card-title">Maya Patel </h3>
//               <img className="arrow" src="img/icons/arrow.png" />
//               <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
//               <p className="card-text">HCDE '26</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card block">
//             <img src="img/portfolios/port2.jpeg" className="card-img-top" alt="Noah Martinez's Portfolio" />
//             <div className="card-body">
//               <h3 className="card-title">Noah Martinez</h3>
//               <img className="arrow" src="img/icons/arrow.png" />
//               <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
//               <p className="card-text">Info '25</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card block">
//             <img src="img/portfolios/port3.jpeg" className="card-img-top" alt="Alec Santiago's Portfolio" />
//             <div className="card-body">
//               <h3 className="card-title">Alec Santiago</h3>
//               <img className="arrow" src="img/icons/arrow.png" />
//               <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
//               <p className="card-text">Info '24</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card block">
//             <img src="img/portfolios/port4.jpeg" className="card-img-top" alt="Ava Kim's Portfolio" />
//             <div className="card-body">
//               <h3 className="card-title">Ava Kim</h3>
//               <img className="arrow" src="img/icons/arrow.png" />
//               <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
//               <p className="card-text">IxD '25</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
