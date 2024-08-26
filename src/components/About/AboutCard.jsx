import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            &nbsp; I am <span className="purple">Karan Kumar </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            <br />
            I am a tech enthusiast and an aspiring <span className="purple">software engineer</span>
            <br />
            <br />
            Currently pursuing a Bachelors of Technology in Information Technology from Guru Gobind Singh Indraprastha University
            and I have honed my skills in Full Stack development, AI & ML, CyberSecurity, and Problem Solving.
            <br />
            <br />
            My achievements include :
            <ul>
              <li className="about-activity">
                <ImPointRight />  Finalist in HackWithMait4.0 hackathon/coding competition  <span className="purple">among 30+ teams.</span>
              </li>
              <li className="about-activity">
                <ImPointRight />  Vahani Scholar, 2022: It is a non- profitable organization that gives fellowship to 50 students every year from all over in India. <span class="purple">The success rate of getting selected is 1%.</span>
              </li>
              <li className="about-activity">
                <ImPointRight />  Colgate KIS Scholar, 2020: It is an initiative that aims to provide foundational support to individuals, who are deserving & meritorious but may lack resources to pursue their dreams.  
              </li>
              <li className="about-activity">
                <ImPointRight /> •	Vidyadhan Scholar: It is a comprehensive higher education scholarship that  <span className="purple">supports meritorious students from economically disadvantaged families.</span> 
              </li>
            </ul>
            <br />
           My Competitive Coding Profiles:
            <ul className="coding-profile"> 
              <li className="about-activity">
                <ImPointRight /> <a href = "https://leetcode.com/u/karan7107/"><span className="purple">LeetCode</span></a>
              </li>
              <li className="about-activity">
                <ImPointRight /> <a href="https://www.codechef.com/users/karan7107"><span className="purple">CodeChef</span> </a>
              </li>
              <li className="about-activity">
                <ImPointRight /> <a href="https://www.hackerrank.com/profile/karan7107"><span className="purple">HackerRank</span></a>
              </li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;



