function KeyWordHolder(){
    const keywords = []
    return <div>
        <h1>Test</h1>
        <div className="searchBar">
            <h1>Keyword enterer</h1>
            <input id="EnteredValue" placeholder="Enter Text" type="text"></input>
        </div>

        <div className="submissionHandler">
            <button onClick={KeyWordHandler}>Submit</button>
        </div>
    </div>
}

function KeyWordHandler(){
    let input = document.getElementById("EnteredValue")
    alert(input)
}

export default KeyWordHolder;