import React ,{ useRef }from "react";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import styles from "./StandardTemplate.module.css";
import Home from "./Home";

function StandardTemplate({ data }: any) {
  const dynamicRefs = useRef<Array<React.RefObject<HTMLInputElement>>>([]);
  const items: any[] = [{ label: "Home",command :()=>scrollDown(0) }];
  dynamicRefs.current.push(React.createRef<HTMLInputElement>());

  function scrollDown(headingIndex : number) {
    console.log(dynamicRefs.current[headingIndex]);
    window.scrollTo({
      top: dynamicRefs.current[headingIndex].current!.offsetTop,
      behavior: 'smooth',
    });

  }

  Object.keys(data).forEach((heading: string, index: number) => {
    if (heading !== "resumeConfig" && heading !== "personalDetails") {
      items.push({ label: heading, command :()=>scrollDown(index)});
      dynamicRefs.current.push(React.createRef<HTMLInputElement>());
    }
  });

  const start = (
    <p className={styles.heading}>{data.personalDetails.username}</p>
  );
  return (
    <>
      <div className="menu-container" ref={dynamicRefs.current[0]}>
        <Menubar model={items} start={start} />
      </div>
      <div className={styles.homeContainer}>
        <Home data={data} />
      </div>
      <p ref={dynamicRefs.current[2]}>Technologies</p>
    </>
  );
}

export default StandardTemplate;
