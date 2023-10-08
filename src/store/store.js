import { createStore , combineReducers } from "redux";

let some1 = {
asd:[]
}

function adExpense(oldData = some1 , newData){
    oldData = {...oldData}
    if(newData.type == 'Add_data'){
        oldData.asd.push(newData.data)
    }else if(newData.type == 'Del_hogya'){
        oldData.asd.splice(newData.deta , 1)
    }
    return oldData;

}

let sms = combineReducers({adExpense})
export  let meraStore = createStore(sms);