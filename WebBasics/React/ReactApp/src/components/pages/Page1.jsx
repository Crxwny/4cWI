import React from "react";
import Card from "../Card";
import Button from "../Button";
import DropDown from "../DropDown";
import Container from "../Container";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div className="w-screen bg-amber-200">
      <div className="grid grid-cols-3 w-screen gap-2">
        <Card name="John Doe" job="Developer" />
        <Card name="Jane Smith" job="Designer" />
        <Card name="Bob Johnson" job="Manager" />
        <Card name="Alice Brown" job="Engineer" />
        <Card name="Charlie Wilson" job="Analyst" />
        <Card name="Diana Davis" job="Consultant" />
      </div>
      <Button text="Click Me" />
      <DropDown />
      <Container />
      <Link to="/p2" className="bg-green-400 rounded-2xl hover:cursor-pointer hover:bg-green-500">
        Page 2
      </Link>
    </div>
  )
}
