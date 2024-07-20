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
    truncateWords, getVideo
  } = cardStore;

  const downloadResource = async () => {
    try {
      // Получаем данные файла с сервера
      const response = await getVideo();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Получаем имя файла из заголовка Content-Disposition или устанавливаем дефолтное имя
      const contentDisposition = response.headers.get('content-disposition');
      let filename = title;

      if (contentDisposition && contentDisposition.indexOf('filename=') !== -1) {
        filename = contentDisposition.split('filename=')[1].replace(/['"]/g, '');
      } else {
        const contentType = response.headers.get('content-type');
        filename += contentType.includes('audio') ? '.mp3' : '.webm';
      }

      // Получаем URL из ответа и создаем ссылку для скачивания
      const downloadUrl = response.url; // Здесь предполагается, что URL является прямым URL для скачивания

      // Создаем элемент <a> и задаем его атрибуты
      const downloadLink = document.createElement('a');
      downloadLink.href = downloadUrl;
      downloadLink.setAttribute('download', filename);

      // Добавляем элемент <a> в документ и кликаем его для начала загрузки
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Ошибка при скачивании ресурса:', error);
    }
  };

  // Функция для преобразования ReadableStream в Blob
  const streamToBlob = async (stream) => {
    const reader = stream.getReader();
    const chunks = [];
    let result = await reader.read();
    while (!result.done) {
      chunks.push(result.value);
      result = await reader.read();
    }
    return new Blob(chunks);
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
