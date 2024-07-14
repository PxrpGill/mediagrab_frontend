import { ResultPanel } from "@/entities/ResultPanel/ui/ResultPanel";
import { Search } from "../../Search";
import { useState } from "react";
import { MainLoader } from '@/shared/ui/MainLoader';


export const MainContent = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [link, setLink] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isLink, setLinkState] = useState(false);

  return (
    <>
      {isLoading && <MainLoader />}
      <Search onSearch={setSearchResults} setLink={setLink} setLinkState={setLinkState} isLink={isLink} />
      {searchResults && isLink && <ResultPanel data={searchResults} link={link} setLoading={setLoading} />}
    </>
  )
} 