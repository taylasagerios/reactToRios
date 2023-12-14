import Project from "../components/Project";
export default function Projects(){
  return (
    <>
    <div className="row text-center">
      <h2 className="text">
    Projects
    </h2>
    </div>
    
    <div className="row mt-4">
        <Project title={"Scenery Finder"} image="project1.jpg" repo="https://github.com/eviehoang/scenery-finder" deploy="https://eviehoang.github.io/scenery-finder/"/>    
        <Project title={"MySequel Adventure"} image="project2.jpg" repo="https://github.com/taylasagerios/my-sequel-adventure" deploy="https://my-sequel-adventure-a9247b63bc9a.herokuapp.com/"/>
        <Project title={"Project 3 coming soon"} />
    </div>
  
    </>
  )
}