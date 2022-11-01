import { generate } from "../../cUtils/functions/valueGenerators"
import { UniqueCSS } from "../../declarations";

interface Props {
  hSpace?: number;
  vSpace?: number;
  debug?: boolean;
}
/**
 * Generate unique styles for the specific Row depending on the properties for the row
 * @param {Props} props - Props for handle the spacing between cols and to activate the debug mode
 * @returns {UniqueCSS} CSS styles
 */
export const RowStyles = (props: Props): UniqueCSS => {
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
      background: #0081e3;
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