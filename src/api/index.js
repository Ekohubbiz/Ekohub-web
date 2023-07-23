import ApiHandler from './ApiHandler';

const Api = {
  auth: {
    signInEmail: (data) => ApiHandler.post(`/users/sign-in`, data),
    signUpEmail: (data) => ApiHandler.post(`/users/sign-up`, data),
    signGoogle: (token) =>
      ApiHandler.get(`/users/auth/google?access_token=${token}`),
    forgotPassword: (data) => ApiHandler.patch(`/users/forgot-password`, data),
    resendForgotPassword: (data) =>
      ApiHandler.post(`/users/resend-verification/email`, data),
    resetPassword: (data) => ApiHandler.patch(`/users/reset-password`, data),
    editProfile: (data) => ApiHandler.patch(`/users/edit-profile`, data),
  },
  user: {
    userDetails: () => ApiHandler.get(`/users/profile/view`),
    userByIdDetails: (id) => ApiHandler.get(`/users/details/${id}`),
  },
  categories: {
    all: () => ApiHandler.get(`/categories/view`),
    business: () => ApiHandler.get(`/business-categories/view`),
    categoryFields: (data) => {
      if (data?.subId) {
        return ApiHandler.get(
          `/categories/schemas/view/${data.id}?sub_category_id=${data.subId}`,
        );
      }
      return ApiHandler.get(`/categories/schemas/view/${data.id}`);
    },
    categoryFieldsFilter: (id, data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/categories/schemas/view/${id}?${queryString}`);
      }
      return ApiHandler.get(`/categories/schemas/view/${id}`);
    },
    subCategory: (id) => ApiHandler.get(`/sub-categories/view/${id}`),
  },
  currency: {
    all: () => ApiHandler.get(`/currencies/view`),
  },
  images: {
    single: (data) => ApiHandler.post(`/media/upload-one`, data),
    multiple: (data) => ApiHandler.post(`/media/upload-multiple`, data),
  },
  products: {
    all: (data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/products/view-all?${queryString}`);
      }
      return ApiHandler.get(`/products/view-all`);
    },
    createProduct: (data) => ApiHandler.post(`/products/add`, data),
    editProduct: (data) => ApiHandler.patch(`/products/edit`, data),
    favourite: (data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/products/favourites/view-all?${queryString}`);
      }
      return ApiHandler.get(`/products/favourites/view-all`);
    },
    storeOwnerProduct: (id, status) =>
      ApiHandler.get(
        `/products/store/view-all/${id}?status=${status || 'active'}`,
      ),
    single: (id) => ApiHandler.get(`/products/view-one/${id}`),
    singleSlug: (id) => ApiHandler.get(`/products/slug/view-one/${id}`),
    addFavourite: (data) => ApiHandler.post(`/products/favourites/add`, data),
    removeFavourite: (id) =>
      ApiHandler.delete(`/products/favourites/remove/${id}`),
    addReview: (data) => ApiHandler.post(`/products/reviews/add`, data),
    discover: () => ApiHandler.get(`/discoveries/view-all`),
    discoverOne: (id) => ApiHandler.get(`/discoveries/view-one/${id}`),
    addReview: (data) => ApiHandler.post(`/similar/view-all`, data),
    related: (id, data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/products/related/${id}?${queryString}`);
      }
      return ApiHandler.get(`/products/related/${id}`);
    },
    reviews: (id) => ApiHandler.get(`/products/reviews/view-all/${id}`),
    recentlyViewed: () => ApiHandler.get(`/products/recently-viewed/view-all`),
    storeProduct: (id, data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/products/store/view-all/${id}?${queryString}`);
      }
      return ApiHandler.get(`/products/store/view-all/${id}`);
    },
    deleteProduct: (id) => ApiHandler.delete(`/products/delete/${id}`),
    reportProduct: (data) => ApiHandler.post(`/products/complaint`, data),
  },
  stores: {
    all: (data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/stores/view-all?${queryString}`);
      }
      return ApiHandler.get(`/stores/view-all`);
    },
    create: (data) => ApiHandler.post(`/stores/create`, data),
    edit: (data) => ApiHandler.patch(`/stores/edit`, data),
    viewOne: (id) => ApiHandler.get(`/stores/view-one/${id}`),
    viewOneSlug: (id) => ApiHandler.get(`/stores/slug/view-one/${id}`),
    addReview: (data) => ApiHandler.post(`/stores/reviews/add`, data),
    reviews: (id) => ApiHandler.get(`/stores/reviews/view-all/${id}`),
    blockStore: (data) => ApiHandler.post(`/stores/block`, data),
    unBlockStore: (id) => ApiHandler.delete(`/stores/block/${id}`),
    viewBlockStores: () => ApiHandler.get(`/stores/block?paginate=100`),
  },
  search: {
    searchProducts: (data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/products/search?${queryString}`);
      }
      return ApiHandler.get(`/products/search`);
    },
    dynamicSearchProduct: (data) =>
      ApiHandler.post(
        `/products/dynamic-filter-search
    `,
        data,
      ),
    searchStores: (data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/stores/search?${queryString}`);
      }
      return ApiHandler.get(`/stores/search`);
    },
  },
  notifications: {
    all: (data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/notifications/view?${queryString}`);
      }
      return ApiHandler.get(`/notifications/view`);
    },
  },
  faq: {
    all: (data) => {
      let queryString;

      if (data) {
        queryString = Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join('&');

        return ApiHandler.get(`/faqs/view?${queryString}`);
      }
      return ApiHandler.get(`/faqs/view`);
    },
  },
  conversations: {
    send: (data) => ApiHandler.put(`/conversations/create-update`, data),
  },
};

export default Api;
