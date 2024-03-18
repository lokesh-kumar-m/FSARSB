const ListComp=()=>{

    const lst=[{id:1, dec:'drink water'},
    {id:2, dec:'water'},
    {id:3, dec:'eat'},    
    {id:4, dec:'meds'}
                ]

    return(
        <div>
            <div className="welcome">
                <div><h1>List of Things </h1></div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>desc</th>
                        </tr>
                    </thead>
                    <tbody>
                         {lst.map((element,i)=>(
                            <tr key={i}>
                                <td>{element.id}</td>
                                <td>{element.dec}</td>
                            </tr>
                        ))}     

                            <tr>    
                                <td>{lst.id}</td>
                                <td>{lst.dec}</td>
                            </tr>
                    </tbody>                    
                </table>
            </div>
        </div>
        
    )
}

export default ListComp