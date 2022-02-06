import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(1);

  const fetchJob = async () => {
    const res = await fetch(url);
    const newJob = await res.json();
    setJobs(newJob);
    setLoading(false);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return (
      <section className='loading section'>
        <h2>loading...</h2>
      </section>
    );
  }

  const { company, dates, title, duties } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((el, idx) => {
            return (
              <button
                className={`job-btn ${idx === value && "active-btn"}`}
                onClick={() => {
                  setValue(idx);
                }}
                key={el.id}
              >
                {el.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-title'>{dates}</p>
          {duties.map((el, idx) => {
            return (
              <div className='job-desc' key={idx}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{el}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default App;
