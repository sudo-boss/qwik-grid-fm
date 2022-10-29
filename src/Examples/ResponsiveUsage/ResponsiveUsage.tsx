// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Col, Row } from '../../index';

/**
 * ResponsiveUsage Component: Basic implementation of the grid system with "span"
 * @returns
 */
export const ResponsiveUsage = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const responsiveGrid = {
    xs: 100,
    sm: 90,
    md: 70,
    lg: 50,
    xl: 33,
    xxl: 20
  };
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <h1>Responsive</h1>
      <hr />
      <Row debug hAlign="center" vAlign="bottom">
        <Col {...responsiveGrid}>Responsive :D</Col>
        <Col {...responsiveGrid}>Responsive :D</Col>
        <Col {...responsiveGrid}>Responsive :D</Col>
        <Col {...responsiveGrid}>Responsive :D</Col>
        <Col {...responsiveGrid}>Responsive :D</Col>
        <Col {...responsiveGrid}>Responsive :D</Col>
        <Col {...responsiveGrid}>Responsive :D</Col>
        <Col {...responsiveGrid}>Responsive :D</Col>
        <Col {...responsiveGrid}>Responsive :D</Col>
      </Row>
    </>
  );
});
