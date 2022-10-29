import { generate } from "../../cUtils/functions/valueGenerators"

export interface Props {
  hSpace?: number;
  vSpace?: number;
  debug?: boolean;
}
export const RowStyles = (props: Props) => {
  // ----PROPS
  const { hSpace, vSpace, debug } = props;
  // ----UNIQUE SELECTOR
  const unique = generate.uniqueString();
  const parentClassName = `row-${unique}`;
  // ----STYLES
  const rowStyles = `
  .${parentClassName} {
      --vSpace: ${vSpace}px;
      --hSpace: ${hSpace}px;
    }
  `
  const debugStyles = `
  .${parentClassName}{
    background: #212121;
  }
  .${parentClassName} .forge-col-element:nth-child(1n){
    background: #0040e3;
  }
  .${parentClassName} .forge-col-element:nth-child(4n){
      background: #18b6f6;
    }
  .${parentClassName} .forge-col-element:nth-child(3n){
      background: #7b0fab;
    }
  `
  const styles = debug?rowStyles+debugStyles: rowStyles
  return { parentClassName, styles }
}