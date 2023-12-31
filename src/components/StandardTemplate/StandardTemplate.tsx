import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import styles from "./StandardTemplate.module.css";
import Home from "./Home";
import Technologies from "./Technologies";
import Education from "./Education";
import ProffesionalExperience from "./ProffesionalExperience";
import Awards from "./Awards";

function StandardTemplate({ data }: any) {
  const menubarRef = useRef(null);
  const dynamicRefs = useRef({});
  const items: any[] = [{ label: "Home", command: () => scrollDown("Home") }];
  (dynamicRefs.current as any)["Home"] = React.createRef<HTMLInputElement>();
  function scrollDown(heading: string) {
    window.scrollTo({
      top:
        (dynamicRefs.current as any)[`${heading}`].current!.offsetTop -
        window.innerHeight * 0.1,
      behavior: "smooth",
    });
  }
  let not_to_include = ["resumeConfig", "personalDetails", "_id", "__v"];
  if (data.Certificates.length === 0) {
    not_to_include.push("Certificates");
  }
  if (data.Projects.length === 0) {
    not_to_include.push("Projects");
  }
  if (data.Award.length === 0) {
    not_to_include.push("Award");
  }
  if (data.Education.length === 0) {
    not_to_include.push("Education");
  }
  if (data.Technologies.length === 0) {
    not_to_include.push("Technologies");
  }
  if (data["Professional Experience"]!.length === 0) {
    not_to_include.push("Professional Experience");
  }
  Object.keys(data).forEach((heading: string) => {
    if (!not_to_include.includes(heading)) {
      items.push({ label: heading, command: () => scrollDown(heading) });
      (dynamicRefs.current as any)[`${heading}`] =
        React.createRef<HTMLInputElement>();
    }
  });

  const start = (
    <p className={styles.heading}>{data.personalDetails.username}</p>
  );
  return (
    <>
      <div>
        <Menubar model={items} start={start} ref={menubarRef} />
      </div>
      <div
        className={styles.homeContainer}
        ref={(dynamicRefs.current as any).Home}
      >
        <Home data={data} />
      </div>
      <div
        className={styles.homeContainer}
        style={{ display: data.Award.length != 0 ? "block" : "none" }}
        ref={(dynamicRefs.current as any).Award}
      >
        <Awards data={data} />
      </div>
      <div
        className={styles.homeContainer}
        style={{ display: data.Education.length != 0 ? "block" : "none" }}
        ref={(dynamicRefs.current as any).Education}
      >
        <Education data={data} />
      </div>
      <div
        className={styles.homeContainer}
        style={{
          display:
            data["Professional Experience"].length != 0 ? "block" : "none",
        }}
        ref={(dynamicRefs.current as any)["Professional Experience"]}
      >
        <ProffesionalExperience data={data} />
      </div>
      <div
        className={styles.homeContainer}
        style={{ display: data.Technologies.length != 0 ? "block" : "none" }}
        ref={(dynamicRefs.current as any).Technologies}
      >
        <Technologies data={data} />
      </div>
    </>
  );
}

export default StandardTemplate;
