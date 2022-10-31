// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
import { CSSSAtributes } from '../../declarations';
import { RowStyles } from './useStyles';

interface Props {
  hAlign?: 'center' | 'start' | 'end';
  vAlign?: 'top' | 'middle' | 'bottom';
  hSpace?: number;
  vSpace?: number;
  debug?: boolean;
  className?: string;
  style?: any;
}
/**
 * Row Component: aqui declaramos las propiedas a las cuales va
 * a tener acceso y control de los elementos dentro de el (espaciados
 * y aliniamientos), podemos acceder a la propieddad "debug" la cual 
 * es una herramienta de ayuda para poder ver el comportamiento de los
 * elementos
 * @returns {Component<{}>} Qwik component
 */
export const Row = component$((props: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  const { hSpace, vSpace, debug, className, style: styledProp } = props
  const styleData = RowStyles({ hSpace: hSpace ?? 1, vSpace: vSpace ?? 1, debug });
  const style: CSSSAtributes = {
    display: 'block',
    textAlign: props?.hAlign || 'start',
    verticalAlign: props?.vAlign || 'bottom',
    ...styledProp
  }
  // -----------------------RENDER
  return (
    <>
    <style>{styleData?.styles}</style>
    <div className={styleData.parentClassName + ' ' + className} style={style}>
      <Slot />
    </div>
    </>
  );
});
