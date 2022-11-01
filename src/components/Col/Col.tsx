// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
import { ColStyles, GridSystem } from './useStyles';

interface Props extends GridSystem {
  className?: string;
  style?: any;
}

/**
 * Col Component: Container that allows you handle all your grid content controlling it 
 * based in a percentage way instead of classic 12 or 24 columns per row allowing you 
 * to handle up to 100 columns per row.
 * @param {Props} props Properties that controls the width of your "Cols" in percentage with static width (span) or with responsive behaviors(xs, sm, md lg, xl, xxl)
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
