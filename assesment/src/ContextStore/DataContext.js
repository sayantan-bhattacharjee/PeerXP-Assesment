import React, { useState, useEffect, useCallback, createContext } from "react";

// Local Imports
import {
  getPostAPI,
  getPageAPI,
  getAuthorsAPI,
  getTagsAPI,
} from "../services/apiservice";

export const DataContext = createContext();

export const ContextProvider = (props) => {
  const [postData, setPostData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [tags, setTags] = useState([]);
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
  const fetchAuthors = useCallback(async () => {
    try {
      const res = await getAuthorsAPI();
      console.log(113, res);
      setAuthors(res);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchTags = useCallback(async () => {
    try {
      const res = await getTagsAPI();
      console.log(114, res);
      setTags(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (loading === true) {
      fetchPosts();
      fetchPages();
      fetchAuthors();
      fetchTags();
      setLoading(false);
    }
  }, [fetchPosts, fetchPages, loading]);
  return (
    <DataContext.Provider value={[postData, setPostData]}>
      {props.children}
    </DataContext.Provider>
  );
};
