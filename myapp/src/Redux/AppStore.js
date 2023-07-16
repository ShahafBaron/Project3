const AppStore = (state = { movie: [], member: [] }, action) => {
  switch (action.type) {
    case "EditMovie":
      return { ...state, movie: [...state.movie, action.payload] };

    case "ClearMovie":
      let arr = [];
      return { ...state, movie: arr };

    case "EditMember":
      return { ...state, member: [...state.member, action.payload] };

    case "ClearMember":
      let arr2 = [];
      return { ...state, member: arr2 };

    default:
      return state;
  }
};

export default AppStore;
