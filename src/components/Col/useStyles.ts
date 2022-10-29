import { generate } from "../../cUtils/functions/valueGenerators"

export interface GridSystem {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}
export const ColStyles = (gridInfo: GridSystem) => {
  // ----UNIQUE SELECTOR
  const unique = generate.uniqueString();
  const parentClassName = `col-${unique}`;
  // ----PROPS
  const responsiveCols = colWidthBalancer(gridInfo)
  const { xs, sm, md, lg, xl, xxl } = responsiveCols;

  const styles = `
    .${parentClassName} {
      margin-top: var(--vSpace);
      margin-bottom: var(--vSpace);
      margin-left: var(--hSpace);
      margin-right: var(--hSpace);
      display: inline-block;
      vertical-align: inherit;
    }
    /* xxl: Pantallas grandes (desktops de menos de 1200px) */
    @media (min-width: 1600px) {
      .${parentClassName} {
        width: calc(${xxl}% - var(--hSpace) * 2);
      }
    }

    /* xl: Pantallas grandes (desktops de menos de 1200px) */
    @media (max-width: 1599px) {
      .${parentClassName} {
        width: calc(${xl}% - var(--hSpace) * 2);
      }
    }

    /* lg: Pantallas grandes (desktops de menos de 1200px) */
    @media (max-width: 1200px) {
      .${parentClassName} {
        width: calc(${lg}% - var(--hSpace) * 2);
      }
    }

    /* md: Pantallas medianas (tablets de menos de 992px) */
    @media (max-width: 992px) {
      .${parentClassName} {
        width: calc(${md}% - var(--hSpace) * 2);
      }
    }

    /* sm: Pantallas pequeñas (móviles en landscape de menos de 768px) */
    @media (max-width: 768px) {
      .${parentClassName} {
        width: calc(${sm}% - var(--hSpace) * 2);
      }
    }

    /* xs: Pantallas muy pequeñas (móviles en portrait de menos de 576px) */
    @media (max-width: 576px) {
      .${parentClassName} {
        width: calc(${xs}% - var(--hSpace) * 2);
      }
    }
  `
  return { parentClassName, styles }
}

export function colWidthBalancer(gridInfo: GridSystem) {
  const { span, xs, sm, md, lg, xl, xxl } = gridInfo;
  return {
    span: span || xl || 100,
    xs: xs || span || xl || 100,
    sm: sm || span || xl || 100,
    md: md || span || xl || 100,
    lg: lg || span || xl || 100,
    xl: xl || span || xl || 100,
    xxl: xxl || span || xl || 100,
  }
}