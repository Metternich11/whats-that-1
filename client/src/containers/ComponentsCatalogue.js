import React from "react";

// Redux Imports

// Component & Container Imports
import ArtistDetails from "../components/ArtistDetails";
import AvatarContainer from "../components/AvatarContainer";
import AvatarShelf from "../components/AvatarShelf";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import Canvas from "../components/Canvas";
import DrawingStack from "../components/DrawingStack";
import Form from "../components/Form";
import FormLabel from "../components/FormLabel";
import GameHeader from "../components/GameHeader";
import GameName from "../components/GameName";
import GameWinner from "../components/GameWinner";
import ImageCarousel from "../components/ImageCarousel";
import InputField from "../components/InputField";
import NavBar from "../components/NavBar";
import PlayerAvatar from "../components/PlayerAvatar";
import PlayerHasSolvedRound from "../components/PlayerHasSolvedRound";
import PlayerList from "../components/PlayerList";
import PolaroidPicBackground from "../components/PolaroidPicBackground";
import SingleDrawing from "../components/SingleDrawing";
import SpeechBubble from "../components/SpeechBubble";
import TestVG from "../components/TestVG";
import WordToDraw from "../components/WordToDraw";
import Wrapper from "../components/Wrapper";
import Zorb from "../components/Zorb";

