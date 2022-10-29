// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Col, Row } from '../../index';

/**
 * MassiveElementsUsage Component: Basic implementation of the grid system with "span"
 * @returns
 */
export const MassiveElementsUsage = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const responsiveGrid = {
    xs: 8,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
    xxl: 1,
    style: {
      fontSize: '11px',
    }
  };
  // -----------------------MAIN METHODS
  const cols = [];
  for (let i = 0; i < 100; i++) {
    cols.push(i + 1);
  }
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <h1>Massive responsive</h1>
      <hr />
      <Row debug hAlign="center" vAlign="bottom">
        {cols.map((e) => (
          <Col {...responsiveGrid}>{e}</Col>
        ))}
      </Row>
    </>
  );
});
