/**
 Author - Saahil Madaan
 Git - https://bitbucket.org/techSavvySaahil/
 **/

import React, {
  useState,
  useEffect,
  useRef
} from "react";

import {
  UserList,
  KeysToBeChecked
} from "./_mocks";

import {fetchUserData} from "./api";

import Home from "./Home";

const HomeContainer = () => {
  const [userList, setUserList] = useState(UserList);
  const [filteredList, setFilteredList] = useState([]);
  const [storedTimeout, setStoredTimeout] = useState(null);
  const [memoizedList, setMemoizedList] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isResultListVisible, showResultList] = useState(false);
  const [listScrollTop, setListScrollTop] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // cascading effect of changing index by keyboard goes to mouseover,
  // so to stop cascading, isCascadingEffectPresent flag introduced
  const [isCascadingEffectPresent, setCascadingEffect] = useState(false);

  // useRef hook used for getting current state in event listener callback
  const activeIndexRef = useRef(activeIndex);
  const setActiveIndexRef = (index) => {
    activeIndexRef.current = index;
    setActiveIndex(index)
  };

  const filteredListRef = useRef(filteredList);

  const setFilteredListRef = (data) => {
    filteredListRef.current = data;
    setFilteredList(data)
  };

  // for updating index with keyboard navigation
  const updateIndex = (e) => {
    if ([38, 40].includes(e.keyCode)) {
      setCascadingEffect(true);
      const list = document.querySelector("#userlist");
      let increment = 0;
      let newIndex = activeIndex;
      if (e.keyCode === 40) {
        increment = activeIndexRef.current >= filteredListRef.current.length ? 0 : 1;
        newIndex = increment + activeIndexRef.current;
        const item = document.querySelector(`#index_${newIndex}`);
        const scrollDiffFromTop = (newIndex * item.offsetHeight) - list.offsetHeight;
        const scrollDiff = scrollDiffFromTop - list.scrollTop;
        if (scrollDiff > 0) {
          list.scrollTo(0, scrollDiffFromTop);
        }
      } else {
        increment = activeIndexRef.current <= 1 ? 0 : -1;
        newIndex = increment + activeIndexRef.current;
        const item = document.querySelector(`#index_${newIndex}`);
        const scrollDiffFromTop = (newIndex - 1) * item.offsetHeight;
        const scrollDiff = list.scrollTop - scrollDiffFromTop;
        if (scrollDiff > 0) {
          list.scrollTo(0, scrollDiffFromTop);
        }
      }
      setActiveIndexRef(newIndex);
      setTimeout(() => {
        setCascadingEffect(false);
      }, 150);
    }
  };

  useEffect (() => {
    // fetchMockData();
    document.addEventListener("keyup", updateIndex);
  }, []);

  // Couldn't make a request due to https
  const fetchMockData = async () => {
    const response = await fetchUserData();
    const responseJson = await response.json();
    setUserList(responseJson);
  };

  // creating cards for the filtered results
  const createFilteredCard = ({user, query}) => {
    let card = "";
    const normalizedQuery = query.toLowerCase();
    let queryPresent = false;
    KeysToBeChecked.forEach(key => {
      let keyValue = user[key];
      if (keyValue) {
        if (Array.isArray(keyValue)) {
          const isPresent = keyValue.some(value => value.toLowerCase().includes(normalizedQuery));
          queryPresent = queryPresent || isPresent;
          keyValue = isPresent ? `<span class='highlight'>${query}</span> is present in ${key}` : "";
        } else {
          const value = keyValue.toLowerCase();
          const highlightIndex = value.indexOf(normalizedQuery);
          if (~highlightIndex) {
            queryPresent = true;
            const valueArray = keyValue.split("");
            const originalValue = valueArray.splice(highlightIndex, normalizedQuery.length).join("");
            valueArray.splice(highlightIndex, 0, `<span class='highlight'>${originalValue}</span>`);
            keyValue = valueArray.join("");
          }
        }
        card += `<div class=${key}>${keyValue}</div>`;
      }
    });
    return queryPresent && card;
  };

  const filterList = (e) => {
    clearTimeout(storedTimeout);

    const {value: query} = e.target;

    setSearchQuery(query);

    if (!query) {
      setResultsVisibility(false);
      return;
    }
    
    // checking for memoized list of results with unique query
    if (memoizedList[query]) {
      setFilteredListRef(memoizedList[query]);
      setResultsVisibility(true);
      setActiveIndexRef(1);
    } else {
      const filteredUserList = [];
      
      // debouncing
      const timeout = setTimeout (() => {
        userList.forEach(user => {
          const userCard = createFilteredCard({user, query});
          if (userCard) {
            filteredUserList.push(userCard);
          }
        });
        setFilteredListRef(filteredUserList);

        // memoizing list of results with unique query
        setMemoizedList(memoizedList => {
          return {
            ...memoizedList,
            [query]: filteredUserList
          }
        });
        setResultsVisibility(true);
        setActiveIndexRef(1);
      }, 800);
      setStoredTimeout(timeout);
    }
  };

  const checkMouseIndex = (index) => {
    setActiveIndexRef(parseInt(index));
  };

  const checkMouseOver = (index) => {
    if (!isCascadingEffectPresent) {
      setActiveIndexRef(parseInt(index));
    }
  };

  const setResultsVisibility = (flag) => {
    if (!searchQuery) {
      showResultList(false);
      return;
    }
    if (!flag) {
      const listElem = document.querySelector("#userlist");
      // storing the last scroll state
      listElem && setListScrollTop(listElem.scrollTop);
      showResultList(flag);
    } else {
      showResultList(flag);
      setTimeout(() => {
        const listElem = document.querySelector("#userlist");
        listElem && listElem.scrollTo(0, listScrollTop)
      }, 0);
    }
  };

  return (
    <Home
      activeIndex={activeIndex}
      checkMouseIndex={checkMouseIndex}
      checkMouseOver={checkMouseOver}
      filteredList={filteredList}
      filterList={filterList}
      isResultListVisible={isResultListVisible}
      setResultsVisibility={setResultsVisibility}
    />
  )
};

export default HomeContainer;
