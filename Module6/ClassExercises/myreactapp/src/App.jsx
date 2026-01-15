// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import City from "./Pages/City";
import Pet from "./Pages/Pet";
import Books from "./Pages/Books";
import ComplexComment from "./Pages/ComplexComment";
import FullName from "./Pages/FullName";
import Callout from "./Pages/Callout";
import MoviesList from "./Pages/MoviesList";

// object storing comment data - passed as props
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    // author is also an object
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

function App() {
  return (
    <>
    <MoviesList></MoviesList>
      {/* // render the Callout component with FullName as children */}
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>
      <ComplexComment
        text={comment.text}
        author={comment.author}
        date={comment.date}
      ></ComplexComment>
      <Books></Books>
      <FullName firstname="John" lastname="kennedy">
        <p>Welcom to the coutnry</p>
      </FullName>
      {/* <Pet type='cat' color='black' ></Pet>
      <City name='Melbourne'></City>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent> */}
    </>
  );
}

export default App;
