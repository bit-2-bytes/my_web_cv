import React ,{ useRef }from "react";
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
  const dynamicRefs = useRef<Array<React.RefObject<HTMLInputElement>>>([]);
  const items: any[] = [{ label: "Home",command :()=>scrollDown(0) }];
  function scrollDown(headingIndex : number) {
    dynamicRefs.current.push(React.createRef<HTMLInputElement>());
    window.scrollTo({
      top: dynamicRefs.current[headingIndex].current!.offsetTop-(window.innerHeight * 0.1),
      behavior: 'smooth',
    });

  }
  
  Object.keys(data).forEach((heading: string, index: number) => {
    if (heading !== "resumeConfig" && heading !== "personalDetails") {
      items.push({ label: heading, command :()=>scrollDown(index)});
    }
    dynamicRefs.current.push(React.createRef<HTMLInputElement>());
  });

  const start = (
    <p className={styles.heading}>{data.personalDetails.username}</p>
  );
  return (
    <>
      <div >
        <Menubar  model={items} start={start}  ref={menubarRef}/>
      </div>
      <div className={styles.homeContainer} ref={dynamicRefs.current[0]}>
        <Home data={data} />
      </div>
      <div className={styles.homeContainer} ref={dynamicRefs.current[2]}>
        <Technologies data={data} />
      </div>
      <div className={styles.homeContainer} ref={dynamicRefs.current[3]}>
        <Education data={data} />
      </div>
      <div className={styles.homeContainer} ref={dynamicRefs.current[4]}>
        <ProffesionalExperience data={data} />
      </div>
      <div className={styles.homeContainer} ref={dynamicRefs.current[5]}>
        <Awards data={data} />
      </div>
    </>
  );
}

export default StandardTemplate;
