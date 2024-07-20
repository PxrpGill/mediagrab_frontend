import { makeAutoObservable, runInAction } from "mobx";
import { getVideo, downloadVideo, } from "@/shared/api/requests";


class CardStore {
  previewUrl = '';
  authorName = '';
  title = '';
  sponsorSegments = [];

  videoUrl = '';

  quality = '';
  onlyAudio = false;
  sponsorBlock = false;

  isLoadingSearch = false;
  isLoadingDownload = false;

  isError = false;
  Error = 'Упс... Произошла ошибка с нашей стороны. Повторите попытку позднее';

  constructor() {
    makeAutoObservable(this);
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
      const response = getVideo(params);

      runInAction(() => {
        this.previewUrl = response.preview_url;
        this.authorName = response.author_name;
        this.title = response.title;
        this.sponsorSegments = response.sponsor_segments;
      });
    } catch (error) {
      runInAction(() => {
        this.isError = true;
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
      this.setOnlyAudio = userAudio;
    });
  }

  getVideo = async () => {
    try {
      runInAction(() => {
        this.isLoadingDownload = true;
      });

      const params = {
        url: this.videoUrl,
        quality: this.quality,
        only_audio: this.onlyAudio,
        sponsor_block: this.sponsorBlock
      };
      const response = downloadVideo(params);
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

}

export const cardStore = new CardStore();