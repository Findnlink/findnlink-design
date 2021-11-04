import React from "react";
import  Add  from "./Add/Add";
import  Card from "./Card/Card";
import  Header from "./Header/Header";
import  Item from "./Item/Item";


export default {
    title: "Kanban"
};


export const card = () => <Card />;
export const item = () => <Item />;
export const header = () => <Header  text="In Progress" color="black" itemCount={3} />;
export const add = () => <Add text="Add new" color="var(--text200)" />;

