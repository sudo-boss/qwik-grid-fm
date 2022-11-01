// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
// ---Types
import { CSSSAtributes } from '../../declarations';
// ---Styles
import { RowStyles } from './useStyles';

interface Props {
  /**Horizontal alignment for all the "Cols" in this "Row" */
  hAlign?: 'center' | 'start' | 'end';
  /**Vertical alignment for all the "Cols" in this "Row" */
  vAlign?: 'top' | 'middle' | 'bottom';
  /**Horizontal space in px between all the "Cols" in this "Row" */
  hSpace?: number;
  /**Vertical space in px between all the "Cols" in this "Row" */
  vSpace?: number;
  /**Useful property for development, gives background colors to your "Row" and "Cols" to build easier your layout*/
  debug?: boolean;
  /**"ClassName" css selector*/
  className?: string;
  /**CSS inline Object*/
  style?: Record<string, string | number | undefined>;
}
/**
 * Row Component: Control all the "Col" components, it
 * should only contain "Col"s as child components and allows
 * you to control behaviors in all your grid such as spacing
 * between your "Col", etc.
 * @param {Props} props Properties that controls some global behavior in all your grid
 * @returns {Component<{}>} Qwik component
 */
export const Row = component$((props: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  const { hSpace, vSpace, debug, className, style: styledProp } = props;
  const styleData = RowStyles({
    hSpace: hSpace ?? 1,
    vSpace: vSpace ?? 1,
    debug
  });
  const style: CSSSAtributes = {
    display: 'block',
    textAlign: props?.hAlign || 'start',
    verticalAlign: props?.vAlign || 'bottom',
    ...styledProp
  };
  // -----------------------RENDER
  return (
    <>
      <style>{styleData?.styles}</style>
      <div
        className={styleData.parentClassName + ' ' + className}
        style={style}
      >
        <Slot />
      </div>
    </>
  );
});
