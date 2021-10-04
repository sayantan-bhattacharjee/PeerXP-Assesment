import React, { useState, useEffect, useCallback, createContext } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

// Local Imports
import { getPostAPI, getPageAPI } from "../services/apiservice";

export const DataContext = createContext();

export const ContextProvider = (props) => {
  const [postData, setPostData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await getPostAPI();
      console.log(111, res);
      setPostData(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchPages = useCallback(async () => {
    try {
      const res = await getPageAPI();
      console.log(112, res);
      setPageData(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (loading === true) {
      fetchPosts();
      fetchPages();
      setLoading(false);
    }
  }, [fetchPosts, fetchPages, loading]);
  return (
    <DataContext.Provider value={[postData, setPostData]}>
      {props.children}
    </DataContext.Provider>
  );
};
