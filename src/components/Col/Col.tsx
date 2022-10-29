// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
import { ColStyles, GridSystem } from './useStyles';
// ---UI Dependencies
// ---Custom Hooks
// ---Redux
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images


interface Props extends GridSystem {
  className?: string;
  style?: any;
}
/**
 * SimpleComp Component: Do something
 */
export const Col = component$((props: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  const {  ...grid } = props;
  const styleData = ColStyles({ ...grid });

  const demo = {
    // background: background || 'trans',
    textAlign: 'center'
  };

  const style = {
    ...demo,
    ...props?.style,
  };
  // console.log(style);
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
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
