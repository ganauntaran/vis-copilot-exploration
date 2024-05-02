"use client";
import { builder, Builder } from "@builder.io/react";
import Navigation from "./components/Navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Navigation, {
  name: "Navigation",
});