export const ComponentsCatalogue = () => {
  return (
    <>
      <Wrapper ComponentsCatalogue>
        <h1>Components Catalogue</h1>
        <p className="large">
          This catalogue showcases all of the created components within this
          application. It is grouped by core application screens.
        </p>

        <h2>Generic Components</h2>
        <ul className="components">
          <li>Button (Default)</li>
          <li>Button (Primary)</li>
          <li>Button (Gradient)</li>
          <li>NavBar</li>
        </ul>

        <h3>Buttons</h3>
        <div>
          <Button>default</Button>
          <Button primary>primary</Button>
          <Button gradient>Gradient</Button>
        </div>
        <h3>NavBar</h3>
        <NavBar>Text on Navbar</NavBar>
        <hr className="divider" />
        <h2>Screen: Main (Home)</h2>
        <h4>Components Used</h4>
        <ul className="components">
          <li>Wrapper</li>
          <li>BUGY</li>
          <li>Button</li>
        </ul>
        <div>
          <Zorb />
          <p>
            You draw, BUGY guesses. You have only 20 seconds per round to show
            off your artistic skills. Can BUGY understand what you are trying to
            draw? Let&apos;s get started!
          </p>

          <div>
            <Button primary>Create</Button>

            <Button>Join</Button>
          </div>
        </div>

        <hr className="divider" />

        <h2>Screen: Create</h2>
        <h4>Components Used</h4>
        <ul className="components">
          <li>Form</li>
          <li>SpeechBubble</li>
          <li>AvatarContainer</li>
          <li>PlayerAvatar</li>
          <li>FormLabel</li>
          <li>InputField</li>
          <li>GameName</li>
          <li>ButtonContainer</li>
          <li>Button</li>
        </ul>
        <Form>
          <FormLabel>Your Avatar</FormLabel>
          <SpeechBubble>Looking good!</SpeechBubble>
          <AvatarContainer>
            <PlayerAvatar />
          </AvatarContainer>
          <FormLabel>Name</FormLabel>
          <InputField type="text" />

          <FormLabel>Game ID</FormLabel>
          <GameName>Game Name</GameName>

          <ButtonContainer>
            <Button primary marginTop formButton type="submit">
              Create
            </Button>
          </ButtonContainer>
        </Form>
        <Button back marginBottom>
          Back
        </Button>

        <hr className="divider" />

        <h2>Screen: Join</h2>
        <h4>Components Used</h4>
        <ul className="components">
          <li>Form</li>
          <li>FormLabel</li>
          <li>SpeechBubble</li>
          <li>AvatarContainer</li>
          <li>PlayerAvatar</li>
          <li>InputField</li>
          <li>ButtonContainer</li>
          <li>Button</li>
        </ul>
        <Form>
          <FormLabel>Your Avatar</FormLabel>
          <SpeechBubble>Looking good!</SpeechBubble>
          <AvatarContainer>
            <PlayerAvatar />
          </AvatarContainer>
          <FormLabel>Name</FormLabel>
          <InputField type="text" />

          <FormLabel>Enter Game ID</FormLabel>
          <InputField type="text" />

          <ButtonContainer>
            <Button primary marginTop formButton type="submit">
              Join
            </Button>
          </ButtonContainer>
        </Form>
        <Button back marginBottom>
          Back
        </Button>

        <hr className="divider" />

        <h2>Screen: Lobby</h2>
        <h4>Components Used</h4>
        <ul className="components">
          <li>GameHeader</li>
          <li>GameName</li>
          <li>Button</li>
          <li>Canvas</li>
          <li>Canvas Footer</li>
          <li>PlayerList</li>
          <li>AvatarShelf</li>
        </ul>
        <GameHeader>
          <GameName lobby>Wild-Winter</GameName>
          <Button primary>Start!</Button>
        </GameHeader>

        <Canvas />
        <PlayerList>
          <PlayerAvatar />

          <PlayerAvatar />
        </PlayerList>
        <AvatarShelf>Your Opponents</AvatarShelf>

        <hr className="divider" />

        <h2>Screen: Game</h2>
        <h4>Components Used</h4>
        <ul className="components">
          <li>GameHeader</li>
          <li>GameName</li>
          <li>WordToDraw</li>
          <li>Canvas</li>
          <li>PlayerList</li>

          <li>AvatarShelf</li>
        </ul>
        <GameHeader timer>
          <GameName timer>00:20</GameName>
          <WordToDraw>
            Drawing: <strong>Hurricane</strong>
          </WordToDraw>
        </GameHeader>

        <Canvas />
        <PlayerList game>
          <PlayerAvatar />

          <PlayerAvatar />

          <PlayerAvatar />

          <PlayerAvatar />
        </PlayerList>
        <AvatarShelf>Your Opponents</AvatarShelf>

        <hr className="divider" />

        <h2>Screen: Between Rounds</h2>
        <h4>Components Used</h4>
        <ul className="components">
          <li>GameHeader</li>
          <li>GameName</li>
          <li>WordToDraw</li>
          <li>DrawingStack</li>
          <li>SingleDrawing</li>
          <li>PolaroidPicBackground</li>
          <li>TestVG</li>
          <li>ArtistDetails</li>
          <li>SpeechBubble</li>
          <li>PlayerAvatar</li>
          <li>PlayerList</li>
          <li>AvatarShelf</li>
        </ul>
        <GameHeader timer>
          <GameName timer betweenRounds>
            Next Round... 00:04
          </GameName>
          <WordToDraw>
            Drawing: <strong>Hurricane</strong>
          </WordToDraw>
        </GameHeader>
        <DrawingStack>
          <SingleDrawing>
            <PolaroidPicBackground>
              <TestVG />
            </PolaroidPicBackground>
            <ArtistDetails scaled>
              <SpeechBubble inGame>I drew that!</SpeechBubble>
              <PlayerAvatar />
            </ArtistDetails>
          </SingleDrawing>
        </DrawingStack>

        <PlayerList betweenRounds>
          <PlayerHasSolvedRound />
          <PlayerAvatar />

          <PlayerAvatar />

          <PlayerAvatar />

          <PlayerAvatar />
        </PlayerList>
        <AvatarShelf>Your Opponents</AvatarShelf>

        <hr className="divider" />

        <h2>Screen: Results</h2>
        <h4>Components Used</h4>
        <ul className="components">
          <li>Button</li>
          <li>GameWinner</li>
          <li>ImageCarousel</li>
          <li>PlayerList</li>

          <li>PlayerAvatar</li>
          <li>SingleDrawing</li>
          <li>TestVG</li>
        </ul>
        <PlayerList>
          <GameWinner />
          <PlayerAvatar />

          <PlayerAvatar />
        </PlayerList>
        <ImageCarousel>
          <SingleDrawing>
            <TestVG />
            <p>Username: Lulu</p>
          </SingleDrawing>
          <SingleDrawing>
            <TestVG />
            <p>Username: Lala</p>
          </SingleDrawing>
          <SingleDrawing>
            <TestVG />
            <p>Username: Lili</p>
          </SingleDrawing>
          <SingleDrawing>
            <TestVG />
            <p>Username: Lolo</p>
          </SingleDrawing>
          <SingleDrawing>
            <TestVG />
            <p>Username: Lyly</p>
          </SingleDrawing>
        </ImageCarousel>
        <Button>Play Again</Button>
      </Wrapper>
    </>
  );
};

export default ComponentsCatalogue;
