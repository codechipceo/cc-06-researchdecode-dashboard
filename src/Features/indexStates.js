import {
  categoriesData,
  categoriesTotalCount,
  categoryErrorMsg,
  categoryIsError,
    categoryLoading,
    getAllCategories,
  createCategory
} from "./Slices/categorySlice";

const reduxStore = {
  states: {
    categoriesData,
    categoriesTotalCount,
    categoryErrorMsg,
    categoryIsError,
    categoryLoading,
  },

    sliceMethods: {
        getAllCategories,
        createCategory
  },
};

export {reduxStore} ;
