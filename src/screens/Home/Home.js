/**
 Author - Saahil Madaan
 Git - https://bitbucket.org/techSavvySaahil/
 **/

import React from "react";
import styled, {css} from "styled-components";
import PropTypes from "prop-types";
import parse from 'html-react-parser';

const propTypes = {
  activeIndex: PropTypes.number.isRequired,
  checkMouseIndex: PropTypes.func.isRequired,
  filterList: PropTypes.func.isRequired,
  filteredList: PropTypes.array.isRequired,
  isResultListVisible: PropTypes.bool.isRequired
};

const Home = ({
  activeIndex,
  checkMouseIndex,
  filteredList,
  filterList,
  isInputFocussed,
  isResultListVisible,
  setFocusOnInput
}) => {
  return (
    <Wrapper>
      <SearchBar
        placeholder="Search for users and their details"
        onBlur={() => setFocusOnInput(false)}
        onChange={filterList}
        onFocus={() => setFocusOnInput(true)}
      />
      {
        isInputFocussed && isResultListVisible && 
        (
          <List id="userlist">
            {filteredList.map((elem, index) => {
              return (
                <Item
                  id={`index_${index + 1}`}
                  isActive={(index + 1) === activeIndex}
                  key={index + 1}
                  onMouseMove={() => checkMouseIndex(index + 1)}
                >
                  {parse(elem)}
                </Item>
              );
            })}
            {
              !filteredList.length &&
              (
                <NoResult>No User Found</NoResult>
              )
            }
          </List>
        )
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: auto;
  span {
    color: #0a77ea;
  }
`;

const SearchBar = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #adadad;
  margin: 0;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  border: 1px solid #adadad;
  border-top: 0;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
  max-height: 350px;
  overflow: auto;
  .id {
    font-weight: 900;
  }
  .name {
    font-weight: 600;
    margin-top: 0.3rem;
  }
  .items {
    font-size: 0.9rem;
    margin-top: 0.4rem;
  }
  .address {
    font-size: 0.9rem;
    font-style: italic;
    margin-top: 0.4rem;
  }
  .pincode {
    font-size: 0.9rem;
    font-style: italic;
  }
`;

const Item = styled.li`
  list-style: none;
  padding: 1rem;
  border-bottom: 1px solid #adadad;
  width: 100%;
  height: 135px;
  box-sizing: border-box;
  text-align: left;
  :last-child {
    border: none;
  }
  ${props => props.isActive && css`
    background-color: #eee;
  `}
`;

const NoResult = styled.div`
  text-align: center;
  padding: 2rem;
`;

Home.propTypes = propTypes;

export default Home;
