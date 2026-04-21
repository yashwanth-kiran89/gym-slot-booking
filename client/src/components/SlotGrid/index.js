import React from "react";
import SlotCard from "../SlotCard";
import { Grid, GridItem, LoadingWrapper, Spinner } from "./styledComponents";

export default function SlotGrid({ slots, loading, onSelect }) {
  if (loading) {
    return (
      <LoadingWrapper>
        <Spinner />
        <span>Loading slots...</span>
      </LoadingWrapper>
    );
  }

  return (
    <Grid>
      {slots.map((slot) => (
        <GridItem key={slot.id}>
          <SlotCard slot={slot} onClick={onSelect} />
        </GridItem>
      ))}
    </Grid>
  );
}