import './Home.css'
function FoodList({data}) {
    return ( 
        <div>
            <h1>Food List</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((f,index)=>
                        <tr key={index}>
                            <td>{f.id}</td>
                            <td>{f.name}</td>
                            <td>{f.price}</td>
                        </tr>                       
                    )}
                </tbody>
            </table>
        </div>
     );
}

export default FoodList;