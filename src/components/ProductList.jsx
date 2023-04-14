import React, { useEffect } from 'react';
import { useState } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import { useSearchParams } from 'react-router-dom';
import AllWatch from '../pages/allwatchpage/AllWatch';
import './productList.css';
import { LIMIT } from '../utils/const';
import { Box, MenuItem, Pagination, Select } from '@mui/material';

function ProductsList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { getProduct, products, pageTotalCount } = useProductContext();

  const [page, setPage] = useState(+searchParams.get('_page') || 1);

  const [firstMount, setFirstMount] = useState(true);

  const [inputVal, setInputVal] = useState(
    searchParams.get('title_like') || ''
  );

  const [category, setCategory] = useState(
    searchParams.get('category') || 'all'
  );

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (category === 'all') {
      setSearchParams({
        title_like: inputVal,
        _page: 1,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _page: 1,
        _limit: LIMIT,
      });
    }
    setPage(1);
  }, [inputVal, category]);

  useEffect(() => {
    if (category === 'all') {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: page,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: page,
      });
    }
  }, [page]);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);

  useEffect(() => {
    getProduct();
  }, [searchParams]);

  function clickHandler(e) {
    setInputVal(e.target.textContent);
    setIsOpen(!isOpen);
  }

  function inputClickHandler() {
    setIsOpen(true);
  }

  return (
    <div className="cardBodies">
      <div className="mainIMGDiv">
        <img
          className="mainIMG"
          src="https://watchbox-sfcc.imgix.net/plp/2022_12_22_PLP+Handoff/PLP+Web+Crop/PLP+Updates_All+Watches.jpg?auto=compress,format&w=2560"
          alt=""
        />
      </div>
      <div className="DivSearch">
        <form className="all-watch-form">
          <div>
            <input
              placeholder="Search"
              value={inputVal}
              type="text"
              onChange={(e) => setInputVal(e.target.value)}
              className="search"
              onClick={inputClickHandler}
            />
            <ul className="autocomplete">
              {inputVal && isOpen
                ? products.map((item) => {
                    return (
                      <li
                        key={item.id}
                        onClick={clickHandler}
                        className="itemcomplete"
                      >
                        {item.title}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <Select
            sx={{ color: '#333', height: '32px' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'mens'}>Men</MenuItem>
            <MenuItem value={'womens'}>Women</MenuItem>
          </Select>
        </form>
      </div>
      <div className="watchCard">
        {products.map((item) => {
          return <AllWatch key={item.id} item={item} />;
        })}
      </div>
      <Box sx={{ maxWidth: 'max-content', margin: '20px auto' }}>
        <Pagination
          color="secondary"
          onChange={(e, p) => setPage(p)}
          page={page}
          count={pageTotalCount}
        />
      </Box>
    </div>
  );
}

export default ProductsList;
