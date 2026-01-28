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
import Counter from "./Pages/Counter";
import MoodChanger from "./Pages/MoodChanger";
import BirthdayTranslator from "./Pages/BrthdayTranslator";
import Weather from "./Pages/Weather";
import LoginForm from "./Pages/LoginForm";
import SampleUncontrolledForm from "./Pages/SampleUncontrolledForm";
import Clock from "./Pages/Clock";
import ClockDisplay from "./Pages/ClockDisplay";
import ActivityFinder from "./Pages/ActivityFinder";
import CounterRef from "./Pages/CounterRef";
import VideoPlayer from "./Pages/VideoPlayer";
import ReducerCounter from "./Pages/ReducerCounter";
import PostListReducer from "./Pages/PostListReducer";
// import ExplodingBomb from "./Pages/ExploingBomb";

// object storing comment data - passed as props
// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     // author is also an object
//     name: "Hello Kitty",
//     avatarUrl: "https://placekitten.com/g/64/64",
//   },
// };

function App() {
  return (
    <>
    <PostListReducer></PostListReducer>
    {/* <ReducerCounter></ReducerCounter> */}
    {/* <VideoPlayer></VideoPlayer> */}
    {/* <CounterRef></CounterRef>
    <ActivityFinder></ActivityFinder> */}
    {/* <Clock></Clock> */}
    {/* <ClockDisplay></ClockDisplay> */}
    {/* <LoginForm></LoginForm> */}
    
    {/* <SampleUncontrolledForm></SampleUncontrolledForm>
    <MoviesList></MoviesList> */}
      
    {/* <Weather></Weather>
    <BirthdayTranslator></BirthdayTranslator>
    <MoodChanger></MoodChanger> */}
    {/* <Counter></Counter>
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout> */}
      {/* <ComplexComment
        text={comment.text}
        author={comment.author}
        date={comment.date}
      ></ComplexComment>
      <Books></Books>
      <FullName firstname="John" lastname="kennedy">
        <p>Welcom to the coutnry</p>
      </FullName>
       <Pet type='cat' color='black' ></Pet>
      <City name='Melbourne'></City>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent> */}

      {/* <ExplodingBomb></ExplodingBomb> */}
    </>
  );
}

export default App;
