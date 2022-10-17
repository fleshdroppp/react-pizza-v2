import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params: SearchPizzaParams) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get<Pizza[]>(
    `https://630e0a0ab37c364eb71187f7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data as Pizza[];
});
