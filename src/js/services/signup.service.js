import axios from "axios";
import API_ENV from "../config/api.config";

/**
 * Funxtion login. Make login request to API
 * @param {String} email
 * @param {String} password
 * @param {String} nickname
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} phone
 * @param {String} gender_orientation
 * @param {String} Kharkiv
 * @param {String} city
 * @param {String} country
 * @param {Number} date_of_birth_day
 * @param {Number} date_of_birth_month
 * @param {Number} date_of_birth_year
 */

export async function signup(
  email,
  password,
  nickname,
  first_name,
  last_name,
  phone,
  gender_orientation,
  city,
  country,
  date_of_birth_day,
  date_of_birth_month,
  date_of_birth_year
) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/signup`,
      JSON.stringify({
        email,
        password,
        nickname,
        first_name,
        last_name,
        phone,
        gender_orientation,
        city,
        country,
        date_of_birth_day,
        date_of_birth_month,
        date_of_birth_year,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
