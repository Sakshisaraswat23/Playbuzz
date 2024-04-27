import create from 'zustand';

// useAuthStore is a hook and create will make a central store
// create method help to create a store
// set --> set is used to change any state of a variable here username

//first is setting initial value and the action.
export const useAuthStore = create((set) => ({
    auth : {
        username : '',
        active : false
    },
    setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
}))

//for action: take the prev state and than change the necessary changes.