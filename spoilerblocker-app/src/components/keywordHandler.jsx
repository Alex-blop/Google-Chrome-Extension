import { useState } from "react";

function KeyWordHolder() {
  const [Keywords, setKeywords] = useState([]);
  const [newKeyword, setNewKeyword] = useState("");

  const inputKeyword = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const SubmmitedKeywords = formData.get("keywords");

    if (SubmmitedKeywords && SubmmitedKeywords.trim() !== "") {
      setKeywords([...Keywords, SubmmitedKeywords]);
      setNewKeyword(SubmmitedKeywords);
    }
    e.target.reset();
  };

  const deleteKeywordHandler = (indexToDelete) => {
    const updatedKeywords = Keywords.filter(
      (_, index) => index !== indexToDelete,
    );
    setKeywords(updatedKeywords);
  };

  return (
    <div>
      <div>
        <form onSubmit={inputKeyword}>
          <h1>Enter Keywords</h1>
          <input name="keywords" placeholder="Enter Keywords" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <h1>Current Keywords</h1>
        <ul>
          {Keywords.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteKeywordHandler(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default KeyWordHolder;
