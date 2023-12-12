import React from "react";
import Paper from "shared/Paper";
import { H1 } from "theme/Typos";

export default function NotFound() {
  return (
    <Paper
      style={{ height: "70vh" }}
      className="flex items-center justify-center"
    >
      <H1 className="text-center">Page Not Found 😥</H1>
    </Paper>
  );
}
