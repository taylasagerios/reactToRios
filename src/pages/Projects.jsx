import Project from "../components/Project";
export default function Projects() {
  return (
    <>
      <div className="row text-center">
        <h2 className="text">
          Projects
        </h2>
      </div>

      <div className="row mt-2">
        <Project title={"Scenery Finder"} image="project1.jpg" repo="https://github.com/eviehoang/scenery-finder" deploy="https://eviehoang.github.io/scenery-finder/" />

        <p>Scenery Finder is a user-friendly application that seamlessly combines two APIs and three libraries to help users quickly discover parks and activities in their chosen cities. 
        </p>

        <Project title={"MySequel Adventure"} image="project2.jpg" repo="https://github.com/taylasagerios/my-sequel-adventure" deploy="https://my-sequel-adventure-a9247b63bc9a.herokuapp.com/" />

    <p>My Sequel Adventure is a game application where users can first create a character. Then they can use their character to fight against to win battles and grow their strength points and add up their wins. Users can battle until they beat the highest level. This game was created to let a User have fun. Sometimes you just need a little entertainment.</p>

        <Project title={"White Chapel Mysteries"} image="project3.png" repo="https://github.com/Armand57araujo/whiteChapelMysteries" deploy="http://whitechapelmysteries-fcef7ed93e83.herokuapp.com/" />

        <p>What is White Chapel Mysteries? White Chapel Mysteries is a visual novel game based off of the Jack the Ripper stories. Enjoy the story and discover the secret of the White Chapel Mysteries alongside detective Melville Macnaghten....</p>
      </div>
    </>
  )
}