import React, { FunctionComponent } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { getThemeValue, spacing, THEME_PROPS } from "../sc-utils";

const StyledMenu = styled(Row)`
  margin: ${spacing(1)};
  padding-left: ${spacing(2)};
  padding-right: ${spacing(2)};
  background-color: white;
  border: 1px solid ${getThemeValue(THEME_PROPS.PRIMARY_BORDER_COLOR)};
  line-height: 32px;
`;

const Title = styled.h3`
  padding-left: ${spacing(2)};
  padding-right: ${spacing(1)};
  margin: 0;
`;

const Subtitle = styled.span`
  padding-left: ${spacing(2)};
`;

interface HeaderProps {
  votes: number;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  const { votes } = props;

  return (
    <StyledMenu data-test-id="header__menu">
      <Col xs={16}>
        <Row>
          <Title data-test-id="header__title">Ron Swanson Quote Voter</Title>
          <Subtitle data-test-id="header__sub-title">
            "Vote for your favorite quote!"
          </Subtitle>
        </Row>
      </Col>
      <Col xs={8}>
        <Row justify="end" data-test-id="header__total_votes">
          Total Votes: {votes}
        </Row>
      </Col>
    </StyledMenu>
  );
};
