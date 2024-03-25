// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const Container = ({ children }) => {
  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".test-gsap",
  //     {
  //       y: -100,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       // repeat: -1,
  //       opacity: 1,
  //       // yoyo: true,
  //       duration: 4,
  //       ease: "sine.inOut",
  //     }
  //   );
  // }, []);
  return <div className="mx-auto p-1 w-11/12  ">{children}</div>;
};

export default Container;
