import * as React from "react";
import { styled, keyframes } from "../stitches.config";
import { violet, blackA, mauve } from "@radix-ui/colors";
import { IconChevronDown } from "@tabler/icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: "100%",
  backgroundColor: mauve.mauve6,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 2px ${mauve.mauve4}`,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: ".75rem 1rem",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  fontSize: 15,
  lineHeight: "1.7",
  color: "$primary",
  boxShadow: `0 1px 0 ${mauve.mauve6}`,
  '&[data-state="closed"]': { backgroundColor: "white" },
  '&[data-state="open"]': { backgroundColor: "white" },
  "&:hover": { backgroundColor: mauve.mauve2 },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  fontSize: 15,
  color: mauve.mauve11,
  backgroundColor: "$paper",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "15px 20px",
});

const StyledChevron = styled(IconChevronDown, {
  color: violet.violet10,
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron />
      </StyledTrigger>
    </StyledHeader>
  )
);
export const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);
