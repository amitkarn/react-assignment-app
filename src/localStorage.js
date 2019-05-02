/**
 * Created by mymac on 02/05/19.
 */
const loadState = ()=> {
    /*
     * fetch store data
     * */
    try {
        const serializedState = localStorage.getItem('store');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

const saveState = (state)=> {

    /*
     * save data changed into store
     * */
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('store', serializedState);
    } catch (err) {
        console.error("Error writing to localStorage");
    }
}

export {
    loadState,
    saveState
}