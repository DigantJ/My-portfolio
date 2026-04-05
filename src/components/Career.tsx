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
                <h4>Marketing Intern</h4>
                <h5>Tanayanand Pvt. Ltd. — Wings India 2026, Hyderabad</h5>
              </div>
              <h3>Dec 2025 - Jan 2026</h3>
            </div>
            <p>
              Coordinated cross-functional operations for a large-scale industry
              event. Managed structured task tracking and stakeholder communication
              across multiple teams. Organized event data into structured formats
              for operational reporting. Received a Letter of Appreciation for
              professionalism and execution quality.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Computer Science & Engineering</h4>
                <h5>SRM Institute of Science and Technology, Ramapuram, Chennai</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Final-year CSE student with a CGPA of 8.85/10. Coursework spans
              Data Structures & Algorithms, DBMS, Operating Systems, OOP, and
              Computer Networks. Built multiple independent projects in Python,
              data engineering, and AI-integrated interfaces alongside academics.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School Diploma</h4>
                <h5>P.S.B.A English School, Ch. Sambhaji Nagar (Aurangabad)</h5>
              </div>
              <h3>2015 - 2022</h3>
            </div>
            <p>
              Completed schooling with a strong foundation in mathematics and
              science, building the analytical mindset that drives my work in
              data and technology today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
