import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

function ExpenseChart({transactions}){

    const expenses= transactions.filter(

        (item) => item.type === "expense"
    )

    const categoryData= {}

    expenses.forEach((item)=>{

        if(categoryData[item.category]){

            categoryData[item.category] += item.amount
        }else{
            categoryData[item.category] = item.amount
        }
    })

    const data= Object.keys(categoryData).map((key)=> ({
        name: key,
        value:categoryData[key]
    }))

    const COLORS = [ "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d" ]

    return(
        <div>
            <h2>Expense by Category</h2>

            {data.length === 0 ? ( <p>No expense data</p> ) :(
                <PieChart width={1000} height={400}>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                        {data.map((entry, index)=>(
                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            )}
        </div>
    )

}

export default ExpenseChart