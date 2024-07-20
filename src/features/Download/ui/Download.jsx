import { observer } from "mobx-react-lite";

import { Card } from "@/entities/Card";
import { cardStore } from "@/entities/Card";
import styles from '@/entities/Card/ui/Card.module.css';

export const Download = observer(() => {
  const {
    previewUrl, authorName,
    title, sponsorSegments,
    quality, setQuality,
    onlyAudio, setOnlyAudio,
    sponsorBlock, setSponsorBlock,
    isLoadingDownload, truncateWords,
    getVideo
  } = cardStore;

  const downloadResource = async () => {
    await getVideo();
  }

  return (
    <Card previewUrl={previewUrl}
      authorName={authorName}
      title={title}
      sponsorSegments={sponsorSegments}
      quality={quality}
      setQuality={setQuality}
      onlyAudio={onlyAudio}
      setOnlyAudio={setOnlyAudio}
      sponsorBlock={sponsorBlock}
      setSponsorBlock={setSponsorBlock}
      isLoadingDownload={isLoadingDownload}
      truncateWords={truncateWords}
    >
      <button type="button"
        className={styles.download_button}
        onClick={downloadResource}>
        Скачать
      </button>
    </Card>
  )
});
