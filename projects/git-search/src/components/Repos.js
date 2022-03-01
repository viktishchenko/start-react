import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  // console.log("repos :>> ", repos);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      // first:>> total[language] = 1;
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      //  first:>> total[language] = total[language] + 1;
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  // console.log("languages :>> ", languages);

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5); // (3) [{…}, {…}, {…}]

  // most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    }) // { label: "CSS", value: 38, stars: 412 }
    .map((item) => {
      return { ...item, value: item.stars }; // { label: "CSS", value: 412, stars: 412 }
    })
    .slice(0, 5);

  // console.log("mostPopular :>> ", mostPopular);

  /**
   *  first:>> { JavaScript: 45, CSS: 38, HTML: 14 }
   *  sec:>>  { JavaScript: {…}, CSS: {…}, HTML: {…} }
   */

  // stars, forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };

      total.forks[forks] = { label: name, value: forks };
      return total; // { label: "react-timestamp-app", value: 3 }
    },
    {
      stars: {},
      forks: {},
    }
  );

  // get biggest value

  stars = Object.values(stars).slice(-5).reverse(); // { label: "javascript-basic-projects", value: 206 }
  forks = Object.values(forks).slice(-5).reverse(); // { label: "javascript-basic-projects", value: 198 }
  // console.log("stars :>> ", stars);
  // console.log("forks :>> ", forks);

  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "26",
    },
    {
      label: "JavaScript",
      value: "80",
    },
  ];

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        {/* <ExampleChart data={chartData} /> */}
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
