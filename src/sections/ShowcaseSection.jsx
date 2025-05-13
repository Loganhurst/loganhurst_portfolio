import React, { use } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'; 

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = React.useRef(null);
    const project1Ref = React.useRef(null);
    const project2Ref = React.useRef(null);
    const project3Ref = React.useRef(null);

        



    useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                opacity: 0,
                y: 50,
            },
            { 
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                }
            }
        )
    })

        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0 }, 
            {opacity: 1, duration: 1.5}
        )
    }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
            {/*Left */}
            <div className="first-project-wrapper" ref = {project1Ref}>
                <div className = "image-wrapper">
                    <img src="/images/project1.png" alt="project1" />
                </div>
                <div className = "text-content">
                    <h2>Project 1</h2>
                    <p className="text-white-50 md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec ligula facilisis tincidunt. Donec ac nunc a enim efficitur facilisis.
                    </p>
                </div>
            </div>
            {/*Right */}
            <div className = "project-list-wrapper overflow-hidden" ref={project2Ref}>
                <div className = "image-wrapper">
                    <div className = "image-wrapper bg-[#ffefdb]">
                        <img src="/images/project2.png" alt="project2" />
                    </div>
                    <div>
                        <h2>Project 2</h2>
                    </div>
                </div>
            </div>
            <div className = "project-list-wrapper overflow-hidden" ref={project3Ref}>
                <div className = "image-wrapper">
                    <div className = "image-wrapper bg-[#ffe7eb]">
                        <img src="/images/project3.png" alt="project3" />
                    </div>
                    <div>
                        <h2>Project 3</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>


    </section>
  )
}

export default ShowcaseSection
