import axios from "axios";
class GetApiResponse {
    constructor() {
      this.$header = () => $header(``);
      this.$appName = () => $appName(``);
    }
  
    async getApiResponse(url) {
      return await axios({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response;
      });
    }
    async getApiResponseNotFound(url) {
      try {
        const response = await axios({
          method: "GET",
          url: url,
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.data; 
      } catch (error) {
        return error;
      }
    }
  }
  export default new GetApiResponse();