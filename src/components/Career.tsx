import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>Conekt · Remote</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built and deployed a full-stack platform for real-time Digital Out-of-Home (DOOH) advertising campaigns using React, Node.js and MongoDB. Delivered 4 production modules covering device monitoring, campaign dashboards, secure payments and role-based API access.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Career;
