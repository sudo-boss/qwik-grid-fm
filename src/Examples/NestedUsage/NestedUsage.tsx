// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Col, Row } from '../../index';

/**
 * NestedUsage Component: Componente en el cual hacemos anidamiento de componentes 
 * @returns {Component<{}>} Qwik component
 */
export const NestedUsage = component$(() => {
  // -----------------------RENDER
  return (
    <>
      <h1>Nested</h1>
      <hr />
      <Row debug>
        <Col span={40}>40%</Col>
        <Col span={60}>
          <Row debug hSpace={1} vSpace={1}>
            <Col span={70}>
              70%
            </Col>
            <Col span={20}>
              20%
            </Col>
            <Col span={10}>
              10%
            </Col>
            <Col span={25}>
              25%
            </Col>
            <Col span={25}>
              25%
            </Col>
            <Col span={25}>
              25%
            </Col>
            <Col span={25}>
              25%
            </Col>
            <Col span={40}>
              40%
            </Col>
            <Col span={60}>
              60%
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
});
