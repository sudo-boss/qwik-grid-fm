// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
import { ColStyles, GridSystem } from './useStyles';
/**
 * Props Props: inyeccion de propiedades con el GridSystem
 * usasamos el Classname para asi poder 
 */
interface Props extends GridSystem {
  className?: string;
  style?: any;
}
/**
 * Col Component: este componente solo recibe la Propiedad de
 * responsiveGrid la cual es la encargada de verificar el 
 * tamaño en que que se encuantra la Pagina 
 * @returns {Component<{}>} Qwik component
 */
export const Col = component$((props: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  const {  ...grid } = props;
  const styleData = ColStyles({ ...grid });

  const demo = {
    textAlign: 'center'
  };

  const style = {
    ...demo,
    ...props?.style,
  };
  // -----------------------RENDER
  return (
    <>
      <style>{styleData?.styles}</style>
      <div className={'forge-col-element ' + styleData.parentClassName + ' ' + props.className} style={style}>
        <Slot />
      </div>
    </>
  );
});
