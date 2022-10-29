'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const qwik = require('@builder.io/qwik');
const jsxRuntime = require('@builder.io/qwik/jsx-runtime');

/**
 * Genera una cadena aleatoria de la longitud indicada
 * @param {number} length Longitud de la randomString
 * @returns {string}
 */ function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < length; i++)result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
}
/**
 * Genera una cadena aleatoria de la longitud indicada con la lista indicada de caracteres dados en una cadena
 * @param {number} length Longitud del randomString
 * @param {string} characters lista de characters
 * @returns {string}
 */ function randomStringCustom(length, characters) {
    let result = '';
    for(let i = 0; i < length; i++)result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
}
/**
 * Devuelve una palabra aleatoria de una matriz dada de palabras
 * @param {string[]} words array of strings (words)
 * @returns {string}
 */ function randomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}
/**
 * Genera una cadena aleatoria y única.
 * @returns {string} una cadena única
 */ function uniqueString() {
    const uniqueKey = new Date().getDate();
    const randStr = randomString(4);
    return randStr + uniqueKey;
}
const generate = {
    randomString,
    uniqueString,
    randomWord,
    randomStringCustom
};

const ColStyles = (gridInfo)=>{
    // ----UNIQUE SELECTOR
    const unique = generate.uniqueString();
    const parentClassName = `col-${unique}`;
    // ----PROPS
    const responsiveCols = colWidthBalancer(gridInfo);
    const { xs , sm , md , lg , xl , xxl  } = responsiveCols;
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
  `;
    return {
        parentClassName,
        styles
    };
};
function colWidthBalancer(gridInfo) {
    const { span , xs , sm , md , lg , xl , xxl  } = gridInfo;
    return {
        span: span || xl || 100,
        xs: xs || span || xl || 100,
        sm: sm || span || xl || 100,
        md: md || span || xl || 100,
        lg: lg || span || xl || 100,
        xl: xl || span || xl || 100,
        xxl: xxl || span || xl || 100
    };
}

// ---Dependencies
/**
 * SimpleComp Component: Do something
 */ const Col = /*#__PURE__*/ qwik.componentQrl(qwik.inlinedQrl((props)=>{
    // -----------------------CONSTS, HOOKS, STATES
    const { ...grid } = props;
    const styleData = ColStyles({
        ...grid
    });
    const demo = {
        // background: background || 'trans',
        textAlign: 'center'
    };
    const style = {
        ...demo,
        ...props?.style
    };
    // console.log(style);
    // -----------------------MAIN METHODS
    // -----------------------AUX METHODS
    // -----------------------RENDER
    return /*#__PURE__*/ jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("style", {
                children: styleData?.styles
            }),
            /*#__PURE__*/ jsxRuntime.jsx("div", {
                className: 'forge-col-element ' + styleData.parentClassName + ' ' + props.className,
                style: style,
                children: /*#__PURE__*/ jsxRuntime.jsx(qwik.Slot, {})
            })
        ]
    });
}, "Col_component_upRbwvDy6xk"));

const RowStyles = (props)=>{
    // ----PROPS
    const { hSpace , vSpace , debug  } = props;
    // ----UNIQUE SELECTOR
    const unique = generate.uniqueString();
    const parentClassName = `row-${unique}`;
    // ----STYLES
    const rowStyles = `
  .${parentClassName} {
      --vSpace: ${vSpace}px;
      --hSpace: ${hSpace}px;
    }
  `;
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
  `;
    const styles = debug ? rowStyles + debugStyles : rowStyles;
    return {
        parentClassName,
        styles
    };
};

// ---Dependencies
/**
 * SimpleComp Component: Do something
 * @returns {ReactElement}
 */ const Row = /*#__PURE__*/ qwik.componentQrl(qwik.inlinedQrl((props)=>{
    // -----------------------CONSTS, HOOKS, STATES
    const { hSpace , vSpace , debug , className , style: styledProp  } = props;
    const styleData = RowStyles({
        hSpace: hSpace ?? 1,
        vSpace: vSpace ?? 1,
        debug
    });
    const style = {
        display: 'block',
        textAlign: props?.hAlign || 'start',
        verticalAlign: props?.vAlign || 'bottom',
        ...styledProp
    };
    // -----------------------MAIN METHODS
    // -----------------------AUX METHODS
    // -----------------------RENDER
    return /*#__PURE__*/ jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("style", {
                children: styleData?.styles
            }),
            /*#__PURE__*/ jsxRuntime.jsx("div", {
                className: styleData.parentClassName + ' ' + className,
                style: style,
                children: /*#__PURE__*/ jsxRuntime.jsx(qwik.Slot, {})
            })
        ]
    });
}, "Row_component_p1awvntAOS4"));

exports.Col = Col;
exports.Row = Row;
