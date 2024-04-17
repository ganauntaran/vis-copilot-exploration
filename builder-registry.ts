"use client";
import { builder, Builder } from "@builder.io/react";
import { Button } from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import CourseCard from "./components/Card/Card";
import { RecommendationCard } from "./components/RecommendationCard/RecommendationCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(CourseCard, {
  name: "CourseCard",
  inputs: [
    {
      name: "dislikeIconUrl",
      type: "string",
      required: true,
    },
    {
      name: "imageUrl",
      type: "string",
      required: true,
    },
    {
      name: "likeIconUrl",
      type: "string",
      required: true,
    },
    {
      name: "targetAudience",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
