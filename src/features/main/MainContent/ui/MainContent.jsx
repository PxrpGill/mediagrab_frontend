import { ResultPanel } from "@/entities/ResultPanel/ui/ResultPanel";
import { Search } from "../../Search";
import { useState } from "react";
import { MainLoader } from '@/shared/ui/MainLoader';


export const MainContent = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [link, setLink] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setSearchResults(data);
  }

  return (
    <>
      {isLoading && <MainLoader />}
      <Search onSearch={handleSearch} setLink={setLink} />
      {searchResults && <ResultPanel data={searchResults} link={link} setLoading={setLoading} />}
    </>
  )
} 