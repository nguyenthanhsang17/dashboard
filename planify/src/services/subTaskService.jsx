import axios from "axios";
import refreshAccessToken from "./refreshToken";

const API_URL = "https://localhost:44320/api/SubTasks";

export const createSubTask = async (subTaskData, token) => {
  try {
    const response = await axios.post(`${API_URL}/create`, subTaskData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("❌ API lỗi:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      try {
        console.log("🔄 Token hết hạn, đang làm mới token...");
        const newToken = await refreshAccessToken();

        if (newToken) {
          console.log("✅ Token mới nhận được:", newToken);
          localStorage.setItem("token", newToken);

          const retryResponse = await axios.post(
            `${API_URL}/create`,
            subTaskData,
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          return retryResponse.data;
        } else {
          throw {
            message: "Không thể làm mới token. Vui lòng đăng nhập lại!",
            status: 401,
          };
        }
      } catch (refreshError) {
        console.error("❌ Lỗi khi refresh token:", refreshError);
        throw {
          message: "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại!",
          status: 401,
        };
      }
    }

    throw (
      error.response?.data || { message: "Lỗi không xác định khi tạo SubTask." }
    );
  }
};
export const getSubtaskByImplementer = async (
  implementerId,
  startDate,
  endDate
) => {
  let token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `https://localhost:44320/api/SubTasks/search/v2?implementerId=${implementerId}&startDate=${startDate}&endDate=${endDate}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.warn("Token expired, refreshing...");
      const newToken = await refreshAccessToken();

      if (newToken) {
        localStorage.setItem("token", newToken);
        try {
          const retryResponse = await axios.get(
            `https://localhost:44320/api/SubTasks/search/v2?implementerId=${implementerId}&startDate=${startDate}&endDate=${endDate}`,
            {
              headers: { Authorization: `Bearer ${newToken}` },
            }
          );
          return retryResponse.data;
        } catch (retryError) {
          console.error("Lỗi từ API sau refresh:", retryError.response?.data);
          return { error: "unauthorized" };
        }
      } else {
        localStorage.removeItem("token");
        return { error: "expired" };
      }
    }

    console.error("Error get subtask:", error);
    return null;
  }
};
