import * as React from "react";

export interface HelloProps { you: string; me: string; }

export const HelloWorld = ({you, me}:HelloProps) => {
    return(
        <h1>Hello {you} tu es le meilleur!!! {me}</h1>
     );
}