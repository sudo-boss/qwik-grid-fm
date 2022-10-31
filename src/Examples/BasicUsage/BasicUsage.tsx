// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Col, Row } from '../../index';
/**
 * BasicUsage Component: Basic implementation of the grid system with "span"
 * he expone un Grid basico estatico en el cual se expone de principio el uso del Row y Col 
 * @returns {Component<{}>} Qwik component
 */
export const BasicUsage = component$(() => {
  // -----------------------RENDER
  return (
    <>
      <h1>Basic Usage</h1>
      <hr />
      <Row hSpace={2} vSpace={2} debug>
        <Col span={70}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nisi.
          Nihil provident sunt tempore, exercitationem aspernatur atque eum
          quidem vero natus, expedita fugiat blanditiis numquam possimus beatae!
          Assumenda, dignissimos consequatur.
        </Col>
        <Col span={20}>20%</Col>
        <Col span={10}>10%</Col>
        <Col span={25}>25%</Col>
        <Col span={25}>25%</Col>
        <Col span={25}>25%</Col>
        <Col span={25}>25%</Col>
        <Col span={40}>40%</Col>
        <Col span={80}>80%</Col>
      </Row>
    </>
  );
});
