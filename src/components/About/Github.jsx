import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="green">Code</strong>
      </h1>
      <GitHubCalendar
        username="KaranKumar2326"
        blockSize={15}
        blockMargin={5}
        color="hsl(140, 100%, 50%)"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
