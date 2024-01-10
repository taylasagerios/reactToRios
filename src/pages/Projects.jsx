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

        <p>Scenery Finder is a user-friendly application that seamlessly combines two APIs and three libraries to help users quickly discover parks and activities in their chosen cities. This app fills a gap in the market by merging a comprehensive directory of local scenic spots and popular attractions, and activities, all in one place. Unlike existing options, which often require users to navigate multiple websites and apps, Scenery Finder simplifies the process by sourcing data from APIs and consolidating them in one attractive format. This ensures accessibility for users with varying levels of digital literacy.
        </p>

        <Project title={"MySequel Adventure"} image="project2.jpg" repo="https://github.com/taylasagerios/my-sequel-adventure" deploy="https://my-sequel-adventure-a9247b63bc9a.herokuapp.com/" />

    <p>My Sequel Adventure is a game application where users can first create a character. Then they can use their character to fight against to win battles and grow their strength points and add up their wins. Users can battle until they beat the highest level.

          Some langueges used were MySQL, JavaScript, and CSS.

          This game was created to let a User have fun. Sometimes you just need a little entertainment. My Sequel Adventure was created by three Web Development students. The creators are Alonso, Fiqre, and Tayla.</p>

        <Project title={"White Chapel Mysteries"} image="project3.png" repo="https://github.com/Armand57araujo/whiteChapelMysteries" deploy="http://whitechapelmysteries-fcef7ed93e83.herokuapp.com/" />
        
        <p>What is White Chapel Mysteries? White Chapel Mysteries is a visual novel game based off of the Jack the Ripper stories. Enjoy the story and discover the secret of the White Chapel Mysteries alongside detective Melville Macnaghten....

          White Chapel Mysteries is a game created by Alonso Ampuero, Jack Seymour, Armand(aka Almond) Araujo, Iab Sills and Tayla Rios. It was created by a group of creative minds who like to game. This game was made for a final project to show off our talents and thingswe have learned throguht out this course. The tools used for this project for client side are: Html, Css, Javascript, React / React-bootstrap, Howler.js, Typed.js. For server side we used: MongoDB, GraphQL, Json Web Token, Vite, Apollo-client. We also got to show that we can figure out new things. For this game we learned to use Type.js and Howler. One fun feature of our game is the note pad and inventory function. We wanted this game to be interactive besides the storytelling part. While we are far from finished and hope to add much more we hope you enjoy...</p>
      </div>
    </>
  )
}