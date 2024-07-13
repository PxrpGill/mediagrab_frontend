import { ResultPanel } from "@/entities/ResultPanel/ui/ResultPanel";
import { Search } from "../../Search";
import { useState } from "react";


export const MainContent = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [link, setLink] = useState('');

  const handleSearch = (data) => {
    setSearchResults(data);
  }

  return (
    <>
      <Search onSearch={handleSearch} setLink={setLink} />
      {searchResults && <ResultPanel data={searchResults} link={link} />}
    </>
  )
} 