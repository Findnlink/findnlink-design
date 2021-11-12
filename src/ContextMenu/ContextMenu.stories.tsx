import React from "react";
import { ContextMenu } from "./ContextMenu";

export default {
    title: "ContextMenu"
};

export const WithBar = () => <ContextMenu foo="bar" />;

export const WithBaz = () => <ContextMenu foo="baz" />;
