import styled from "styled-components";

export interface SimpleButtonProps {
  disabled: boolean;
  inertreflected: string;
}

const SimpleButton = styled.div
  .withConfig({
    shouldForwardProp: (prop) =>
      !["size", "name", "iconPosition", "fit"].includes(prop as string),
  })
  .attrs<SimpleButtonProps>(({ disabled, inertreflected }) => ({
    disabled,
    inertreflected,
  }))<SimpleButtonProps>``;

export default SimpleButton;
