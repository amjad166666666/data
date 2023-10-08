import { useForm } from "react-hook-form"
import { useDispatch , useSelector } from "react-redux";

export function Expense(){

    let dispatch = useDispatch();
    
let {register , handleSubmit}= useForm()

const onSave = (formData)=>{

console.log(formData);

dispatch({
    type:'Add_data',
    data:formData

})

}

let transection = useSelector(function(store){
    return store.adExpense
})

function getIncome(){
    let income = 0;
    transection.asd.map(function(f){
        if(f.amount > 0){
            income = income + +f.amount
        }
    })
    return income;
}

function getExpense(){
    let expense = 0;
    transection.asd.map(function(f){
        if(f.amount < 0){
            expense =  +f.amount
        }
    })
    return expense;
}

let income = getIncome();
let expense = Math.abs(getExpense());

    return (
        <div className="container">
            <h1 className="center">Expense Tracker By Amjad</h1>
            <h2 className="center">Current Balance <br />${income - expense}</h2>
            
        <div className="income_wla"> 
        <h3 className="h3_income">Income <br/>${income}</h3>
        <h3>Expense<br/>${expense}</h3>
        </div>
        <h3 className="center">Transaction History<br/></h3>
        <hr/>
        <ul className="ul_wla">
            {
                transection.asd.map(function(a , myIndex){
                    return <li>
                        <button onClick={function(){
                            dispatch({
                                type:'Del_hogya',
                                deta:myIndex
                            })
                        }}>X</button>
                        <span>{a.desc}</span>
                        <span>{a.amount}</span>
                    </li>
                })
            }
            
        </ul>
        <h3 className="center">Add New Transaction<br/></h3>
        <hr/>
        <form onSubmit={handleSubmit(onSave)}>
        <div>
            <label>Discription</label>
            <br/>
            <input {...register('desc')} type="text" required />
        </div>
        <div>
            <label>Enter Amount</label>
            <br/>
            <input {...register('amount')} type="number" required/>
        </div>
        <div>
        
            <input className="btn" type="Submit"  value= "Add Transaction"/>
        </div>
        </form>

        </div>
    ) 
}