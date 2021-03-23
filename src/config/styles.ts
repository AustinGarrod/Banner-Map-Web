import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

interface IStyles {
  spacing: number;
  headerHeight: number;
  popupRowWidth: number;
  largeBreakpoint: Breakpoint;
  smallBreakpoint: Breakpoint;
  defaultLoadingIconSize: number;
}

const STYLES: IStyles = {
  spacing: 24,
  headerHeight: 48,
  popupRowWidth: 200,
  largeBreakpoint: "xl",
  smallBreakpoint: "sm",
  defaultLoadingIconSize: 150
}

export default STYLES;