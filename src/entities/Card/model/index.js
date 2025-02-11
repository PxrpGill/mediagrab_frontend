import { makeAutoObservable, runInAction } from "mobx";
import { getVideo } from "@/shared/api/requests";


class CardStore {
  previewUrl = '';
  authorName = '';
  title = '';
  sponsorSegments = [];
  isGettedData = false;

  videoUrl = '';

  quality = 'high';
  onlyAudio = false;
  sponsorBlock = false;

  isLoadingSearch = false;
  isLoadingDownload = false;

  isErrorInput = false;
  ErrorInput = 'Упс... Произошла ошибка с нашей стороны. Повторите попытку позднее';

  isErrorValidation = false;

  isError = false;
  Error = 'Упс... Произошла ошибка с нашей стороны. Повторите попытку позднее';

  maxLengthWord = 3;
  infoData = [];

  constructor() {
    makeAutoObservable(this);
  }

  truncateWords = (string) => {
    const words = string.split(' ');
    if (words.length > this.maxLengthWord) {
      return words.slice(0, this.maxLengthWord).join(' ') + '...';
    }
    return string;
  }

  setUrl = (url) => {
    runInAction(() => {
      this.videoUrl = url;
    });
  }

  getInformation = async () => {
    try {
      runInAction(() => {
        this.isLoadingSearch = true;
      });

      const params = {
        url: this.videoUrl
      };
      const response = await getVideo(params);

      runInAction(() => {
        this.previewUrl = response.preview_url;
        this.authorName = response.author_name;
        this.title = response.title;
        this.sponsorSegments = response.sponsor_segments;
        this.isGettedData = true;
      });
    } catch (error) {
      runInAction(() => {
        this.isErrorInput = true;
      })
      console.log('Произошла ошибка: ', error);
    } finally {
      runInAction(() => {
        this.isLoadingSearch = false;
      })
    }
  }

  setQuality = (userQuality) => {
    runInAction(() => {
      this.quality = userQuality;
    });
  }

  setSponsorBlock = (userSponsorBlock) => {
    runInAction(() => {
      this.sponsorBlock = userSponsorBlock
    });
  }

  setOnlyAudio = (userAudio) => {
    runInAction(() => {
      this.onlyAudio = userAudio;
    });
  }

  getVideo = async () => {
    try {
      runInAction(() => {
        this.isLoadingDownload = true;
      });

      const response = await fetch(
        `https://api.mediagrab.ru/video_audio?url=${this.videoUrl}&quality=${this.quality}&only_audio=${this.onlyAudio}&sponsor_block=${this.sponsorBlock}`
      );
      return response;
    } catch (error) {
      runInAction(() => {
        this.isError = true;
      })
      console.log('Произошла ошибка: ', error);
    } finally {
      runInAction(() => {
        this.isLoadingDownload = false;
      })
    }
  }

  resetInformation = () => {
    runInAction(() => {
      this.isGettedData = false;
    });
  }

  resetErrorInput = () => {
    runInAction(() => {
      this.isErrorInput = false;
    });
  }

  getFunctionalInformation = async () => {
    try {
      const response = await fetch('https://api.mediagrab.ru/help');
      const data = await response.json();
      runInAction(() => {
        this.infoData = data;
      });
    } catch (error) {
      console.log('Произошла ошибка получения информации о функциях');
    }
  }
}

export const cardStore = new CardStore();