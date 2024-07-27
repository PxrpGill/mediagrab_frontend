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
    truncateWords, getVideo, videoUrl
  } = cardStore;

  const downloadResource = async () => {
    try {
      const response = await getVideo();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const contentDisposition = response.headers.get('content-disposition');
      let filename = `${authorName} - ${title}`;

      if (contentDisposition && contentDisposition.indexOf('filename=') !== -1) {
        filename = contentDisposition.split('filename=')[1].replace(/['"]/g, '');
      } else {
        const contentType = response.headers.get('content-type');
        filename += contentType.includes('audio') ? '.mp3' : '.webm';
      }

      const downloadUrl = response.url;

      const downloadLink = document.createElement('a');
      downloadLink.href = downloadUrl;
      downloadLink.setAttribute('download', filename);

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Ошибка при скачивании ресурса:', error);
    }
  };

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
      truncateWords={truncateWords}
    >
      <button type="button"
        className={styles.download_button}
        onClick={downloadResource}>
        Скачать
      </button>
    </Card>
  );
});
